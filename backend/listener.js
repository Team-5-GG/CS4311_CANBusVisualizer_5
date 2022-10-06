import can from 'socketcan'
import Dbc, { Can } from 'dbc-can'

const dbc = new Dbc();

const read = dbc.load('./test.dbc').then(data => {
    // console.log(data);
    const canDBC = new Can(data);

    var channel = can.createRawChannel('can0', true);

    channel.addListener('onMessage', (msg) => {
        //console.log(msg);
        try {
            let dbcid = 4 << 29;
            dbcid = dbcid | msg.id;
            dbcid = dbcid >>> 0;
            //console.log(dbcid);
            const canFrame = canDBC.createFrame(dbcid, [...msg.data])
            let boundMsg = canDBC.decode(canFrame)
            let boundSignals = boundMsg?.signals;

            console.log(boundSignals)
            channel.send({"id":"392", "data":Buffer.from([0x01, 0x00, 0x00, 0x00])});
        } catch (error) {
            //console.log(error)
        }
    });

    channel.start();

    
})

export default read