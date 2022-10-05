import can from 'socketcan'
import Dbc, { Can } from 'dbc-can'

//const dbc = new Dbc();

/*dbc.load('./../../test.dbc').then(data=>{
    const can = new Can(data);
    const canFrame = can.createFrame(236, [40, 200, 100, 140, 23, 255, 66, 12]);

    let boundMsg = can.decode(canFrame);

    let boundSignals = boundMsg?.signals;
    console.log(boundSignals);

})*/


var channel = can.createRawChannel('can0', true);
for(let i = 0; i < 1000; i++){
    channel.send({"id":"392", "data":Buffer.from([0x01, 0x00, 0x00, 0x00])});
    //console.log(Buffer.from('01000000'))
    let len = Buffer.from([0x01, 0x00, 0x00, 0x00]);
    console.log(len);
}
//channel.addListener('onMessage', (msg) => {console.log(msg);});
export default channel