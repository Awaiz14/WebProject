function validateForm() {
    var firstName = document.getElementById("first-name").value;
    var Surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if (firstName === "") {
    alert("Please enter your First Name.");
    return false;
    }

    if (Surname === "") {
    alert("Please enter your Last Name.");
    return false;
    }

    if (email === "") {
    alert("Please enter your Email.");
    return false;
    }

    if (password === "") {
    alert("Please enter a Password");
    return false;
    }
    
    // Additional validation logic for other fields
    
    return true;
    }
