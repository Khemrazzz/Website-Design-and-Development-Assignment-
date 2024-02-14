// Attach event handler to 'next' button click event
document.getElementById('next').onclick = function(){
    // Select all elements with the class 'item'
    let lists = document.querySelectorAll('.item');
    // Move the first element to the end of its parent
    document.getElementById('slide').append(lists[0]);
}

// Attach event handler to 'prev' button click event
document.getElementById('prev').onclick = function(){
    // Select all elements with the class 'item'
    let lists = document.querySelectorAll('.item');
    // Move the last element to the beginning of its parent
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

// Execute code when DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the contact form element
    const contactForm = document.getElementById("contactForm");
    // Attach event handler to form submission
    contactForm.addEventListener("submit", function(event) {
        // Get references to form input fields
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");
        
        let isValid = true;

        // Validate name input
        if (nameInput.value.trim() === "") {
            isValid = false;
            nameInput.classList.add("error"); // Add error class to highlight input
        } else {
            nameInput.classList.remove("error"); // Remove error class
        }

        // Validate email input
        if (!isValidEmail(emailInput.value.trim())) {
            isValid = false;
            emailInput.classList.add("error"); // Add error class to highlight input
        } else {
            emailInput.classList.remove("error"); // Remove error class
        }

        // Validate message input
        if (messageInput.value.trim() === "") {
            isValid = false;
            messageInput.classList.add("error"); // Add error class to highlight input
        } else {
            messageInput.classList.remove("error"); // Remove error class
        }

        // Prevent form submission if any input is invalid
        if (!isValid) {
            event.preventDefault();
        }
    });
});

// Function to validate email format
function isValidEmail(email) {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Test the email against the regex and return true if valid, false otherwise
    return emailRegex.test(email);
}

