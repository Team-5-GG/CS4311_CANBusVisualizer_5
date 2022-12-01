import CanMap from "./CanMap";
import {ReactDiagram} from "gojs-react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ModifyIconDropdown from './canbus-pages/ModifyIconDropdown';
<CanMap/>
function CANBusDisplayer(){
    return(
        <>
        <Navbar>
            <ModifyIconDropdown/>
        </Navbar>
        <div>
            <ReactDiagram
                divClassName="diagram-component"
                initDiagram={CanMap}
            />
        </div>
        <Navbar>
            <Button id = "loadNodesButton">Load Nodes</Button>
        </Navbar>
        </>
    );
}
export default CANBusDisplayer;
