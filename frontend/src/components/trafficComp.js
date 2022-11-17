//import React from 'react';
import { useState, useEffect } from 'react'

//import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
//import data from "../fakeTraffic-data.json";


export default function Traffic() {
    //const [packets, setPackets] = useState(data);
    const traffPackets = []
    const [packets, setPackets] = useState([])
//a means of telling React to do something after render
    useEffect(() => {
        
        const eventSource = new EventSource('http://localhost:5000/packet-stream');
        eventSource.onmessage = (e) => { console.log(e.data)
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


/*        return (<tbody>
            {packets.map((packet) => (
                    <tr className="packetRow">
                        <td className="packetId">{packet.id}</td>
                        <td>{packet.source}</td>
                        <td>{packet.destination}</td>
                        <td>{packet.rawData}</td>
                        <td>{packet.Description}</td>
                    </tr>
                 ))}
                 </tbody>
                 )} */

