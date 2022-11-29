import TrafficHolder from "./traffic.js";
import Channel from "./channel.js";

export var traffic

export default function runApp(){
    traffic = new TrafficHolder();

    var channel = new Channel('can0', traffic);

    channel.start();

    var timer = setInterval(function(){
        channel.stop(); 
        clearInterval(timer);

        let timeRange = [new Date('2022-11-26T21:25:00.000Z'),new Date('2022-11-26T21:26:00.000Z')]

        console.log(traffic.traffic)

        console.log(traffic.traffic[0].timestamp)

        console.log(new Date('2022-11-26T21:03:00.000Z'))

        console.log('BEGINNING FILTERING...')

        let filteredPackets = traffic.filterPackets(null, 'AT2', 0)

        console.log(filteredPackets)
    }, 3000)

    // while (true){
    //     channel.send('392', Buffer.from([0x01, 0x00, 0x00, 0x00]));
    // }
}
