import TrafficHolder from "./traffic.js";
import Channel from "./channel.js";
import NodeHolder from "./nodelist.js";

export default function runApp(app){
    console.log('something');
    var traffic = new TrafficHolder();
    var nodeHolder = new NodeHolder();

    var channel = new Channel('can0', 100, traffic, nodeHolder);
    
    //Basic express implementation
    app.get('/packet-stream',(req, res) => {
        console.log('Got /packet-stream!!'); //to terminal
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Connection', 'keep-alive');
        res.flushHeaders();

        let counter = 0;
        let interValID = setInterval(() => {
            counter++;
            if (counter >= 100) {
                clearInterval(interValID);
                res.end(); // terminates SSE session
                return;
            }

            res.write(`data: ${JSON.stringify({packet: traffic.traffic[traffic.traffic.length-1]})}\n\n`); // res.write() instead of res.send()
        }, 1000);

        res.on('close', () => {
            console.log('client dropped me');
            clearInterval(interValID);
            res.end();
        });
    })

    app.get('/packet-stream',(req, res) => {
        console.log('Got /packet-stream!!'); //to terminal
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Connection', 'keep-alive');
        res.flushHeaders();

        let counter = 0;
        let interValID = setInterval(() => {
            counter++;
            if (counter >= 100) {
                clearInterval(interValID);
                res.end(); // terminates SSE session
                return;
            }

            res.write(`data: ${JSON.stringify({packet: traffic.traffic[traffic.traffic.length-1]})}\n\n`); // res.write() instead of res.send()
        }, 1000);

        res.on('close', () => {
            console.log('client dropped me');
            clearInterval(interValID);
            res.end();
        });
    })

    app.get('/node-stream',(req, res) => {
        console.log('Got /node-stream!!'); //to terminal
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Connection', 'keep-alive');
        res.flushHeaders();

        let counter = 0;
        let interValID = setInterval(() => {
            counter++;
            if (counter >= 100) {
                clearInterval(interValID);
                res.end(); // terminates SSE session
                return;
            }
            var data = nodeHolder.getnodelist();

            res.write(`data: ${JSON.stringify(data)}\n\n`); // res.write() instead of res.send()
        }, 1000);

        res.on('close', () => {
            console.log('client dropped me');
            clearInterval(interValID);
            res.end();
        });
    })

    console.log('channel starting')
    channel.start();

    // while (true){
    //     channel.send('392', Buffer.from([0x01, 0x00, 0x00, 0x00]));
    // }
    //return JSON.stringify({packet: traffic.traffic[traffic.traffic.length-1]});
}
