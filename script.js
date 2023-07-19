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
      return false; // Username already exists
    }
  }
  usernames.push(username); // Save the username
  return true; // Username is available