import "./displayer.css"
import ContextMenu from "./ContextMenu";
import Traffic from './components/trafficComp.js'
import { useState } from "react";
import $ from 'jquery'; 
//import data from "./fakeTraffic-data.json";
import 'datatables.net-bs5';
import 'datatables.net-buttons-bs5';




export function PacketDisplayer() {
    $(document).ready(function() {
        $("#dtHorizontalVerticalExample").DataTable({
            retrieve: true,
            "bLengthChange": false,
            "bPaginate": false,
            
        });
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
            <link rel="stylesheet" href="https://cdn.datatables.net/select/1.5.0/css/select.bootstrap5.min.css"></link>
            <link rel="stylesheet" href="https://cdn.datatables.net/1.13.1/css/dataTables.bootstrap5.min.css"></link>
        </div>
    );
}

export default PacketDisplayer;

