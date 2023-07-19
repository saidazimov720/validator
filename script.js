let names = [];

function tekshir() {
  const username = document.getElementById('usernameInput').value;
  const isAvailable = ismlar(username);

  const messageElement = document.getElementById('availabilityMessage');
  messageElement.textContent = isAvailable
    ? 'This username is available.'
    : 'This username has already been taken.';
}

function ismlar(username) {
  for (let ism of names) {
    if ( ism === username) {
      return false; 
    }
  }
  names.push(username); 
  return true; 
}