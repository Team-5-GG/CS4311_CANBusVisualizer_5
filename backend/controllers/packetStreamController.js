import {traffic} from '../App.js';
import {channel} from '../App.js';

export const getPacketStream = (req, res) => {
    console.log('Got /packet-stream!!'); //to terminal
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    channel.start()
    let interValID = setInterval(() => {
        res.write(`data: ${JSON.stringify({packet: traffic.traffic[traffic.traffic.length-1]})}\n\n`); // res.write() instead of res.send()
    }, 500);

    res.on('close', () => {
        channel.stop()
        console.log('client dropped me');
        clearInterval(interValID);
        res.end();
    });
}