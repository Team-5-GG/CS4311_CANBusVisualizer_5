 import './displayer.css';
import * as go from 'gojs';
import {ReactDiagram} from 'gojs-react';
import test from './nodeJSON.json'
//additional js that contains the change-node dropdown
import ModifyIconDropdown from './canbus-pages/ModifyIconDropdown';

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
        editable: true, isMultiline: false },  // some room around the text
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
            { click: changeImage })
        )  // end Adornment
    },
    $(go.Panel, "Horizontal",
    { column: 6, row: 0 },
    $(go.Shape,  // the "B" port
      { width: 6, height: 6, portId: "B", toSpot: go.Spot.Left,
        toLinkable: true, toMaxLinks: 1 }),  // allow user-drawn links to here
    $(go.TextBlock, "B")  // "B" port label
  ),

  $(go.Panel, "Horizontal",
    { column: 45, row: 10 },
    $(go.Shape,  // the "B" port
      { width: 6, height: 6, portId: "A", toSpot: go.Spot.Right,
        toLinkable: true, fromLinkable:true, toMaxLinks: 1 }),  // allow user-drawn links to here
    $(go.TextBlock, "A")  // "B" port label
  ),
    );
  
  diagram.linkTemplate = 
          $(go.Link, {relinkableFrom:true, relinkableTo:true}, 
              $(go.Shape),
              $(go.Shape, {toArrow: "Standard"})
          );
  diagram.layout = $(go.TreeLayout, { angle: 270 });


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

  return diagram;

  }

  function handleModelChange(changes) {
    console.log('changes', changes)

  }

export function CANBusDisplayer (){
    return(
        <div>
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