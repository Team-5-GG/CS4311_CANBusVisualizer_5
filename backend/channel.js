import can from 'socketcan'
import Dbc, { Can } from 'dbc-can'
import PacketManager from './packet.js';
import TrafficHolder from './traffic.js';

export default class Channel{
    constructor(iFace, baudRate, traffic){
        var dbc = new Dbc();
        this.channel = can.createRawChannel(iFace, true);

        dbc.load(process.env.DBC).then(data => {
        var canDBC = new Can(data);
        
        //console.log(data.messages.get('EEC18'))
        let i = 0;

        this.channel.addListener('onMessage', (msg) => {
            try{
   
                //console.log(msg)
                let dbcid = 4 << 29;
                dbcid = dbcid | msg.id;
                dbcid = dbcid >>> 0;
    
                const canFrame = canDBC.createFrame(dbcid, [...msg.data])
                let boundMsg = canDBC.decode(canFrame)
                let boundSignals = boundMsg?.signals;

                //console.log(msg)
                //console.log(boundSignals)

                var packet = new PacketManager(msg, dbcid, boundMsg.name, boundSignals)

                traffic.addPacket(packet)
                
                if(i == 20){
                    let testList = traffic.sortHighestID();
                    traffic.printNewList(testList);
                    //console.log(packet.rawPacket)
                }
                i++;
                
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