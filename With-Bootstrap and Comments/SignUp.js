// MY OWN CODE
function validateForm() { //Create function which validates form
    var firstName = document.getElementById("first-name").value; //Gets first name input
    var surname = document.getElementById("surname").value; //Gets surname input
    var email = document.getElementById("email").value; //Gets email input
    var password = document.getElementById("password").value; //Gets password input
    
    if (firstName === "") { //IF statement to do checks
    alert("Please enter your First Name."); //Alerts if first name is empty
    return false;
    }  else if (/\d/.test(firstName)) { //Checks if numbers are included
        alert("First name cannot contain numbers"); //Alerts cannot contain numbers if included
        return false;
    } 
    else {
        localStorage.setItem("firstName", //Stores correct input of first name in local storage
        firstName);
    }

    //Copy pasted above code for every other input box and added own validation criteria for each
    if (surname === "") {
    alert("Please enter your Last Name.");
    return false;
    } else {
        localStorage.setItem("surname",
        surname);
    }

    //Copy pasted above code for every other input box and added own validation criteria for each
    if (email === "") { 
    alert("Please enter your Email.");
    return false;
    } else if (!email.includes("@")) {
    alert ("Enter a valid email with @")
    return false;
    }
    else {
        localStorage.setItem("email",
        email);
    }

    //Copy pasted above code for every other input box and added own validation criteria for each
    if (password === "") {
    alert("Please enter a Password");
    return false;
    } else if (password.length < 6) {
        alert("Password should be atleast 6 characters")
        return false;
    }
    else {
        localStorage.setItem("password",
        password);
    }
    
    // Can add more validation checks if you have more input boxes
    
    alert("You are now a member!"); //Alert when all details are entered succesfully with no errors
    window.location.href = "HomePage.html"; //Takes user to homepage once signed up
    return true;
   
}

// END OF MY OWN CODE

