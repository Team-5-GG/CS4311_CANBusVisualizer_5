import UseContextMenu from "./UseContextMenu";
import EditPacket from "./editPacketData";
import './displayer.css'
import {useState} from 'react'

export function ContextMenu(){

    const { anchorPoint, show } = UseContextMenu();
    if (show){
        console.log("ged")
        return(
            <>
                <div id="context-menu" style={{ top: anchorPoint.y, left: anchorPoint.x }}>
                    <button type="button" className="item">Edit</button>
                    <button className="item" href="/editPacket">Replay</button>
                    <button className="item" href="/editPacket">Delete</button>
                </div>
            </>
        );
    }
    return <></>;
};

export default ContextMenu;
