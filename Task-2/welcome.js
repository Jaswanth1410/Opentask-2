firebase.auth().onAuthStateChanged((user) => {
    if (user == null) {
        location.replace("index.html")
    } else {
        document.getElementById("message").innerHTML = "WELCOME , " + user.email
    }
})


function logout() {
    firebase.auth().signOut()
}