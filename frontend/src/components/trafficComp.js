import React from 'react';
import { useState } from "react";
import data from "../fakeTraffic-data.json";


export default () => {
    const [packets, setPackets] = useState(data);
    return (<tbody> 
        {packets.map((packet) => (
            <tr className="packetRow">
                <td className="packetId">{packet.id}</td>
                <td>{packet.source}</td>
                <td>{packet.destination}</td>
                <td>{packet.rawData}</td>
                <td>{packet.Description}</td>
            </tr>
         ))}
    </tbody>)
}

