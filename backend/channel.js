import can from 'socketcan'
import Dbc, { Can } from 'dbc-can'
import PacketManager from './packet.js';

export default class Channel{
    constructor(iFace, traffic){
        var dbc = new Dbc();
        this.channel = can.createRawChannel(iFace, true);

        dbc.load(process.env.DBC).then(data => {
        var canDBC = new Can(data);
        
        console.log(dbc.data.messages)

        this.channel.addListener('onMessage', (msg) => {
            try{
   
                // console.log(msg)
                let dbcid = 4 << 29;
                dbcid = dbcid | msg.id;
                dbcid = dbcid >>> 0;
    
                const canFrame = canDBC.createFrame(dbcid, [...msg.data])
                let boundMsg = canDBC.decode(canFrame)
                let boundSignals = boundMsg?.signals;

                console.log(boundSignals)

                var packet = new PacketManager(msg, dbcid, boundMsg.name, boundSignals)

                traffic.addPacket(packet)

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