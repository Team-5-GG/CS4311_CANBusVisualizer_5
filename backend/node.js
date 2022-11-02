export default class NodeManager{
    name;
    id;
    dlc; 
    sendingNode;
    signals;
    desc;
    
    constructor(name,id,dlc,sendingNode,signals, desc){
        this.name = name;
        this.id = id;
        this.dlc = dlc;
        this.sendingNode = sendingNode;
        this.signals = signals;
        this.desc = desc;
    }
}