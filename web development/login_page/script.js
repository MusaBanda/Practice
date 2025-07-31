 function showRegister() {
  document.querySelectorAll('.form').forEach(f => f.classList.remove('active'));
  document.querySelectorAll('.form')[1].classList.add('active');
 }

function showLogin() {
  document.querySelectorAll('.form').forEach(f => f.classList.remove('active'));
  document.querySelectorAll('.form')[0].classList.add('active');
}
