function getpassword() 
{
    var char="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
    var passlength=8;
    var password="";
    for( var i=0; i<passlength; i++)
    {
        var randomNumber= Math.floor(Math.random()* char.length);
        password += char.substring(randomNumber,randomNumber+1);

    }
    document.getElementById("password").value= password
    
}