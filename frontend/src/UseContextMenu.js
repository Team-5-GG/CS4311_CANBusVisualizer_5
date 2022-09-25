// console.log("got here");
// document.onclick = hideMenu;
// document.oncontextmenu = rightClick;

// function hideMenu(){
//     document.getElementById("context-menu").style.display = "none";
// }
// function rightClick(e){
//     e.preventDefault();

//     if (document.getElementById("context-menu").style.display == "block"){
        
//         hideMenu();
//     }
//     else{
//         var menu = document.getElementById("context-menu")      
//         menu.classList.add("visible");
//         menu.style.left = e.pageX + "px"; 
//         menu.style.top = e.pageY + "px"; 
//     }
// }


// const UseContextMenu = () => {
//     const contextMenu = document.getElementById("context-menu");
//     const scope = document.querySelector("body");
//     console.log("loaded")
    
//     if(contextMenu && scope){
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
//   };

//   export default UseContextMenu;

import { useEffect, useCallback, useState } from "react";

const UseContextMenu = () => {
  console.log("here")
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const handleContextMenu = useCallback(
    (event) => {
      event.preventDefault();
      console.log("prevented default")
      setAnchorPoint({ x: event.pageX, y: event.pageY });
      setShow(true);
    },
    [setShow, setAnchorPoint]
  );

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

  useEffect(() => {
    const scope = document.querySelector("body table");
    document.addEventListener("click", handleClick);

    if(scope){
      scope.addEventListener("contextmenu", handleContextMenu);
    }
    
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });
  console.log(show)
  return { anchorPoint, show };
};

export default UseContextMenu;