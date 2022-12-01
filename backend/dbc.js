import Dbc, { Can } from 'dbc-can'

class DbcManager{
    static #dbcFile;

    static loadDBC(dbcFile){
        dbc.load(process.env.DBC).then(data => {})
    }

    static changeDBC(dbcFile){
        this.#dbcFile = dbcFile
    }

    static decodePacket(packet){

    }
}