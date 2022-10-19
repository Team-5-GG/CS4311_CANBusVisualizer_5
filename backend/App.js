import TrafficHolder from "./traffic.js";
import Channel from "./channel.js";

export default function runApp(){
    var traffic = new TrafficHolder();

    var channel = new Channel('can0', 100, traffic);

    channel.start();

    // while (true){
    //     channel.send('392', Buffer.from([0x01, 0x00, 0x00, 0x00]));
    // }
}
