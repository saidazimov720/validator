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