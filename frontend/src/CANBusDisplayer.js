import CanMap from "./CanMap";
import {ReactDiagram} from "gojs-react";
<CanMap/>
function CANBusDisplayer(){
    return(
        //CAN Map
        <div>
            <ReactDiagram
                divClassName="diagram-component"
                initDiagram={CanMap}
            />
        </div>
    );
}
export default CANBusDisplayer;