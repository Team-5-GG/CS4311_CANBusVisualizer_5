//import './customContextMenu.js';

// if (window.location.pathname === '/main'){
//     if (window.localStorage){
//         if(!localStorage.getItem('firstload')){
//             localStorage['firstload'] = true;
//             window.location.reload();
//         }
//         else localStorage.removeItem('firstload');
//     }
    

// }

// function rightClick(){
//     console.log("pathname true");
//     const contextMenu = document.getElementById("context-menu");
//     const scope = document.querySelector("body table");


//     if(contextMenu && scope){
//         console.log("loaded")
//         scope.addEventListener("contextmenu", (event) => {
//             event.preventDefault();
        
//             const { clientX: mouseX, clientY: mouseY } = event;
        
//             contextMenu.style.top = `${mouseY}px`;
//             contextMenu.style.left = `${mouseX}px`;
        
//             contextMenu.classList.add("visible");
//         });
        
//         scope.addEventListener("click", (e) => {
//             if (e.target.offsetParent !== contextMenu) {
//                 contextMenu.classList.remove("visible");
//             }
//             });
//     }

// }
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
                <th>ID #</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Raw Data</th>
                <th>Description</th>
                </tr>
        </thead>
        <tbody>
            <Traffic />
            {/**packets.map((packet) => ( 
                <tr className="packetRow">
                    <td className="packetId">{packet.id}</td>
                    <td>{packet.source}</td>
                    <td>{packet.destination}</td>
                    <td>{packet.rawData}</td>
                    <td>{packet.Description}</td>
                </tr>
            ))*/}
        </tbody>
        </table>
        <ContextMenu></ContextMenu>
        </div>
        );
    //} 
}
//runApp(app);


export default PacketDisplayer;
