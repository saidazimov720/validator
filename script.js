function validate() {
    var username = document.getElementById("username").value;
    var message = document.getElementById("message");

    var names = ["Nurbek", "Sunnat", "Javohir", "Rustam"];
    if (names.includes(username)) {
        message.innerHTML = "Username has already been taken.";
    }
    else{
        message.innerHTML = "Username is available.";
    }
}