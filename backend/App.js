import TrafficHolder from "./traffic.js";
import Channel from "./channel.js";
import NodeHolder from "./nodelist.js";

export var nodeHolder
export var traffic
export var channel

export function runApp(){
    traffic = new TrafficHolder();
    nodeHolder = new NodeHolder();

    channel = new Channel(5, traffic, nodeHolder);

    channel.start();
}

export function stopApp(){
    console.log('Releasing variables...')
    traffic = undefined
    nodeHolder = undefined

    console.log('Closing channel...')
    channel.stop()
}