//---------------------login form------------------------
function validateForm(){
    var mail=document.getElementById("email-Id").value;
    var pw=document.getElementById("password").value;
         var at =mail.indexOf("@");
         var dot=mail.lastIndexOf(".");
    if(mail=="")
    {
        alert("Please enter your email");
        return false;
    }
    else if(pw=="")
    {
        alert("Please enter your password");
        return false;
    }
    else if (at< 1 || ( (dot - at) < 2 )) {
            alert("Please enter correct email ID");
       return false;
             }
    else if (pw.length<8)
    {
        alert("length of the password should be greater than 8");
        return false;
    }
    else if (pw.search(/[0-9]/)==-1)
    {
        alert("pawword should contain atleat a number");
        return false;
    }
    else if (pw.search(/[A-Z]/)==-1)
    {
        alert("pawword should contain atleat a uppercase alphabet");
        return false;
    }
    else if (pw.search(/[a-z]/)==-1)
    {
        alert("pawword should contain atleat a lowercase alphabet");
        return false;
    }
     else if (pw.search(/[\@\#\$ \%\^\&\*\(\)\_\-\+\=\<\, \>\?]/)==-1){
        alert("pawword should contain atleat a special symbol");
        return false;
    }
     else{
       alert("login successful");
        return true;
    }               
   }                         
   
   //-----------------------------register form--------------
            function validateForm(){
            var finame=document.getElementById("fname").value;
            var laname=document.getElementById("lname").value;
            var mail=document.getElementById("email").value;
            var mobile=document.getElementById("pno").value;
            var pw=document.getElementById("password").value;
            var cpw=document.getElementById("cpassword").value;
            var at =mail.indexOf("@");
            var dot=mail.lastIndexOf(".");
            if(finame=="")
             {
                alert("Please enter your firstname");
                return false;
             }
            else if(laname=="")
             {
                alert("Please enter your last name");
                return false;
             }
            else if(mail=="")
            {
                alert("Please enter your email");
                return false;
            }
            else if (at< 1 || ( (dot - at) < 2 )) {
               alert("Please enter correct email ID");
               return false;
                }
            else if(mobile=="")
            {
                alert("Please enter your phone number");
                return false;
            }
            else if (mobile<= 1000000000 || mobile<=9999999999) {
               alert("phone number should be 10 digits");
               return false;
                }
            else if(pw=="")
            {
                alert("Please enter your password");
                return false;
            }
            else if (pw.length<8)
            {
                alert("length of the password should be greater than 8");
                return false;
            }
            else if (pw.search(/[0-9]/)==-1)
            {
                alert("pawword should contain atleat a number");
                return false;
            }
            else if (pw.search(/[A-Z]/)==-1)
            {
                alert("pawword should contain atleat a uppercase alphabet");
                return false;
            }
            else if (pw.search(/[a-z]/)==-1)
            {
                alert("pawword should contain atleat a lowercase alphabet");
                return false;
            }
             else if (pw.search(/[\@\#\$ \%\^\&\*\(\)\_\-\+\=\<\, \>\?]/)==-1){
                alert("pawword should contain atleat a special symbol");
                return false;
            }
            else if (cpw!=pw)
            {
                alert("password doesn't match");
                return false;
            }
             else{
               alert("signup successful");
                return true;
            }               
           }                         