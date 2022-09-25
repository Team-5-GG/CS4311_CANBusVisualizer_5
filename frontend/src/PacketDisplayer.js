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


export function PacketDisplayer(){

    //window.addEventListener('popstate', rightClick())
    // document.getElementsByTagName("div").onpageshow = rightClick();
    
    return(
        
        <div>
        <table id="dtHorizontalVerticalExample" className="table table-striped table-bordered table-sm " cellSpacing="0" width="100%">
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
    <tr className="packetRow">
      <td>1</td>
      <td>Lights</td>
      <td>Seat Heater</td>
      <td>RAW DATA HERE</td>
      <td>DESCRIPTION HERE</td>
      
    </tr>
    <tr className="packetRow">
    <td>2</td>
      <td>Lights</td>
      <td>Seat Heater</td>
      <td>RAW DATA HERE</td>
      <td>DESCRIPTION HERE</td>
    </tr>
    <tr className="packetRow">
        <td>3</td>
        <td>Lights</td>
        <td>Seat Heater</td>
        <td>RAW DATA HERE</td>
        <td>DESCRIPTION HERE</td>
    </tr>
    <tr className="packetRow">
        <td>4</td>
        <td>Lights</td>
        <td>Seat Heater</td>
        <td>RAW DATA HERE</td>
        <td>DESCRIPTION HERE</td>
    </tr>
    <tr className="packetRow">
        <td>5</td>
        <td>Lights</td>
        <td>Seat Heater</td>
        <td>RAW DATA HERE</td>
        <td>DESCRIPTION HERE</td>
      
    </tr>
    <tr className="packetRow">
        <td>6</td>
        <td>Lights</td>
        <td>Seat Heater</td>
        <td>RAW DATA HERE</td>
        <td>DESCRIPTION HERE</td>
      
    </tr>
  </tbody>
  
</table>

<ContextMenu></ContextMenu>


</div>

    );
}

export default PacketDisplayer;