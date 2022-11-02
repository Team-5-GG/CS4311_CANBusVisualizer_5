export default class nodeManager{
    name;
    id;
    dlc; 
    sendingNode;
    signals;
    desc;
    
    constructor(raw, id, name, signals, desc){
        this.name = name;
        this.id = id;
        this.dlc = dlc;
        this.signals = signals;
        this.desc = desc;
    }
}