export default class TrafficHolder{
    #traffic;
    constructor(){
        this.#traffic = [];
    }

    get traffic(){
        return this.#traffic
    }

    addPacket(packet){
        this.#traffic.push(packet)
    }

    // filter by time, node, and packet size
    filter(){

    }

    // most recent to oldest
    sortRecent(){

    }
    
    // oldest to most recent
    sortOldest(){

    }

    // highest id to lowest id
    sortHighestID(){

    }

    // lowest id to highest id
    sortLowestID(){

    }
}