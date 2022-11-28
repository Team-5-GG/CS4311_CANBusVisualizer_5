import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import multer from 'multer'
import MulterGridfsStorage, { GridFsStorage } from "multer-gridfs-storage"
import crypto from 'crypto'
import path from 'path'
import {gfsData} from '../config/db.js'