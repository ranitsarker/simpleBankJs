document.getElementById('login').addEventListener('click', function(){
    const mailField = document.getElementById('mail');
    const mail = mailField.value;

    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    // console.log(mail, password);

    if(mail === 'rntprince@gmail.com' && password === '123456'){
        window.location.href = 'bank.html';
    }else{
        console.log('invalid user');
    }
});