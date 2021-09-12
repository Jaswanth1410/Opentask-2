const firebaseConfig = {
    apiKey: "AIzaSyDXC6Y-qsBPecHin4o8GDfHH7CLd10i-uQ",
    authDomain: "task-e55d9.firebaseapp.com",
    databaseURL: "https://task-e55d9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "task-e55d9",
    storageBucket: "task-e55d9.appspot.com",
    messagingSenderId: "111866291936",
    appId: "1:111866291936:web:63f6cfc8ae34f07b439285",
    measurementId: "G-EZ0YB6XCZ9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// document.getElementById("loginForm").addEventListener("submit", (event) => {
//     event.preventDefault()
// })

firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
        location.replace("welcome.html")
    }
})

function login() {
    const email = document.getElementById("uemail").value
    const password = document.getElementById("upass").value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            alert("Enter Correct details!!")
        })
}

function signup(){
    const email = document.getElementById("uemail").value
    const password = document.getElementById("upass").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch((error) => {
            alert("Enter correct details!!")
            
        });
}