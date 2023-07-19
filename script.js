let usernames = [];

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