import can from 'socketcan'
import Dbc, { Can } from 'dbc-can'

export default class Reader{
    dbc;
    channel;
    canDBC;
    constructor(protocol, iFace){
        this.dbc = new Dbc();
        this.channel = can.createRawChannel('can0', true);

        this.dbc.load('./test.dbc').then(data => {
        this.canDBC = new Can(data);
    
        this.channel.addListener('onMessage', (msg) => {
            try {
                let dbcid = protocol(msg.id)
    
                const canFrame = canDBC.createFrame(dbcid, [...msg.data])
                let boundMsg = canDBC.decode(canFrame)
                let boundSignals = boundMsg?.signals;
    
                console.log(boundSignals)
            } catch (error) {
                console.log('UNDEFINED PACKET: \n', msg)
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