import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import multer from 'multer'
import MulterGridfsStorage, { GridFsStorage } from "multer-gridfs-storage"
import crypto from 'crypto'
import path from 'path'
import {gfsDBC} from '../config/db.js'

const storage = new GridFsStorage({
    url: 'mongodb+srv://mjones:' + encodeURIComponent('1234') + '@canbusproject.wfexvro.mongodb.net/?retryWrites=true&w=majority',
    options: { useUnifiedTopology: true },
    file: (req, file) => {
        // this function runs every time a new file is created
        return new Promise((resolve, reject) => {
            const fileInfo = {
                filename: file.originalname,
                bucketName: 'DBC',
            };
            // resolve these properties so they will be added to the new file document
            resolve(fileInfo);
        });
    },
});

// set up our multer to use the gridfs storage defined above
const store = multer({
    storage,
    limits: { fileSize: 20000000 },
    // // filer out invalid filetypes
    // fileFilter: function (req, file, cb) {
    //     checkFileType(file, cb);
    // },
});

function checkFileType(file, cb) {
    // https://youtu.be/9Qzmri1WaaE?t=1515
    // define a regex that includes the file types we accept
    const filetypes = /dbc/;
    //check the file extention
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // more importantly, check the mimetype
    const mimetype = filetypes.test(file.mimetype);
    // if both are good then continue
    if (mimetype && extname) return cb(null, true);
    // otherwise, return error message
    cb('filetype');
}

export const uploadDBCFile = (req, res) => {
    const upload = store.single('dbc');
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({error: err.message});
      } else if (err) {
        // check if our filetype error occurred
        if (err === 'filetype') return res.status(400).json({error: 'Invalid file type'});
        // An unknown error occurred when uploading.
        return res.status(500).json({error: err.message});
      }
    
      res.status(200).json({message: 'File uploaded'})
    });
  };

export const readDBCFile = (req,res) => {
    const {filename} = req.body

    try {
        gfsDBC.find({filename: filename}).toArray((err, files)=>{
            if (err){
                return res.status(400).json({error: err.message})
            }

            if(!files || files.length === 0){
                return res.status(400).json({error: 'No such file exists'})
            }

            gfsDBC.openDownloadStreamByName(filename).pipe(res)
        })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}