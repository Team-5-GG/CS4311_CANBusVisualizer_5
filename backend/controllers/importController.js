import { traffic } from "../App.js";
import * as fs from 'node:fs';


export const importTrafficJson = (req, res) => {
    let sampleFile;
    let uploadPath;
    var upload = false;
  
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/upload/' + sampleFile.name;
  
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function(err) {
      if (err)
        return res.status(500).send(err);

        upload = true;
      res.send('File uploaded!');
    });

    if(upload == true){
        fs.readFile('/upload/'+sampleFile.name , "utf8", (err, jsonString) => {
            if (err) {
              console.log("Error reading file from disk:", err);
              return;
            }
            try {
              var new_traffic  = JSON.parse(jsonString);
              traffic.traffic.push(new_traffic.traffic);
              console.log("Customer address is:", customer.address); // => "Customer address is: Infinity Loop Drive"
            } catch (err) {
              console.log("Error parsing JSON string:", err);
            }
        })
    }


}