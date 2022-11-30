import { useState, useEffect } from 'react'
//import data from "../fakeTraffic-data.json";
import ContextMenu from '../ContextMenu.js'


// This class also exports nodes as well to CANBusDisplayer.js
export default function Traffic() {
    const traffPackets = []
    var packetID
    var packetName
    var packetTime
    var packetDataArr
    var packetDest
    
//const [packets, setPackets] = useState([])
//a means of telling React to do something after render
    useEffect(() => {
        
        const eventSource = new EventSource('http://localhost:5000/packet-stream');
        eventSource.onmessage = (e) => { //console.log(e.data)
        const data = JSON.parse(e.data)
        packetID = data.packet.id
        packetName = data.packet.name
        packetTime = data.packet.timestamp
        packetDataArr = data.packet.rawPacket.data.data
        packetDest = data.packet.rawPacket.id
        traffPackets.push([packetID, packetName, packetTime, packetDataArr, packetDest])

        document.getElementById('packet').innerHTML += `<tr className="packetRow" onClick='handleClick(${packetID}, ${packetDataArr})'>
                <td>${packetID+"-"+packetName}</td>
                <td>${packetTime}</td>
                <td>${packetDest}</td>
                <td>${packetDataArr}</td>
                <td>${"Some Description"}</td> </tr>`

        function handleClick(packetID, packetDataArr){
            console.log(packetID);
        }

        
        // const rowsToAddClickListener = document.querySelectorAll(".packetRow")
        // if (rowsToAddClickListener){
        //     rowsToAddClickListener.forEach((item) => {item.addEventListener("click", function(){console.log(item)})});
        // }
        
        //console.log("traffic-->"+packetID+"-"+packetName)
        //<Packet iD={packetID} name={packetName} ts={packetTime} data={packetDest} dest={packetDataArr} ></Packet> */}
        return () => {
            eventSource.close();
        }};
    }
    , []);
    return (
        <>
        <tbody id='packet' className="packetRow">
        </tbody>
        </>
    )}



//The Packet subComponent below 
function Packet(iD, name, ts, datA, dest) {
    //let [data, setData] = useState([]); //as an empty array
    let data = iD+" "+name+" "+ts+" "+datA+" "+dest
    // I want to immediately set the packet w/this arrow function below 
    /*useEffect(() => {
        setData([id, name, ts, data, dest]);
    }, []);*/
    console.log("From Packet Component -->"+data)
    return (
        {/* <tr className="packetRow">
                <td className="packetID">double{data[0]}</td>
                <td>double{data[1]}</td>
                <td>double{data[2]}</td>
                <td>double{data[3]}</td>
    <td>double{data[4]}</td>
    </tr> */}
    );
}