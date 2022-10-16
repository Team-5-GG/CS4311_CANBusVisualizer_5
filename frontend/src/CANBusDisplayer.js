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
    diagram.nodeTemplate =
      $(go.Node, 'Auto',  // the Shape will go around the TextBlock
        new go.Binding("selectable",'selec'),
        new go.Binding("pickable", "pick"),
        new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
        $(go.Shape,
          { name: 'SHAPE', strokeWidth: 3, portId:"", fromLinkable:true, toLinkable:true},
          // Shape.fill is bound to Node.data.color
          new go.Binding("toLinkable", "to"),
          new go.Binding('fill', 'color'),
          new go.Binding("figure", 'figure'),
          new go.Binding('width', 'width')
          ), 
        //   {selectable:(go.Shape.figure == "LineH" ? true : false)}, // permettre de lire la color et fill
        $(go.TextBlock,
          { margin: 8, editable: true },  // some room around the text
          new go.Binding('text').makeTwoWay() //permettre de lire le texte
        )
      );

    diagram.linkTemplate = 
            $(go.Link, {relinkableFrom:true, relinkableTo:true}, 
                $(go.Shape),
                $(go.Shape, {toArrow: "Standard"})
            );
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