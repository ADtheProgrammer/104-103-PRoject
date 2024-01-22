// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5CeIzyMB36eIul4NMOVE3rgac7e_M4k8",
    authDomain: "c101chatapp.firebaseapp.com",
    databaseURL: "https://c101chatapp-default-rtdb.firebaseio.com",
    projectId: "c101chatapp",
    storageBucket: "c101chatapp.appspot.com",
    messagingSenderId: "981474843166",
    appId: "1:981474843166:web:c34f6dc2deb86a785c2c0f"
};
firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room_name", room_name);
user_name = localStorage.getItem("user_name", user_name);

function send() {
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
}

function getData()
{ firebase.database().ref("/" + room_name).on('value',
function(snapshot) { document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = 
    childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id = childKey;
message_data = childData;

//Start code

console.log(message_data); 
mame = message_data['name'];
message - message_data['message'];
like_message_data['like'];
name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag  = "<h4 class='message_h4'>"+ message +"</h4>";
like_button = "<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row_name_with_tag+ message_with_tag +like_button + span_with_tag;

//End code

 } }); }); }
getData();

