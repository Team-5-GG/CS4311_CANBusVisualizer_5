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
    filterPackets(time, node, size){
        filterList = []

        if(time){
            filterList.push(...this.#traffic.filter(packet => packet.timestamp.getTime() == packet.timestamp.getTime()))
        }

        if(node){
            filterList.push(...this.#traffic.filter(packet => packet.name == node))
        }

        if(size){
            filterList.push(...this.#traffic.filter(packet => packet.rawPacket.data.length == size))
        }

        // THROW ERROR HERE IF NO CONDITIONS ARE MET FOR FILTER I.E. FILTERLIST IS EMPTY
        return filterList
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