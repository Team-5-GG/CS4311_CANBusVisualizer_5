import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import MulterGridfsStorage, { GridFsStorage } from "multer-gridfs-storage"
import crypto from 'crypto'
import path from 'path'
import {gfs} from '../config/db.js'

const storage = new GridFsStorage({
    url: mongoURI,
    options: { useUnifiedTopology: true },
    file: (req, file) => {
        // this function runs every time a new file is created
        return new Promise((resolve, reject) => {
            // use the crypto package to generate some random hex bytes
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                // turn the random bytes into a string and add the file extention at the end of it (.png or .jpg)
                // this way our file names will not collide if someone uploads the same file twice
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'DBC',
                };
                // resolve these properties so they will be added to the new file document
                resolve(fileInfo);
            });
        });
    },
});

// set up our multer to use the gridfs storage defined above
const store = multer({
    storage,
    // filer out invalid filetypes
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
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
        return res.status(400).json({error: 'File too large'});
      } else if (err) {
        // check if our filetype error occurred
        if (err === 'filetype') return res.status(400).json({error: 'Invalid file type'});
        // An unknown error occurred when uploading.
        return res.status(500).json({error: 'Unknown error'});
      }
    
      res.status(200).json({message: 'File uploaded'})
    });
  };
