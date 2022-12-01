import TrafficHolder from "./traffic.js";
import Channel from "./channel.js";
import NodeHolder from "./nodelist.js";

self.addEventListener('message', function(e) {
    var traffic = new TrafficHolder();
    var nodeHolder = new NodeHolder();
    var channel = new Channel('can0', 100, traffic, nodeHolder);
    
    //var packetData = e.data;
    console.log(e.data);
    //channel.send(packetData);

    
    //channel.send('392', Buffer.from([0x01, 0x00, 0x00, 0x00]));
    
    this.self.close();
})