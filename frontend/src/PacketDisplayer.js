import "./displayer.css"
import ContextMenu from "./ContextMenu";
import { useState } from "react";
import data from "./fakeTraffic-data.json";
import FilterPopUp from './components/FilterPopUp';
//for lazy loading
//import React, { Component, lazy, Suspense } from "react";
//import MyComp from './components/myComp';

//const TrafficComp = lazy(() => import('./components/trafficComp'));




export function PacketDisplayer(){
//class PacketDisplayer extends Component(){
    //window.addEventListener('popstate', rightClick())
    // document.getElementsByTagName("div").onpageshow = rightClick();
    const [packets, setPackets] = useState(data);
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
                <th id ="desc_field">Description <button id="sortBttn"><FilterPopUp></FilterPopUp></button></th>
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
                    <ContextMenu></ContextMenu>
                </tr>
             ))}
        </tbody>

        {//<Suspense fallback={<div>Delay...</div>} >
        //<TrafficComp />
        //</Suspense>
        }
        </table>
        
        </div>
        );
    //}
}

export default PacketDisplayer;
