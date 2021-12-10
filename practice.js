
const firebaseConfig = {
  apiKey: "AIzaSyCeYJH8uMFQUVENEgWlD04dIzNRSsTm0vI",
  authDomain: "kwitter-noah.firebaseapp.com",
  databaseURL: "https://kwitter-noah-default-rtdb.firebaseio.com",
  projectId: "kwitter-noah",
  storageBucket: "kwitter-noah.appspot.com",
  messagingSenderId: "328114894470",
  appId: "1:328114894470:web:66323c878c446eac3fc307"
};

firebase.initializeApp(firebaseConfig);

function add_user(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
    });

}