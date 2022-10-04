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
import { useState } from "react";
import data from "./fakeTraffic-data.json";


export function PacketDisplayer(){

    //window.addEventListener('popstate', rightClick())
    // document.getElementsByTagName("div").onpageshow = rightClick();
    const [packets, setPackets] = useState(data);

    return(
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
            {packets.map((packet) => ( 
                <tr className="packetRow">
                    <td className="packetId">{packet.id}</td>
                    <td>{packet.source}</td>
                    <td>{packet.destination}</td>
                    <td>{packet.rawData}</td>
                    <td>{packet.Description}</td>
                </tr>
             ))}
            
            {/*
            <tr className="packetRow">
                <td className="packetId">2</td>
                <td>Lights</td>
                <td>Seat Heater</td>
                <td>RAW DATA HERE</td>
                <td>DESCRIPTION HERE</td>
            </tr> 
            <tr className="packetRow">
                <td className="packetId">3</td>
                <td>Lights</td>
                <td>Seat Heater</td>
                <td>RAW DATA HERE</td>
                <td>DESCRIPTION HERE</td>
            </tr>
            <tr className="packetRow">
                <td className="packetId">4</td>
                <td>Lights</td>
                <td>Seat Heater</td>
                <td>RAW DATA HERE</td>
                <td>DESCRIPTION HERE</td>
            </tr>
            <tr className="packetRow">
                <td className="packetId">5</td>
                <td>Lights</td>
                <td>Seat Heater</td>
                <td>RAW DATA HERE</td>
                <td>DESCRIPTION HERE</td>
            
            </tr>
            <tr className="packetRow">
                <td className="packetId">6</td>
                <td>Lights</td>
                <td>Seat Heater</td>
                <td>RAW DATA HERE</td>
                <td>DESCRIPTION HERE</td>
            
            </tr> */}
        </tbody>
        
</table>

<ContextMenu></ContextMenu>


</div>

    );
}

export default PacketDisplayer;