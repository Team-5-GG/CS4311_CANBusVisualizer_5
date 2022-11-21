 import './displayer.css';
import * as go from 'gojs';
import {ReactDiagram} from 'gojs-react';
import test from './nodeJSON.json'
//additional js that contains the change-node dropdown
import ModifyIconDropdown from './canbus-pages/ModifyIconDropdown';
import MyHTMLLightBox from './canbus-pages/MyHTMLLightBox';
import Popup from 'reactjs-popup';
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
        model: $(go.GraphLinksModel, //allows us to have any # of links btwn nodes
          {
            linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
          })
      });


  const portSize = new go.Size(8, 8);
  
  // define a simple Node template
  diagram.nodeTemplate =      // 
    
    $(go.Node, 'Horizontal',  // This means everything inside this template will be laid out horizontally. the Shape will go around the TextBlock
    { contextMenu: window.MyHTMLLightBox },
    $(go.Panel, "Spot",
    $(go.Panel, "Auto",
    //used for the line at the centre
    $(go.Shape,
      { name: 'SHAPE', strokeWidth: 3, portId:"", fromLinkable:true, toLinkable:true},
      // Shape.fill is bound to Node.data.color
      new go.Binding("toLinkable", "to"),
      new go.Binding('fill', 'color'),
      new go.Binding("figure", 'figure'),
      new go.Binding('width', 'width')  // allows baseline to remain connected
      ),
      $("TreeExpanderButton",
      { alignment: go.Spot.Top, alignmentFocus: go.Spot.Top },
      { visible: true }),
    )),

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
    
    // $(go.TextBlock, { margin: 5 }),
    // {
      // contextMenu:     
      //   $("ContextMenu",
      //     $("ContextMenuButton",
      //       $(go.TextBlock, "Change Image"), 
      //       { click: iconPopUp }),
      //     $("ContextMenuButton",
      //       $(go.TextBlock, "Annotate Node"), 
      //       { click: changeImage }),
      //     $("ContextMenuButton",
      //       $(go.TextBlock, "Label Node"), 
      //       { click: changeImage }),
      //     $("ContextMenuButton",
      //       $(go.TextBlock, "New Node"),
      //       { click: function(e, obj) {
      //         <Popup trigger={<button> Trigger</button>} position="right center">
      //         <div>Popup content here !!</div>
      //         </Popup>
      //       } })
      //   )  // end Adornment
    // },
    $(go.Panel, "Horizontal",
    { column: 6, row: 0 },
    $(go.Shape,  // the "B" port
      { width: 6, height: 6, portId: "B", toSpot: go.Spot.Left,
        toLinkable: true, toMaxLinks: 1 }),  // allow user-drawn links to here
    $(go.TextBlock, "B"),  // "B" port label
       $("TreeExpanderButton",
       { alignment: go.Spot.Top, alignmentFocus: go.Spot.Top },
       { visible: true })
  ),

  $(go.Panel, "Horizontal",
    { column: 45, row: 10 },
    $(go.Shape,  // the "A" port
      { width: 6, height: 6, portId: "A", toSpot: go.Spot.Right,
        toLinkable: true, fromLinkable:true, toMaxLinks: 1 }),  // allow user-drawn links to here
    $(go.TextBlock, "A"),  // "A" port label
       $("TreeExpanderButton",
       { alignment: go.Spot.Top, alignmentFocus: go.Spot.Top },
       { visible: true })
  ),
    );
  
  diagram.linkTemplate = 
          $(go.Link, {relinkableFrom:true, relinkableTo:true}, 
              $(go.Shape),
            $(go.Shape, {toArrow: "Standard"})
          );
  diagram.layout = $(go.TreeLayout, { angle: 270 });
  diagram.contextMenu = window.MyHTMLLightBox;

  return diagram;

  }

  function handleModelChange(changes) {
    console.log('changes', changes)

  }

export function CANBusDisplayer (){
    return(
        <div id='CANDisplayer'>
          {/* here we add the modify icon dropdown script in order to use it on the screen */}
          <ModifyIconDropdown/> 
          <MyHTMLLightBox/>
          <Popup/>
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