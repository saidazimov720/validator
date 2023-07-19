// function validate() {
//     var username = document.getElementById("username").value;
//     var message = document.getElementById("message");

//     var names = ["Nurbek", "Sunnat", "Javohir", "Rustam"];
//     if (names.includes(username)) {
//         message.innerHTML = "Username has already been taken.";
//     }
//     else{
//         message.innerHTML = "Username is available.";
//     }
// }

let usernames = ["Nurbek", "Sunnat", "Javohir", "Rustam"];

function checkAvailability() {
  const username = document.getElementById('usernameInput').value;
  const isAvailable = isUsernameAvailable(username);

  const messageElement = document.getElementById('availabilityMessage');
  messageElement.textContent = isAvailable
    ? 'This username is available'
    : 'This username has already been taken';
}

function isUsernameAvailable(username) {
  for (let name of usernames) {
    if (name === username) {
      return false;
        }
  }
  usernames.push(username);
  return true; 
}