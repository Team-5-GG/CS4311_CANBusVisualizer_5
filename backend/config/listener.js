import can from 'socketcan'

var channel = can.createRawChannel('vcan0', true);

channel.addListener('onMessage', (msg) => {console.log(msg);});

export default channel