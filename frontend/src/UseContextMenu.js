import { useEffect, useCallback, useState } from "react";

const UseContextMenu = () => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const handleContextMenu = useCallback(
    (item) => (event) => {
      console.log(item);
      event.preventDefault();
      console.log("prevented default")
      setAnchorPoint({ x: event.pageX, y: event.pageY });
      setShow(true);
    },
    [setShow, setAnchorPoint]
  );

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

  useEffect(() => {
    // scope is an array of tr.packetRow elements.
    const scope = document.querySelectorAll("tbody.packetRow"); //"tr.packetRow"); 
    
    document.addEventListener("click", handleClick);

    if(scope){
      // forEach below adds an event listener to all items of the table
      scope.forEach((item) => {item.addEventListener("contextmenu", handleContextMenu(item))});
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