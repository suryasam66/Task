document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    
    const email = document.getElementById('email');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const message = document.getElementById('message');

    // Validating form
    if (validateForm(email, firstName, lastName, message)) {
        console.log("Email:", email.value);
        console.log("First Name:", firstName.value);
        console.log("Last Name:", lastName.value);
        console.log("Message:", message.value);

       
        alert("Thank you! Your message has been sent.");

       
        email.value = "";
        firstName.value = "";
        lastName.value = "";
        message.value = "";

       
        resetBorders(email, firstName, lastName, message);
    }
});

function validateForm(email, firstName, lastName, message) {
    let isValid = true;

    
    resetBorders(email, firstName, lastName, message);

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        email.style.border = "2px solid red"; 
        isValid = false;
    }

    // Check if first name is empty
    if (firstName.value.trim() === "") {
        firstName.style.border = "2px solid red"; 
        isValid = false;
    }

    // Check if last name is empty
    if (lastName.value.trim() === "") {
        lastName.style.border = "2px solid red"; 
        isValid = false;
    }

    // Check if message is empty
    if (message.value.trim() === "") {
        message.style.border = "2px solid red";
        isValid = false;
    }

    return isValid;
}


function resetBorders(email, firstName, lastName, message) {
    email.style.border = "";
    firstName.style.border = "";
    lastName.style.border = "";
    message.style.border = "";
}
