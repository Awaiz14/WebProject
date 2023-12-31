function validateForm() {
    var firstName = document.getElementById("first-name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if (firstName === "") {
    alert("Please enter your First Name.");
    return false;
    }  else if (/\d/.test(firstName)) {
        alert("First name cannot contain numbers");
        return false;
    } 
    else {
        localStorage.setItem("firstName",
        firstName);
    }

    if (surname === "") {
    alert("Please enter your Last Name.");
    return false;
    } else {
        localStorage.setItem("surname",
        surname);
    }

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
    
    // Additional validation logic for other fields
    
    alert("You are now a member!");
    window.location.href = "HomePage.html";
    return true;
   
}

