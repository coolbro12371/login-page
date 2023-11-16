function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve form inputs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Validation logic
    if (username === "admin" && password === "coolbro12371best") {
      // Successful login
      alert("Login successful!");
      window.location.href = "https://docs.google.com/document/d/1KqTtezbx1iB5DIJ04GRdcDVMaR6tShDeZMzgMlcP1oM/edit";
    } else {
      // Failed login
      var errorMessage = document.getElementById("errorMessage");
      errorMessage.textContent = "Invalid username or password.";
    }
  }
