document.getElementById('login').addEventListener('click', function(){
    const mailField = document.getElementById('email');
    const email = mailField.value;

    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    // console.log(mail, password);

    if(email === 'rntprince@gmail.com' && password === '123456'){
        window.location.href = 'bank.html';
    }else{
        alert('invalid user');
    }
});