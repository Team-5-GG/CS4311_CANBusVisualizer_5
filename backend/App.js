import TrafficHolder from "./traffic.js";
import Channel from "./channel.js";
import NodeHolder from "./nodelist.js";

export var traffic;
export var channel;
export var nodeHolder;

export default function runApp(app){
    traffic = new TrafficHolder();
    nodeHolder = new NodeHolder();

    channel = new Channel('can0', 100, traffic, nodeHolder);

    //channel.start()
    //var timer = setInterval(()=>{console.log('stopping'); channel.stop(); clearInterval(timer);}, 3000)
    //var timer2 = setInterval(()=>{console.log('starting'); channel.start(); clearInterval(timer2);}, 6000)
    
    // while (true){
    //     channel.send('392', Buffer.from([0x01, 0x00, 0x00, 0x00]));
    // }
    //return JSON.stringify({packet: traffic.traffic[traffic.traffic.length-1]});
}