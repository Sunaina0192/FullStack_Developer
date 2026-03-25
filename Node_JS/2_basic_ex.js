import chalk from 'chalk';
console.log(chalk.yellow("hello Welcome to Nodejs World"));

// console.log("Hello Node 🚀");

// local data ko connect krna
// import fs from 'fs';                         // we are using import /export because our pakage.json has a type:"module" thats why other wise if its a type:"commonjs" then it will use const fs= require('fs');


// // ====================================================1. create File using(writeFile)==============================
// // fs.writeFile(file, data[, options], callback)  callback parameter (err) 

// fs.writeFile("hey.text","how are u i am trying to do node practice",function(err){
//      if(err)
//         console.errorn(err);
//        console.log("Done");
// });


// // =========================================2. appendFile means kush aur add krna=============================
// // fs.appendFile(path, data[, options], callback)

// fs.appendFile("hey.text","  ,kiya kre aaj ",function(err){
//      if(err)
//         console.errorn(err);
//        console.log("Done");
// });

// ===========================================3readFile ===================================================
// fs.readFile(path[, options], callback)


