var firebaseConfig = {
      apiKey: "AIzaSyCzUy4ONNbLnNne2oX9gaSjN0E7kQR-Goo",
      authDomain: "kwitter-ee343.firebaseapp.com",
      projectId: "kwitter-ee343",
      storageBucket: "kwitter-ee343.appspot.com",
      messagingSenderId: "747234063335",
      appId: "1:747234063335:web:edac51947164d65406c342",
      measurementId: "G-T269JH6390"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
