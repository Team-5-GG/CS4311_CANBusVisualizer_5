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
      /* HTML for context menu:
      <div id="contextMenuDIV">
        <div id="cmLight"></div>
        <div id="cmDark"></div>
      </div>
      */
    
      var contextMenuDIV = document.createElement("div");
      contextMenuDIV.id = "contextMenuDIV";
      // This is the actual HTML LightBox-style context menu, composed of buttons and a background:
      var cmLight = document.createElement("div");
      cmLight.id = "cmLight";
      cmLight.className = "goCXforeground";
      var cmDark = document.createElement("div");
      cmDark.id = "cmDark";
      cmDark.className = "goCXbackground";
      contextMenuDIV.appendChild(cmLight);
      contextMenuDIV.appendChild(cmDark);
    
      var cxMenuButtons = [
        {
          text: 'Copy',
          command: function(diagram) { diagram.commandHandler.copySelection(); },
          isVisible: function(diagram) { return diagram.commandHandler.canCopySelection(); }
        }, {
          text: 'Reset Zoom',
          command: function(diagram) { diagram.commandHandler.resetZoom(); },
          isVisible: function(diagram) { return diagram.commandHandler.canResetZoom(); }
        }, {
          text: 'Label Node',
          command: function(diagram) { diagram.commandHandler.groupSelection(); },
          isVisible: function(diagram) { return diagram.commandHandler.canGroupSelection(); }
        }, {
          text: 'Change Visibility',
          command: function(diagram) { diagram.commandHandler.ungroupSelection(); },
          isVisible: function(diagram) { return diagram.commandHandler.canUngroupSelection(); }
        }, {
          text: 'Edit Text', //done
          command: function(diagram) { diagram.commandHandler.editTextBlock(); },
          isVisible: function(diagram) { return diagram.commandHandler.canEditTextBlock(); }
        }
      ];
    
      var $ = go.GraphObject.make;
      var myContextMenu = $(go.HTMLInfo, {
        show: showContextMenu,
        hide: hideContextMenu
      });
    
      var firstTime = true;
    
      function showContextMenu(obj, diagram, tool) {
        if (firstTime) {
          // We don't want the div acting as a context menu to have a (browser) context menu!
          cmLight.addEventListener('contextmenu', function(e) { e.preventDefault(); return false; }, false);
          cmLight.addEventListener('selectstart', function(e) { e.preventDefault(); return false; }, false);
          contextMenuDIV.addEventListener('contextmenu', function(e) { e.preventDefault(); return false; }, false);
          // Stop the context menu tool if you click on the dark part:
          contextMenuDIV.addEventListener('pointerdown', function(e) { diagram.currentTool.stopTool(); return false; }, false);
          firstTime = false;
        }
    
        // Empty the context menu and only show buttons that are relevant
        cmLight.innerHTML = '';
    
        var ul = document.createElement('ul');
        cmLight.appendChild(ul);
    
        for (var i = 0; i < cxMenuButtons.length; i++) {
          var button = cxMenuButtons[i];
          var command = button.command;
          var isVisible = button.isVisible;
    
          if (!(typeof command === 'function')) continue;
          // Only show buttons that have isVisible = true
          if (typeof isVisible === 'function' && !isVisible(diagram)) continue;
          var li = document.createElement('li');
          var ahref = document.createElement('a');
          ahref.href = '#';
          ahref._command = button.command;
          ahref.addEventListener('pointerdown', function(e) {
            this._command(diagram);
            tool.stopTool();
            e.preventDefault();
            return false;
          }, false);
          ahref.textContent = button.text;
          li.appendChild(ahref);
          ul.appendChild(li);
        }
    
        // show the whole LightBox context menu
        document.body.appendChild(contextMenuDIV);
      };
    
      function hideContextMenu(diagram, tool) {
        document.body.removeChild(contextMenuDIV);
      }


      window.MyHTMLLightBox = myContextMenu;
    })(window);
}

export default MyHTMLLightBox