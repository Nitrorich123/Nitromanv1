// Example of a simple script that can be used for future enhancements
document.querySelector('form').addEventListener('submit', function(e) {
  const email = document.querySelector('#email').value;
  if (!email.includes('@')) {
    alert('Please enter a valid email address');
    e.preventDefault();
  }
});