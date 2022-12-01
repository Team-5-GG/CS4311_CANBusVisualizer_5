import { nodeHolder } from "../App.js";

export const getNodes = (req, res) => {
    console.log('Got /node-stream!!'); //to terminal
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();
    var nodes = 0;

    let interValID = setInterval(() => {
        if(nodes != nodeHolder.numNodes){
            nodes = nodeHolder.numNodes;
            var data = nodeHolder.getnodelist();
            res.write(`data: ${JSON.stringify(data)}\n\n`); // res.write() instead of res.send()
        }
    }, 500);//2000);


    res.on('close', () => {
        console.log('client dropped me');
        clearInterval(interValID);
        res.end();
    });
}