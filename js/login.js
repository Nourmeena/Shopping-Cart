let email = document.querySelector('.email');
let password = document.querySelector('.password');
let login_btn = document.querySelector('.login');

login_btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (email.value === '' || password.value === '') {
        alert('Please fill all data');
    }
    else {
        let getEmail = localStorage.getItem('email');
        let getPassword = localStorage.getItem('password');

        if (email.value === getEmail && password.value === getPassword) {
            localStorage.setItem('isLoggedIn', 'true');
            window.location = 'index.html';
        }
        else {
            alert("Incorrect Password or Email. Please try again!!")
        }
    }
});

