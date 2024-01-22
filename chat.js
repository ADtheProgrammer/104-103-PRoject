// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase




function addUser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name" , user_name);

    window.location = "chat_room.html";
}


function getData() 
{ firebase.database().ref("/" + room_name).on('value',
function(snapshot) { document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = 
childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id = childKey;
message_data = childData;
//Start code

//End code 
} }); }); }
getData();
