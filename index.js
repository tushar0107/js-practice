var username = document.getElementById('username');
var loginform = document.getElementById('login-form');


username.addEventListener('input', function(event){
    var currentvalue = event.target.value;
    username.value = currentvalue.toUpperCase();
    console.log(event.target.value);

});

loginform.addEventListener('submit', function(e){
    alert('Sumbit button clicked');
    e.preventDefault();
});

