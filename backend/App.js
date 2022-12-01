// import TrafficHolder from "./traffic.js";
// import Channel from "./channel.js";
// import NodeHolder from "./nodelist.js";

// export var traffic;
// export var channel;
// export var nodeHolder;

// export default function runApp(app){
//     traffic = new TrafficHolder();
//     nodeHolder = new NodeHolder();

//     channel = new Channel('can0', 100, traffic, nodeHolder);

//     //channel.start()
//     //var timer = setInterval(()=>{console.log('stopping'); channel.stop(); clearInterval(timer);}, 3000)
//     //var timer2 = setInterval(()=>{console.log('starting'); channel.start(); clearInterval(timer2);}, 6000)
    
//     // while (true){
//     //     channel.send('392', Buffer.from([0x01, 0x00, 0x00, 0x00]));
//     // }
//     //return JSON.stringify({packet: traffic.traffic[traffic.traffic.length-1]});
// }

import TrafficHolder from "./traffic.js";
import Channel from "./channel.js";
// import NodeHolder from "./nodelist.js";

export var nodeHolder
export var traffic
var channel

export function runApp(){
    traffic = new TrafficHolder();
    
    channel = new Channel(traffic);

    channel.start();

    // var timer = setInterval(function(){
    //     channel.stop();
    //     clearInterval(timer);

    //     let timeRange = [new Date('2022-11-26T21:25:00.000Z'),new Date('2022-11-26T21:26:00.000Z')]
        
    //     // timeRange = JSON.stringify(timeRange)

    //     // console.log(JSON.parse(timeRange))

    //     console.log(traffic.traffic)

    //     console.log(traffic.traffic[0].timestamp)

    //     console.log(new Date('2022-11-26T21:03:00.000Z'))

    //     console.log('BEGINNING FILTERING...')

    //     timeRange = ["2022-11-29T03:22:50.000Z", "2022-11-29T03:23:51.000Z"]

    //     let filteredPackets = traffic.filterPackets(null, 'UPBAC', null)

    //     console.log(filteredPackets)
    // }, 3000)

    // while (true){
    //     channel.send('392', Buffer.from([0x01, 0x00, 0x00, 0x00]));
    // }
}

export function stopApp(){
    console.log('Releasing variables...')
    traffic = undefined

    console.log('Closing channel...')
    channel.stop()
}