import './displayer.css';
import * as go from 'gojs';
import {ReactDiagram} from 'gojs-react';
import test from './nodeJSON.json'
//additional js that contains the change-node dropdown
import ModifyIconDropdown from './canbus-pages/ModifyIconDropdown';
import { useState, useEffect } from 'react'



function initDiagram() {
  console.log("diagram started");
  const $ = go.GraphObject.make;
  // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
  const diagram =
    $(go.Diagram,
      {
        'undoManager.isEnabled': true,  // must be set to allow for model change listening
        // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
        'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
        model: $(go.GraphLinksModel, //allows us to have any # of links btwn nodes
          {
            linkKeyProperty: "key",
            linkFromPortIdProperty: "fromPort",  // required information:
            linkToPortIdProperty: "toPort",  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
            nodeDataArray: test.nodeDataArray,
            linkDataArray: test.linkDataArray
        })
      });


  const portSize = new go.Size(8, 8);
  
  // define a simple Node template
  diagram.nodeTemplate = 
    
    $(go.Node, 'Horizontal',  // This means everything inside this template will be laid out horizontally. the Shape will go around the TextBlock
    
    $(go.Panel, "Spot",
    $(go.Panel, "Auto",
    //used for the line at the centre
    $(go.Shape,
      { name: 'SHAPE', strokeWidth: 3, fromLinkable:true, toLinkable:true},
      // Shape.fill is bound to Node.data.color
      new go.Binding("toLinkable", "to"),
      new go.Binding('fill', 'color'),
      new go.Binding("figure", 'figure'),
      new go.Binding('width', 'width'),  // allows baseline to remain connected
      new go.Binding('portId', "portID"),
      ),
      // ports code
      $(go.Panel, "Horizontal",
      new go.Binding("itemArray", "topArray"),
      {
        row: 0, column: 1,
        itemTemplate:
          $(go.Panel,
            {
              _side: "top",
              fromSpot: go.Spot.Top, toSpot: go.Spot.Top,
              fromLinkable: true, toLinkable: true, cursor: "pointer",
              
            },
            new go.Binding("portId", "portId"),
            $(go.Shape, "Circle",
              {
                stroke: null, strokeWidth: 0,
                desiredSize: portSize,
                margin: new go.Margin(0, 1)
              },
              new go.Binding("fill", "portColor"))
          )  // end itemTemplate
      }
    ),
    //   $("TreeExpanderButton",
    //   { alignment: go.Spot.Top, alignmentFocus: go.Spot.Top },
    //   { visible: true }),
    // //$(go.Shape, "Rectangle",
    //   // { fill: "gray" }),
    // //$(go.TextBlock, "\nClick \nto collapse/expand",
    //   // { margin: 5 })
    )),
    new go.Binding("selectable",'selec'),
    new go.Binding("pickable", "pick"),
    new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
    $(go.TextBlock,
      { margin: new go.Margin(3, 0, 0, 0),
        maxSize: new go.Size(100, 30),
        editable: true, isMultiline: false },  // some room around the text
        new go.Binding("text","text")
    ),
    
    $(go.Picture,
      {maxSize: new go.Size(50,50)},
      new go.Binding("source", "img")
    ),
    // Context menu
    $(go.TextBlock, { margin: 5 }),
    {
      contextMenu:     
        $("ContextMenu",
          $("ContextMenuButton",
            $(go.TextBlock, "Change Image"), 
            { click: changeImage }),
          $("ContextMenuButton",
            $(go.TextBlock, "Annotate Node"), 
            { click: changeImage }),
          $("ContextMenuButton",
            $(go.TextBlock, "Label Node"), 
            { click: changeImage }),

            makeButton("Add top port",
            (e, obj) => addPort("top")),
            // makeButton("Add top port",
            // (e, obj) => addPort("top")),
        )  // end Adornment
    }
    );
  // links code
  diagram.linkTemplate =
  $(go.Link,
    { relinkableFrom: true, relinkableTo: true, curve: go.Link.Bezie, routing: go.Link.Orthogonal },  // Bezier curve
    $(go.Shape),
    $(go.Shape, { toArrow: "Standard" })
  );

  diagram.layout = $(go.TreeLayout, { angle: 270 });


  function makeButton(text, action, visiblePredicate) {
    return $("ContextMenuButton",
      $(go.TextBlock, text),
      { click: action },
      // don't bother with binding GraphObject.visible if there's no predicate
      visiblePredicate ? new go.Binding("visible", "", (o, e) => o.diagram ? visiblePredicate(o, e) : false).ofObject() : {});
  }

  // This method is called as a context menu button's click handler.
  // Rotate the selected node's icon through a predefined sequence of images.
  function changeImage(e, obj) {
    console.log('sending the new icon image!');
    diagram.commit(function(d) {
      // get the context menu that holds the button that was clicked
      var contextmenu = obj.part;
      // get the node data to which the Node is data bound
      var nodedata = contextmenu.data;
      // get the new image from the ModifyIconDropdown script (global variable)
      var newImage = global.iconImage;
      // modify the node data
      // this evaluates data Bindings and records changes in the UndoManager
      d.model.set(nodedata, "img", newImage);
    }, "changed image");
  }

  // Add a port to the specified side of the selected nodes.
  function addPort(side) {
    diagram.startTransaction("addPort");
    diagram.selection.each(node => {
      // skip any selected Links
      if (!(node instanceof go.Node)) return;
      // compute the next available index number for the side
      let i = 0;
      while (node.findPort(side + i.toString()) !== node) i++;
      // now this new port name is unique within the whole Node because of the side prefix
      const name = side + i.toString();
      console.log("got here");
      // get the Array of port data to be modified
      const arr = node.data[side + "Array"];
      if (arr) {
        // create a new port data object
        const newportdata = {
          portId: name,
          portColor: "#FF0000"
        };
        // and add it to the Array of port data
        diagram.model.insertArrayItem(arr, -1, newportdata);
      }
    });
    diagram.commitTransaction("addPort");
  }
  return diagram;
}

  function handleModelChange(changes) {
    console.log('changes', changes)

  }

export function CANBusDisplayer (){
  let nodes = []
  useEffect(() => {      
    
    const eventSource = new EventSource('http://localhost:5000/node-stream');
    eventSource.onmessage = (e) => {//console.log('e.data ' + e.data.length)
    //const data = JSON.parse(e.data)
    var map = new Map();
    const data = JSON.parse(e.data)
    var union = [...new Set([...nodes, ...data])];
    var numGroupings = 0;

    for(var i = 0; i < union.length; i++){
        var name = union[i].name;
        var firsttwo= name.slice(0,2);

        if(!map.has(firsttwo)){

            map.set(firsttwo, firsttwo)
            numGroupings++

        }
    }

    console.log("FROM MAP! numGroupings: "+numGroupings);

    console.log("FROM MAP! map.values "+[...map.values()])
    nodes = union
    console.log('dataName: '+data[data.length-1].name)
    //console.log('dlc: '+data[data.length-1].dlc)
    //console.log('signals: '+data[data.length-1].signals)
    console.log('desc: '+data[data.length-1].desc)
    return () => {
        eventSource.close();
    }};
}
, []);
    return(
        <div id='CANDisplayer'>
          {/* here we add the modify icon dropdown script in order to use it on the screen */}
          <ModifyIconDropdown/>
          <ReactDiagram
            initDiagram={initDiagram}
            divClassName='diagram-component'
            nodeDataArray= {test.nodeDataArray}
            linkDataArray={test.linkDataArray}
            onModelChange={handleModelChange}
          />
        </div>
    );
}


export default CANBusDisplayer;