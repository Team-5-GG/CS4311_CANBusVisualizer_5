//import React from 'react';
import { useState, useEffect } from 'react'
import data from "../fakeTraffic-data.json";


export default function Traffic() {
    //const [packets, setPackets] = useState(data);

    //eventsrouce in useffect
    const [packets, setPackets] = useState([])
//a means of telling React to do something after render
    useEffect(() => {
        
        const eventSource = new EventSource('http://localhost:5000/packet-stream');
        eventSource.onmessage = (e) => console.log(e.data)
        const data = JSON.parse(e.data)
        setPackets(data)
        return () => {
            eventSource.close();
        };
      
    }
    , []);
{/*<tbody>*/}
    return (<div>
    {packets.map((packet) => (
            <tr className="packetRow">
                <td className="packetId">{packet.packet.rawpacket.data.data[0]}</td>
                <td>something</td>
                <td>something</td>
                <td>something</td>
                <td>something</td>
            </tr>
         ))}
         </div>
         
         )
        }

{/*</tbody>*/}
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


/**    return (<tbody>      {/*packets.map((item) => <code>{item}</code>)
        {packets.map((packet) => (
            <tr className="packetRow">
                <td className="packetId">{packet.id}</td>
                <td>{packet.source}</td>
                <td>{packet.destination}</td>
                <td>{packet.rawData}</td>
                <td>{packet.Description}</td>
            </tr>
         ))}
    </tbody>) */

