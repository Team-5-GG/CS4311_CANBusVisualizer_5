import { useState, useEffect } from 'react'
//import data from "../fakeTraffic-data.json";


// This class also exports nodes as well to CANBusDisplayer.js
export default function Traffic() {
    //const [packets, setPackets] = useState(data);
    const traffPackets = []
    //let nodes = []

    const [packets, setPackets] = useState([])
//a means of telling React to do something after render
    useEffect(() => {
        
        const eventSource = new EventSource('http://localhost:5000/packet-stream');
        eventSource.onmessage = (e) => { //console.log(e.data)
        const data = JSON.parse(e.data)
        var packetID = data.packet.id
        var packetName = data.packet.name
        var packetTime = data.packet.timestamp
        var packetDataArr = data.packet.rawPacket.data.data
        var packetDest = data.packet.rawPacket.id

        document.getElementById('packet').innerHTML += `<tr>
                <td>${packetID+"-"+packetName}</td>
                <td>${packetTime}</td>
                <td>${packetDest}</td>
                <td>${packetDataArr}</td>
                <td>${"Some Description"}</td>
                </tr>`
        //setPackets(data)
        return () => {
            eventSource.close();
        }};

    }
    , []);

    /**useEffect(() => { Now in the CANBusDisplayer function
        
        const eventSource = new EventSource('http://localhost:5000/node-stream');
        eventSource.onmessage = (e) => {//console.log('e.data ' + e.data.length)
        //const data = JSON.parse(e.data)
        var map = new Map();
        const data = JSON.parse(e.data)
        var union = [...new Set([...nodes, ...data])];
        var numGroupings = 0;

        for(var i = 0; i < union.length; i++){
            var name = union[i].name;
            var firsttwo= name.slice(0,2);

            if(!map.has(firsttwo)){

                map.set(firsttwo, firsttwo)
                numGroupings++

            }
        }

        console.log("numGroupings: "+numGroupings);

        console.log("map.values "+[...map.values()])
        //////////////////////////////
        //var union = [...new Set([...nodes, ...data])];
        //nodes.push(data)
        nodes = union
        //                      console.log('dataName: '+data[data.length-1].name)
        //console.log('dlc: '+data[data.length-1].dlc)
        //console.log('sendingNode: '+data[data.length-1].sendingNode)
        //console.log('signals: '+data[data.length-1].signals)
        
        //                      console.log('desc: '+data[data.length-1].desc)
       
        // Ignore --> console.log('UNION '+ union.length)
        // Ignore --> console.log('Nodes '+ nodes.length)
        //  Problematic --> setPackets(data)
        return () => {
            eventSource.close();
        }};

    }
    , []);*/

    return (
    <tbody id='packet'> </tbody>
    )}
