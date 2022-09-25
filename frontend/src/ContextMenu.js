import UseContextMenu from "./UseContextMenu";
import './displayer.css'

export function ContextMenu(){
    const { anchorPoint, show } = UseContextMenu();
    if (show){
        console.log("ged")
        return(
            <div id="context-menu" style={{ top: anchorPoint.y, left: anchorPoint.x }}>
                <a className="item" href="/editPacket">Edit</a>
                <a className="item" href="/editPacket">Replay</a>
                <a className="item" href="/editPacket">Delete</a>
            </div>
        );
    }
    return <></>;
};

export default ContextMenu;
