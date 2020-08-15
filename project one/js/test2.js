
var user = "Gabe";
var pass= "123456";


// get info from the inputs and save into variables

function login(){
    var passtxt=document.getElementById("userPass");
    var usertxt=document.getElementById("userName");
    console.log("Clicked!");
    console.log(passtxt.value);
    console.log(usertxt.value);

    if(passtxt.value===pass && usertxt.value===name){
        console.log('Welcome to the system');
        document.getElementById('msg').innerHTML=`<h2>Welcome Back to Fauna Fashionista!</h2>`
    }else{
        console.error('Wrong username or password.');
        document.getElementById('msg').innerHTML=`<h2>Incorrect Username or Password.</h2>`
    };
    clear();
};

function clear(){
    userPass.value="";
    userName.value="";
};