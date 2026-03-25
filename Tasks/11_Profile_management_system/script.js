// get - Data dekhana
// post - Naya data banana
// put - Pura data update
// patch - thoda sa update
// delete - data hatana

const output =document.getElementById("output"); //get
const formBox =document.getElementById("formBox"); //post
const msg = document.getElementById("msg"); //post 
const formBoxx =document.getElementById("formBoxx"); //put
const message = document.getElementById("message"); //put 
const patchFormBox = document.getElementById("patchFormBox"); //put 


// get data
async function getData(){
    const res = await fetch("http://localhost:3000");
    const data = await res.json();
    output.textContent = JSON.stringify(data);
}

// Form Show/hide
function showForm(){

   
    if(formBox.style.display === "none"){
        formBox.style.display = "block";
    }
    else{
        formBox.style.display="none";
    }
}

// Create user(POST)
async function createUser() {
    console.log("Button Clicked") //checked

    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const role = document.getElementById("role").value;

    const res =await fetch("http://localhost:3000",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({name,city,role})
    });
 console.log(res); //response object
    const data =await res.json();
    console.log(data); //actual response
    msg.textContent=data.msg;

    // from hide after submit
    formBox.style.display="none";
}

// Edit → form open + data fill
async function loadUserToForm(){
    const res =await fetch("http://localhost:3000");
    const data =await res.json();

    document.getElementById("editName").value= data.name;
    document.getElementById("editCity").value= data.city;
    document.getElementById("editRole").value= data.role;

    formBoxx.style.display="block";
}

// UPDATE (PUT only)
async function handleSubmit(){
    const name =document.getElementById("editName").value;
    const city =document.getElementById("editCity").value;
    const role =document.getElementById("editRole").value;

    const res =await fetch("http://localhost:3000",{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({name,city,role})
    });
    console.log(res);
    const data =await res.json();
    console.log(data);
    document.getElementById("message").textContent=data.message;
    formBoxx.style.display="none";
}

// sirf role update krna PATCH ("PATCH is used for partial updates. I used spread operator to merge existing data with updated fields so that unchanged data remains intact.")
async function patchUser(){
    const name= document.getElementById("editName").value=data.name;
    const city= document.getElementById("editCity").value=data.city;
    const role= document.getElementById("editRole").value=data.role;

    let updateData={};

    // sirf ek change krna hai woh bhejo
    if(name) updateData.name =name;
    if(city) updateData.city =city;
    if(role) updateData.role =role;

    if(Object.keys(updateData).length === 0){
        alert("please change at least one field");
        return;
    }


    const res =await fetch("http://localhost:3000",{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({updateData}) //sirf ek field
    });

    const data = await res.json();
    document.getElementById("message").textContent =data.msg;
}

function showPatchForm(){
    const patchForm =document.getElementById("patchForm");
    if(patchForm.style.display === "none"){
        patchForm.style.display ="block";
    }
    else{
        patchForm.style.display ="none";
    }
}



