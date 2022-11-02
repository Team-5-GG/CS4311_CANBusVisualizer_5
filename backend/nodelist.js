export default class NodeHolder{
    #nodelist;
    #numnodes;
    constructor(){
        this.#nodelist = new Map();
        this.#numnodes = 0;
    }

    //Returns array of nodes, not map
    get nodelist(){
        nodes = [this.#nodelist.values];
        return nodes;
    }

    //Adds node to traffic iff its not in the list
    addNode(node){
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