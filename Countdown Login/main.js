function LogOn()                                   
    {
        //Defining variables based on user input
        var first_name = document.forms["LOGON"]["First_name"];              
        var last_name = document.forms["LOGON"]["Last_name"];   
        var badge_number = document.forms["LOGON"]["Badge_number"];
        
        //Verify whether the length of the full name is less than 20
        if (first_name.value.length + last_name.value.length > 20)                                 
        {
            //Alert if number of characters is exceeded
            window.alert("Exceeds Maximum number of characters");
            //Stops the loop from progressing until the condition is resolved
            first_name.focus();
            return false;
        }
        //Makes sure that first name and last name are actually filled
        if(first_name.value == "" || last_name.value == ""){
            //Warning for no value/name
            window.alert("Re-Enter Full Name.");
            //Stops the loop from progressing
            first_name.focus();
            return false;
        }
        //Verify if entered badge number is indeed a number
       if(isNaN(badge_number.value)){
           //Pop up stating to enter badge number
           window.alert("Incorrect value please enter numbers only");
           //Stops the loop from progressing
           badge_number.focus();
           return false;
       }
       //Ensure that badge number has 3 or less digits
       if(badge_number.value >= 999){
           //Pop up advising to re enter badge number
           window.alert("Re-Enter Badge Number");
           //Stops the loop from progressing
           badge_number.focus();
           return false;
       }
       //Ensure badge_number is not an empty field
       if(badge_number.value == ""){
           //Pop up advising to re enter badge number
           window.alert("Re-Enter Badge Number");
           //Stops the loop from progressing
           badge_number.focus();
           return false;
       }
       window.alert(first_name.value + " " + last_name.value +"\n" + badge_number.value +"\n" + "Login Successful")
        return true;
    }