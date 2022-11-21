export default class PacketManager{
    rawPacket;
    id;
    name; 
    signals;
    timestamp;
    
    constructor(raw, id, name, signals){
        this.rawPacket = raw
        this.id = id
        this.name = name
        this.signals =  [...signals.values()]
        this.timestamp = new Date((raw.ts_sec + raw.ts_usec / 1000000).toFixed(6) * 1000)
    }
}