function j1939(dbcid){
    var dbcid = 4 << 29;
    dbcid = dbcid | msg.id;
    dbcid = dbcid >>> 0;

    return dbcid
}

export const protocols = ['J1939']

const protocol = (protocol) => {
    if (protocol in protocols){
        return this[protocol]
    }
}

export default protocol