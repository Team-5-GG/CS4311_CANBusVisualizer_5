import "./displayer.css"
import ContextMenu from "./ContextMenu";
import Traffic from './components/trafficComp.js'
import { useState } from "react";
//import data from "./fakeTraffic-data.json";

//for lazy loading
//import React, { Component, lazy, Suspense } from "react";
//import MyComp from './components/myComp';

//const TrafficComp = lazy(() => import('./components/trafficComp'));



export function PacketDisplayer(){
//class PacketDisplayer extends Component(){
    //window.addEventListener('popstate', rightClick())
    // document.getElementsByTagName("div").onpageshow = rightClick();
    
    //const [packets, setPackets] = useState(data);
    /**const url = 'http://localhost:5000/packet-stream';
    const [data, setData] = useState([]);
    const [message, setMessage] = useState('');
    function playTraffic() {
        const eventSource = new EventSource(url);
        eventSource.onmessage = (e) => {
            console.log('something FRONT END');
            console.log(e);
            console.log(e.decoded);
            console.log('FRONT DONE');
        }
        return () => {
            eventSource.close();
        };
    }
    playTraffic(); **/

    //render() {  // Still need to run this as an entire class in order to use as "Component"
    return (
        <div>
        <table id="dtHorizontalVerticalExample" className="table table-striped table-bordered table-sm table-hover" cellSpacing="0" width="100%">
            <thead>
                <tr>
                <th>ID# & Name</th>
                <th>TimeStamp</th>
                <th>Destination</th>
                <th>Raw Data</th>
                <th>Description</th>
                </tr>
        </thead>
        {/*<tbody>*/}
            <Traffic />
            {/**packets.map((packet) => ( 
                <tr className="packetRow">
                    <td className="packetId">{packet.id}</td>
                    <td>{packet.source}</td>
                    <td>{packet.destination}</td>
                    <td>{packet.rawData}</td>
                    <td>{packet.Description}</td>
                </tr>
            ))
        </tbody>*/}
        </table>
        <ContextMenu></ContextMenu>
        </div>
        );
    //} 
}
//runApp(app);


export default PacketDisplayer;

