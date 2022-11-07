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
        let sortedTraffic = []
        this.copyTraffic(sortedTraffic)
        sortedTraffic.sort((a,b) => a.rawPacket.ts_sec < b.rawPacket.ts_sec ? 1 : -1)

        return sortedTraffic
    }
    
    // oldest to most recent
    sortOldest(){
        let sortedTraffic = []
        this.copyTraffic(sortedTraffic)
        sortedTraffic.sort((a,b) => a.rawPacket.ts_sec > b.rawPacket.ts_sec ? 1 : -1)

        return sortedTraffic
    }

    // highest id to lowest id
    sortHighestID(){
        let sortedTraffic = []
        this.copyTraffic(sortedTraffic)
        sortedTraffic.sort((a,b) => a.id < b.id ? 1 : -1)

        return sortedTraffic
    }

    // lowest id to highest id
    sortLowestID(){
        let sortedTraffic = []
        this.copyTraffic(sortedTraffic)
        sortedTraffic.sort((a,b) => a.id > b.id ? 1 : -1)

        return sortedTraffic
    }

    copyTraffic(trafficList){
        for(let i = 0; i < this.#traffic.length; i++){
            trafficList.push(this.#traffic[i])
        }
    }

    // test method to print traffic (id's)
    printTraffic(){
        for(let i = 0; i < this.#traffic.length; i++){
            console.log(this.#traffic[i].id)
        }
    }

    // test method to print new traffic list (id's)
    printNewList(trafficList){
        for(let i = 0; i < trafficList.length; i++){
            console.log(trafficList[i].id)
        }
    }
}