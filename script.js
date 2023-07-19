function validate() {
    var username = document.getElementById("username").value;
    var messagel = document.getElementById("message");

    var names = ["Nurbek", "Sunnat", "Javohir", "Rustam"];
    if (names.includes(username)) {
        messagel.innerHTML = "Username has already been taken";
    }
    else{
        messagel.innerHTML = "Username is available";
    }
}