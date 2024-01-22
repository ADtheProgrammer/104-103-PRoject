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


function addRoom()
{
  room_name = document.getElementById("room").value;

  firebase.database().ref("/").child(room_name).update({

  });

  localStorage.setItem("room_name ", room_name);
}

function getData()
{
  firebase.database().ref("/").on('value',
    function (snapshot) {
      document.getElementById("output").innerHTML =
      ""; snapshot.forEach(function (childSnapshot) {
        childKey =
        childSnapshot.key;
        Room_names = childKey;
        row = "<div class='room name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        
      });
    });
}


function redirectToRoomName()
{
  
  localStorage.setItem("room_name" , name);
  window.location = "chat_page.html";
}

function logout()
{
  window.location = "index.html"
}
