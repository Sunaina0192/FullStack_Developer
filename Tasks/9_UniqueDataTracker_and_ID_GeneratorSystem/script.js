// Create a Set to store unique user emails or usernames. 
const users= new Set(["sunaina@gmail.com","manjotKaur12@gmail.com","sakshi22@gmail.com","sunaina@gmail.com"]);
// Use a Map to store user data in a structured way: 
const userDataMap= new Map([
  ["alice@example.com",{score:90,level:3}],
  ["john@example.com",{score:80,level:7}],
]);
let data="";

// A func on addUser(name) should: 
//Add the user to the set. 
//Prevent duplicates. 
//Log a message if the user already exists. 
function addUser(name){

   if(users.has(name)){
    return `Users ${name} alerady Exists`;
   }
   else{
    users.add(name);
    return `Users ${name} has added successfully`;
   }

}
        document.getElementById("demo").innerHTML +=addUser("newUser@gmail.com")+"<br>";
        document.getElementById("demo").innerHTML +=addUser("sunaina@gmail.com")+"<br>";
        document.getElementById("demo").innerHTML +=addUser("newUser1@gmail.com")+"<br>";

function updateUSerData(userEmail,userData){
  
}