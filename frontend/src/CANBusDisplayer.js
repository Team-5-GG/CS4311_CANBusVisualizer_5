 import './displayer.css';
import * as go from 'gojs';
import {ReactDiagram} from 'gojs-react';
import test from './nodeJSON.json'

// function MyDiagram(props){
//     const myDiagram =
//     new go.Diagram("myDiagramDiv",
//       { // enable Ctrl-Z to undo and Ctrl-Y to redo
//         "undoManager.isEnabled": true
//       });
    
//     myDiagram.model = new go.Model(
//     [ // for each object in this Array, the Diagram creates a Node to represent it
//       { key: "Alpha" },
//       { key: "Beta" },
//       { key: "Gamma" }
//     ]);
// }
 // an HTMLInfo object is needed to invoke the code to set up the HTML cxElement


function initDiagram() {
     const $ = go.GraphObject.make;
    // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
    const diagram =
      $(go.Diagram,
        {
            // "LinkDrawn": maybeChangeLinkCategory,     // these two DiagramEvents call a
            // "LinkRelinked": maybeChangeLinkCategory,
          'undoManager.isEnabled': true,  // must be set to allow for model change listening
          // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
          'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
          model: $(go.GraphLinksModel,
            {
              linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
            })
        });
  
    // define a simple Node template
    diagram.nodeTemplate =      //So the arrows will go around the text block?
      $(go.Node, 'Horizontal',  // the Shape will go around the TextBlock
      
      $(go.Panel, "Auto",
      //$(go.Shape, "Rectangle",
       // { fill: "gray" }),
      //$(go.TextBlock, "\nClick \nto collapse/expand",
       // { margin: 5 })
      ),
      $("TreeExpanderButton",
      { alignment: go.Spot.TopLeft, alignmentFocus: go.Spot.Top },
      { visible: true })
      ,

      new go.Binding("selectable",'selec'),
      new go.Binding("pickable", "pick"),
      new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
      $(go.TextBlock,
        { margin: new go.Margin(3, 0, 0, 0),
          maxSize: new go.Size(100, 30),
          isMultiline: false },  // some room around the text
          new go.Binding("text","text")//permettre de lire le texte
      ),
      
      $(go.Picture,
        {maxSize: new go.Size(50,50)},
        new go.Binding("source", "img")
      ),
      
      //used for the line at the centre
      $(go.Shape,
        { name: 'SHAPE', strokeWidth: 3, portId:"", fromLinkable:true, toLinkable:true},
        // Shape.fill is bound to Node.data.color
        new go.Binding("toLinkable", "to"),
        new go.Binding('fill', 'color'),
        new go.Binding("figure", 'figure'),
        new go.Binding('width', 'width')  // allows baseline to remain connected
        ),
        //context menu 
      $(go.TextBlock, { margin: 5 }),
      {
        contextMenu:     // define a context menu for each node
          $("ContextMenu",  // that has one button
            $("ContextMenuButton",
              {
                "ButtonBorder.fill": "white",
                "_buttonFillOver": "skyblue"
              },
              $(go.TextBlock, "Change Color"),
              { click: changeColor })
            // more ContextMenuButtons would go here
          )  // end Adornment
      }
      );

    diagram.linkTemplate = 
            $(go.Link, {relinkableFrom:true, relinkableTo:true}, 
                $(go.Shape),
                $(go.Shape, {toArrow: "Standard"})
            );
    diagram.layout = $(go.TreeLayout, { angle: 270 });

    // this is a normal Node template that also has a contextMenu defined for it
  // diagram.nodeTemplate =
  // $(go.Node, "Auto",
  //   $(go.Shape, "RoundedRectangle",
  //     { fill: "white" },
  //     new go.Binding("fill", "color")),
  //   $(go.TextBlock, { margin: 5 },
  //     new go.Binding("text", "key")),
  //   {
  //     contextMenu:     // define a context menu for each node
  //       $("ContextMenu",  // that has one button
  //         $("ContextMenuButton",
  //           {
  //             "ButtonBorder.fill": "white",
  //             "_buttonFillOver": "skyblue"
  //           },
  //           $(go.TextBlock, "Change Color"),
  //           { click: changeColor })
  //         // more ContextMenuButtons would go here
  //       )  // end Adornment
  //   }
  // );

  function changeColor(e, obj) {
    diagram.commit(function(d) {
      // get the context menu that holds the button that was clicked
      var contextmenu = obj.part;
      // get the node data to which the Node is data bound
      var nodedata = contextmenu.data;
      // compute the next color for the node
      var newcolor = "lightblue";
      switch (nodedata.color) {
        case "lightblue": newcolor = "lightgreen"; break;
        case "lightgreen": newcolor = "lightyellow"; break;
        case "lightyellow": newcolor = "orange"; break;
        case "orange": newcolor = "lightblue"; break;
      }
      // modify the node data
      // this evaluates data Bindings and records changes in the UndoManager
      d.model.set(nodedata, "color", newcolor);
    }, "changed color");
  }

    return diagram;

  }
  
  
  
  

  function handleModelChange(changes) {
    console.log('changes', changes)

  }


export function CANBusDisplayer (){
   
    return(
        <div>
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