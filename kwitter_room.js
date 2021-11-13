const firebaseConfig = {
    apiKey: "AIzaSyBgeJ6s7LBqW6WtePpK0ObqBY0Fu8iDeK0",
    authDomain: "kwitter-c236e.firebaseapp.com",
    databaseURL: "https://kwitter-c236e-default-rtdb.firebaseio.com",
    projectId: "kwitter-c236e",
    storageBucket: "kwitter-c236e.appspot.com",
    messagingSenderId: "417585304866",
    appId: "1:417585304866:web:a23a3c4f924bd38448c17b"
  };

  firebase.initializeApp(firebaseConfig);
  var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

  function addRoom(){
    room_name = document.getElementById("room_name").nodeValue;
    firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_room.html"
}        
  function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    row = "<div class='room_name' id="+ Room_names + "onclick = 'redirecttoroomname(this.id)'>#"+ Room_names + "</div> <hr>";
    document.getElementById("output").innerHTML += row;

});});}
getData();


function redirecttoroomname(name){
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_room.html";
 }
 function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
 }

