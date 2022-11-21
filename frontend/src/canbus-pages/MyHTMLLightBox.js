import './MyHTMLLightBox.css';
import * as go from 'gojs';
const MyHTMLLightBox = () => {
    "use strict";
    /*
    *  Copyright (C) 1998-2022 by Northwoods Software Corporation. All Rights Reserved.
    */
    
    // HTML + JavaScript context menu, made with HTMLInfo
    // This file exposes one instance of HTMLInfo, window.myHTMLLightBox
    // see also LightBoxContextMenu.css and /samples/htmlLightBoxContextMenu.html
    (function(window) {
      // window.MyHTMLLightBox = myContextMenu;








      // // This is the actual HTML context menu:
      var cxElement = document.getElementById("contextMenu");
      var $ = go.GraphObject.make;
      // an HTMLInfo object is needed to invoke the code to set up the HTML cxElement
      var myContextMenu = $(go.HTMLInfo, {
        show: showContextMenu,
        hide: hideContextMenu
      });

      // // We don't want the div acting as a context menu to have a (browser) context menu!
      // cxElement.addEventListener("contextmenu", e => {
      //   e.preventDefault();
      //   return false;
      // }, false);

      function hideCX() {
        if (myContextMenu.currentTool instanceof go.ContextMenuTool) {
          myContextMenu.currentTool.doCancel();
        }
      }

      function showContextMenu(obj, diagram, tool) {
        // Show only the relevant buttons given the current state.
        var cmd = diagram.commandHandler;
        var hasMenuItem = false;
        function maybeShowItem(elt, pred) {
          if (pred) {
            elt.style.display = "block";
            hasMenuItem = true;
          } else {
            elt.style.display = "none";
          }
        }
      //   maybeShowItem(document.getElementById("cut"), cmd.canCutSelection());
      //   maybeShowItem(document.getElementById("copy"), cmd.canCopySelection());
      //   maybeShowItem(document.getElementById("paste"), cmd.canPasteSelection(diagram.toolManager.contextMenuTool.mouseDownPoint));
      //   maybeShowItem(document.getElementById("delete"), cmd.canDeleteSelection());
      //   maybeShowItem(document.getElementById("color"), obj !== null);

      //   // Now show the whole context menu element
      //   if (hasMenuItem) {
      //     cxElement.classList.add("show-menu");
      //     // we don't bother overriding positionContextMenu, we just do it here:
      //     var mousePt = diagram.lastInput.viewPoint;
      //     cxElement.style.left = mousePt.x + 5 + "px";
      //     cxElement.style.top = mousePt.y + "px";
        }

      //   // Optional: Use a `window` pointerdown listener with event capture to
      //   //           remove the context menu if the user clicks elsewhere on the page
      //   window.addEventListener("pointerdown", hideCX, true);
		
      // }

      function hideContextMenu() {
        cxElement.classList.remove("show-menu");
        // Optional: Use a `window` pointerdown listener with event capture to
        //           remove the context menu if the user clicks elsewhere on the page
        window.removeEventListener("pointerdown", hideCX, true);
      }

      <div style="position: relative;"  >
        <div id="myDiagramDiv" style="border: solid 1px black; width:400px; height:400px"></div>
        <ul id="contextMenu" class="menu">
          <li id="cut" class="menu-item" onpointerdown="cxcommand(event)">Cut</li>
          <li id="copy" class="menu-item" onpointerdown="cxcommand(event)">Copy</li>
          <li id="paste" class="menu-item" onpointerdown="cxcommand(event)">Paste</li>
          <li id="delete" class="menu-item" onpointerdown="cxcommand(event)">Delete</li>
          <li id="color" class="menu-item">Color
            <ul class="menu">
              <li class="menu-item" style="background-color: #f38181;" onpointerdown="cxcommand(event, 'color')">Red</li>
              <li class="menu-item" style="background-color: #eaffd0;" onpointerdown="cxcommand(event, 'color')">Green</li>
              <li class="menu-item" style="background-color: #95e1d3;" onpointerdown="cxcommand(event, 'color')">Blue</li>
              <li class="menu-item" style="background-color: #fce38a;" onpointerdown="cxcommand(event, 'color')">Yellow</li>
            </ul>
          </li>
        </ul>
      </div>
    
	  window.MyHTMLLightBox = myContextMenu;
    })(window);
}

export default MyHTMLLightBox