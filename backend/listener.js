import can from 'socketcan'
import Dbc from 'dbc-can'
import { Can } from 'dbc-can';

var dbc = new Dbc();

const read = dbc.load('./bmw-e90.dbc')
.then(data => {
    // console.log(data);
    const canDBC = new Can(data);

    var channel = can.createRawChannelWithOptions('vcan0', {"non_block_send": true});

    channel.addListener('onMessage', (msg) => {

        try {
            const canFrame = canDBC.createFrame(msg.id, [...msg.data])
            let boundMsg = canDBC.decode(canFrame)
            let boundSignals = boundMsg?.signals;

            console.log(boundSignals)
            // JSON.parse('{"id": 188, "data": 01000000}')
            // channel.send(18802000000);
        } catch (error) {
            // console.log(error)
        }
    });

    channel.start();

    
})

// var network = can.parseNetworkDescription("./canDBC.dbc");
// var channel = can.createRawChannel('vcan0', true);

// channel.addListener('onMessage', (msg) => {
//     // console.log(msg.data.toString());
//     // console.log(msg);
// });

export default read