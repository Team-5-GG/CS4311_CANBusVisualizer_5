import UseContextMenu from "./UseContextMenu";
import EditPacket from "./editPacketData";
import './displayer.css'
import {useState} from 'react'

export function ContextMenu(){

    const { anchorPoint, show } = UseContextMenu();
    if (show){
        console.log("\nGED\n")//"ged")
        return(
            <>
                <div id="context-menu" style={{ top: anchorPoint.y, left: anchorPoint.x }}>
                    <button type="button" className="item" onClick={()=>window.location.href = "./editPacket"}>Edit</button>
                    <button className="item">Replay</button>
                    <button className="item">Delete</button>
                </div>
            </>
        );
    }
    return <></>;
};

export default ContextMenu;
