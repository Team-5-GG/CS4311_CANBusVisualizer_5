import can from 'socketcan'
import Dbc, { Can } from 'dbc-can'
import PacketManager from './packet.js';
import NodeManager from './node.js';
import NodeHolder from './nodelist.js';

export default class Channel{
    constructor(iFace, baudRate, traffic, nodeHolder){
        var dbc = new Dbc();
        this.channel = can.createRawChannel(iFace, true);

        dbc.load(process.env.DBC).then(data => {
        var canDBC = new Can(data);

        this.channel.addListener('onMessage', (msg) => {
            try{
   
                //console.log(msg)
                let dbcid = 4 << 29;
                dbcid = dbcid | msg.id;
                dbcid = dbcid >>> 0;
    
                const canFrame = canDBC.createFrame(dbcid, [...msg.data])
                let boundMsg = canDBC.decode(canFrame)
                let boundSignals = boundMsg?.signals;

                //console.log(boundMsg)
                // console.log(boundSignals)

                var packet = new PacketManager(msg, dbcid, boundMsg.name, boundSignals)
                if(!nodeHolder.inList(packet.name)){
                    var tempnode = dbc.data.messages.get(packet.name);
                    var node = new NodeManager(tempnode.name,tempnode.id,tempnode.dlc,tempnode.sendingNode,tempnode.signals,tempnode.description);
// Nodes show here-> nodeHolder.addNode(node);
                    nodeHolder.addNode(node);
                }

                traffic.addPacket(packet)
                
                let trafficLength = traffic.traffic.length
                //console.log(traffic.traffic[trafficLength - 1])
                //console.log(traffic.traffic.length)
            } catch (error) {
                // console.log(error)
            }
        });
        })
    }

    start(){
        this.channel.start()
    }

    stop(){
        this.channel.stop()
    }

    send(id, buffer){
        try{
            this.channel.send({"id" : id, "data" : buffer})
        }catch(error){
            console.log(error)
        }
    }
}