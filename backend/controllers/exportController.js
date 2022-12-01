import { traffic } from "../App.js"
import { nodeHolder } from "../App.js"
import asyncHandler from 'express-async-handler'
import * as fs from 'node:fs';


//getAnalysts function to get all analysts
export const getTrafficJson = asyncHandler(async(req, res) => {
    console.log('getting json traffic...')
    const file = 'tmp/traffic.json'
    const data = JSON.stringify(traffic.traffic)

    fs.writeFile(file, data, function(err) {
        if (err) console.error(err)
      })

    res.download(file);
})

export const getNodesJson = asyncHandler(async(req, res) => {
    const file = 'tmp/nodes.json'
    const data = JSON.stringify(nodeHolder.getnodelist())

    fs.writeFile(file, data, function(err) {
        if (err) console.error(err)
      })

    res.download(file);
})