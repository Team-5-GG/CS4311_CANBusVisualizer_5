
export default class TrafficHolder{
    #traffic;
    constructor(){
        this.#traffic = [];
    }

    get traffic(){
        return this.#traffic
    }

    toFile(){
        return JSON.stringify();
    }

    addPacket(packet){
        this.#traffic.push(packet)
    }

     // filter by time, node, and packet size
     filterPackets(time, node, size){
        let filterList = []
        let copyList = this.#traffic.slice()

        if(time){
            let beg = new Date(time[0])
            let end = new Date(time[1])

            filterList.push(...copyList.filter(packet => packet.timestamp.getTime() >= beg.getTime() && packet.timestamp.getTime() <= end.getTime()))

            // take the copied list and filter all other packets that did not match condition
            // so as to possibly get them in the later filters (and prevent duplicates)
            copyList = copyList.filter(packet => !(packet.timestamp.getTime() >= beg.getTime() && packet.timestamp.getTime() <= end.getTime()))
        }

        if(node){
            filterList.push(...copyList.filter(packet => packet.name == node))
            copyList = copyList.filter(packet => !(packet.name == node))
        }

        if(size){
            filterList.push(...copyList.filter(packet => packet.rawPacket.data.length == size))
            copyList = copyList.filter(packet => !(packet.rawPacket.data.length == size))
        }

        // THROW ERROR IF NO CONDITIONS ARE MET FOR FILTER I.E. FILTERLIST IS EMPTY
        return filterList
    }

    // filter by time, node, and packet size
    filterPackets(time, node, size){
        let filterList = []
        let copyList = this.#traffic.slice()

        if(time){
            let beg = new Date(time[0])
            let end = new Date(time[1])

            filterList.push(...copyList.filter(packet => packet.timestamp.getTime() >= beg.getTime() && packet.timestamp.getTime() <= end.getTime()))

            // take the copied list and filter all other packets that did not match condition
            // so as to possibly get them in the later filters (and prevent duplicates)
            copyList = copyList.filter(packet => !(packet.timestamp.getTime() >= beg.getTime() && packet.timestamp.getTime() <= end.getTime()))
        }

        if(node){
            filterList.push(...copyList.filter(packet => packet.name == node))
            copyList = copyList.filter(packet => !(packet.name == node))
        }

        if(size){
            filterList.push(...copyList.filter(packet => packet.rawPacket.data.length == size))
            copyList = copyList.filter(packet => !(packet.rawPacket.data.length == size))
        }

        // THROW ERROR IF NO CONDITIONS ARE MET FOR FILTER I.E. FILTERLIST IS EMPTY
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