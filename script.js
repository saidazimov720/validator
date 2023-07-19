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

let names = [];

function tekshir() {
  const username = document.getElementById('username').value;
  const isAvailable = ism(username);

  const message = document.getElementById('natija');
  message.textContent = isAvailable
    ? 'This username is available.'
    : 'This username has already been taken.';
}

function ism(username) {
  for (let name of names) {
    if (name === username) {
      return false;
        }
  }
  usernames.push(username);
  return true; 
}

// let usernames = [];

//       function checkAvailability() {
//         const username = document.getElementById('usernameInput').value;
//         const isAvailable = isUsernameAvailable(username);

//         const messageElement = document.getElementById('availabilityMessage');
//         messageElement.textContent = isAvailable
//           ? 'This username is available'
//           : 'This username has already been taken';
//       }

//       function isUsernameAvailable(username) {
//         for (let name of usernames) {
//           if (name === username) {
//             return false; // Username already exists
//           }
//         }
//         usernames.push(username); // Save the username
//         return true; // Username is available
//       }