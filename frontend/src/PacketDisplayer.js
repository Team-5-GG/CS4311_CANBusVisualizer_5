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
import { useState } from "react";
//import data from "./fakeTraffic-data.json";
//for lazy loading
import React, { Component, lazy, Suspense } from "react";
//import MyComp from './components/myComp';

const MyComp = lazy(() => import('./components/trafficComp'));

export function PacketDisplayer(){

    //window.addEventListener('popstate', rightClick())
    // document.getElementsByTagName("div").onpageshow = rightClick();
    //const [packets, setPackets] = useState(data);

    //render() {
    //Can it this still be a function? ill try to make it work
    return(
        <div>
        <table id="dtHorizontalVerticalExample" className="table table-striped table-bordered table-sm table-hover" cellSpacing="0" width="100%">
        <thead>
            <tr>
            <th>ID #</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Raw Data</th>
            <th>Description</th>
            </tr>
        </thead>
        <Suspense fallback={<div>Delay...</div>}>
        <MyComp>Dynamic</MyComp>
        </Suspense>
</table>
<ContextMenu></ContextMenu>
</div>
    );
    //};
}

export default PacketDisplayer;