// // ====================================================1. create File using(writeFile)==============================put replace like a write,  patch ek specific item ko change krna
// // fs.writeFile(file, data[, options], callback)  callback parameter (err) 

import fs from 'fs';

fs.writeFile("7hey.text","helllooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",function (err){
    if(err) throw err;
    console.log("File has been saved");
})