function validateForm() {
    var user = document.forms["form"]["username"].value;
    var mail = document.forms["form"]["email"].value;
    var pass = document.forms["form"]["password"].value;
    var cpass = document.forms["form"]["cpassword"].value;
    var name = document.forms["form"]["fullname"].value;
    var age = document.forms["form"]["age"].value;
    var gender = document.forms["form"]["gender"].value;

    if (user == "") 
    {
        alert("Username must be filled!");
        return false;
    }
    if (user.length<4) 
    {
        alert("Username must be at least 4 characters");
        return false;
    }
    if(mail == "")
    {
        alert("Email must be filled!");
        return false;
    }
    
    if (pass=="") 
    {
        alert("Password must not be empty!");
        return false;
    }
    if (pass.length<8) 
    {
        alert("Name must be at least 8 characters");
        return false;
    }
    if (cpass!=pass)
    {
        alert("Password does not match!");
        return false;
    }
    if (name == "") 
    {
        alert("Full Name must be filled!");
        return false;
    }
    if(age == "")
    {
        alert("Age must be filled!");
        return false;
    }
    if(age<10)
    {
        alert("You must be above 10 years old to buy in Store Del Luna!");
        return false;
    }
    if (gender == "") 
    {
        alert("Gender must be filled!");
        return false;
    }
    if (document.getElementById("chkbox").checked==false) 
    {
        alert("You should agree to the terms & conditions!");
        return false;
    }
}
    