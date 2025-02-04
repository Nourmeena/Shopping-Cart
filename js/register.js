let username = document.querySelector('.username');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
let register_btn = document.querySelector('.register');

register_btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (username.value === '' || email.value === '' || password.value === '') {
        alert('Please fill all data');
    }
    else {
        localStorage.setItem('username', username.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        localStorage.setItem('isLoggedIn', 'true');
        window.location = 'login.html';
    }
});

