import "./displayer.css"
import ContextMenu from "./ContextMenu";
import Traffic from './components/trafficComp.js'
import { useState } from "react";
import $ from 'jquery'; 
//import data from "./fakeTraffic-data.json";
import 'datatables.net';



export function PacketDisplayer() {
    $(document).ready(function() {
        $("#dtHorizontalVerticalExample").DataTable();
      });

    return (
        
        <div className="packetDisplayerContainer">
            <button class="filter">Filter</button>

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
                <Traffic />
            </table>
            <ContextMenu></ContextMenu>
        </div>
    );
}
//runApp(app);

export default PacketDisplayer;

