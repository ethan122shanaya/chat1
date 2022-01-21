
var firebaseConfig = {
      apiKey: "AIzaSyDPC8gSWTntXyWYMM4mQ7VvuhYqpe8GtI8",
      authDomain: "kwitter-d4dea.firebaseapp.com",
      databaseURL: "https://kwitter-d4dea-default-rtdb.firebaseio.com",
      projectId: "kwitter-d4dea",
      storageBucket: "kwitter-d4dea.appspot.com",
      messagingSenderId: "116236468260",
      appId: "1:116236468260:web:1efdcdec758bafbc3818b1",
      measurementId: "G-6BBXYH412P"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
