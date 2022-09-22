// const contextMenu = document.getElementById("context-menu");
// const scope = document.querySelector("table");

// scope.addEventListener("contextmenu", (event) => {
//   event.preventDefault();

//   const { clientX: mouseX, clientY: mouseY } = event;

//   contextMenu.style.top = `${mouseY}px`;
//   contextMenu.style.left = `${mouseX}px`;

//   contextMenu.classList.add("visible");
// });

// scope.addEventListener("click", (e) => {
//     if (e.target.offsetParent !== contextMenu) {
//       contextMenu.classList.remove("visible");
//     }
//   });

export function PacketDisplayer(){
    return(
        <>
        <table id="dtHorizontalVerticalExample" className="table table-striped table-bordered table-sm " cellSpacing="0"
  width="100%">
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
    <tr>
      <td>1</td>
      <td>Lights</td>
      <td>Seat Heater</td>
      <td>RAW DATA HERE</td>
      <td>DESCRIPTION HERE</td>
      
    </tr>
    <tr>
    <td>2</td>
      <td>Lights</td>
      <td>Seat Heater</td>
      <td>RAW DATA HERE</td>
      <td>DESCRIPTION HERE</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Lights</td>
        <td>Seat Heater</td>
        <td>RAW DATA HERE</td>
        <td>DESCRIPTION HERE</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Lights</td>
        <td>Seat Heater</td>
        <td>RAW DATA HERE</td>
        <td>DESCRIPTION HERE</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Lights</td>
        <td>Seat Heater</td>
        <td>RAW DATA HERE</td>
        <td>DESCRIPTION HERE</td>
      
    </tr>
    <tr>
        <td>6</td>
        <td>Lights</td>
        <td>Seat Heater</td>
        <td>RAW DATA HERE</td>
        <td>DESCRIPTION HERE</td>
      
    </tr>
  </tbody>
  
</table>
<div id="context-menu">
          <a className="item" href="/editPacket">Edit</a>
          <a className="item" href="/editPacket">Replay</a>
          <a className="item" href="/editPacket">Delete</a>
</div>

</>

    );
}

export default PacketDisplayer;