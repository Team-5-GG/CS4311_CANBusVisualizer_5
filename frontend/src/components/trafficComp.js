//import React from 'react';
import { useState, useEffect } from 'react'

//import data from "../fakeTraffic-data.json";


export default function Traffic() {
    //const [packets, setPackets] = useState(data);
    const traffPackets = []
    const nodes = []

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

    useEffect(() => {
        
        const eventSource = new EventSource('http://localhost:5000/node-stream');
        eventSource.onmessage = (e) => {console.log('e.data ' + e.data.length)
        
        const data = JSON.parse(e.data)

        var union = [...new Set([...nodes, ...data])];
        //nodes.push(data)
        console.log('data: '+data[data.length-1].name)
        console.log('UNION '+ union.length)
        //setPackets(data)
        return () => {
            eventSource.close();
        }};

    }
    , []);

    return (<tbody id='packet'>
            {/*<tr>
                <td>first</td>
                <td>first</td>
                <td>first</td>
                <td>first</td>
                <td>first</td>
            </tr>*/}
         </tbody>
         )
        }



