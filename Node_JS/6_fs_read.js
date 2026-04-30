// fs.readFile(path[, options], callback)
// "utf8" → converts file into readable text
import fs from 'fs';

fs.readFile("6message.text","utf8",function (err,data){
    if(err) throw err;
    console.log("File Content",data);
})