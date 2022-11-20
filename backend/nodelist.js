import { EventEmitter } from "events";

export default class NodeHolder{
    #nodelist;
    #numnodes;
    constructor(){
        this.#nodelist = new Map();
        this.#numnodes = 0;
    }

    //Returns array of nodes, not map
    getnodelist(){
        var nodes = [...this.#nodelist.values()];
        return nodes;
    }

    //Adds node to traffic iff its not in the list
    addNode(node){
        console.log(node.name)
        this.#nodelist.set(node.name, node);
        this.#numnodes++; 
    }

    inList(name){
        if(!this.#nodelist.has(name)){
            return false
        }
        return true
    }

    //gets num of nodes in the list
    get numNodes(){
       return this.#numnodes;
    }
}