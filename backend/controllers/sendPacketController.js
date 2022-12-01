
//import { offLimitsList } from "../"
//import * as threads from 'node:worker_threads';
import {channel} from '../App.js';

export const sendPackets = (req, res) => {
    console.log('Got /send!!'); //to terminal
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    /* if(offLimitsList.includes(offLimitsList.data.id)){
        res.write();
    } else{
        var worker = new Worker('send.js');
        worker.postMessage(req.body);
    } */
    
    //var worker = new threads.Worker('./send.js');
    //worker.postMessage(req.body);
    //const rawPacket = req.body

    // console.log(Buffer.from(req.body.rawPacket.data.data))
    channel.send(req.body.rawPacket.id, Buffer.from(req.body.rawPacket.data.data))
    

    res.on('close', () => {
        console.log('client dropped me');
        clearInterval(interValID);
        res.end();
    });
}