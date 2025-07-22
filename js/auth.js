// Simpan data user di localStorage
function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push({ email, password, balance_idr: 0, balance_btc: 0 });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Registrasi berhasil!');
}

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    localStorage.setItem('current_user', JSON.stringify(user));
    window.location.href = 'dashboard.html';
  } else {
    alert('Email atau password salah!');
  }
}
