let logout = document.querySelector('.logout');
logout.addEventListener('click', function () {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('email');
    localStorage.removeItem('isLoggedIn');
    window.location = 'register.html';
})