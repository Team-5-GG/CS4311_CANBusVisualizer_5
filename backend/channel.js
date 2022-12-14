import can from 'socketcan'
import Dbc, { Can } from 'dbc-can'
import PacketManager from './packet.js';
import NodeManager from './node.js';
import NodeHolder from './nodelist.js';
import { projectDetails } from './controllers/projectConfigController.js';
export default class Channel{
    constructor(baudRate, traffic, nodeHolder){
        var dbc = new Dbc();
        this.channel = can.createRawChannel(projectDetails.channel, true);

        dbc.load('./dbc_files/' + projectDetails.dbcName).then(data => {
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

                var packet = new PacketManager(msg, dbcid, data.messages.get(boundMsg.name).description, boundSignals)
                //console.log(packet)
                if(!nodeHolder.inList(boundMsg.name)){
                    var tempnode = dbc.data.messages.get(boundMsg.name);
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
        console.log('running start');
        this.channel.start()
    }

    stop(){
        console.log('running stop');
        //this.isStarted = false;
        this.channel.stop()
    }

    //isStarted(){
    //    return this.isStarted;
    //}

    send(id, buffer){
        try{
            this.channel.send({"id" : id, "ext" : true, "data" : buffer})
        }catch(error){
            console.log(error)
        }
    }
}