import TrafficHolder from "./traffic.js";
import Channel from "./channel.js";

export default function runApp(){
    var traffic = new TrafficHolder();

    var channel = new Channel('can0', traffic);

    channel.start();

    var timer = setInterval(function(){
        channel.stop(); 
        clearInterval(timer);

        // traffic.filterPackets(null, )
    }, 3000)

    // while (true){
    //     channel.send('392', Buffer.from([0x01, 0x00, 0x00, 0x00]));
    // }
}
