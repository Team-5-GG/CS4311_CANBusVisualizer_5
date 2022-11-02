export default class nodeHolder{
    #nodelist;
    #numnodes;
    constructor(){
        this.#nodelist = new Map();
        this.numnodes = 0;
    }

    //Returns array of nodes, not map
    get nodelist(){
        nodes = [this.#nodelist.values];
        return nodes;
    }

    //Adds node to traffic iff its not in the list
    addNode(node){
        if(!this.#nodelist.has(node.name)){
            this.#nodelist.set(node.name , node);
            numnodes++;
        }
    }

    //gets num of nodes in the list
    get numNodes(){
       return this.#numnodes;
    }
}