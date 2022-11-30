import "./displayer.css"
import ContextMenu from "./ContextMenu";
import Traffic from './components/trafficComp.js'
import { useState } from "react";
import $ from 'jquery'; 
//import data from "./fakeTraffic-data.json";
import 'datatables.net';
import 'datatables.net-buttons-bs5';



export function PacketDisplayer() {
    let table = $(document).ready(function() {
        $("#dtHorizontalVerticalExample").DataTable({
            retrieve: true,
            select:true,
            buttons:[
                'Edit', 'Replay', 'Delete'
            ]
        });
        });
    table.buttons().container().appendTo($('.col-sm-6:eq(0)', table.table().container()));

    

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
        </div>
    );
}

export default PacketDisplayer;

