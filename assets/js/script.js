document.addEventListener("DOMContentLoaded", function () {
    // Wait for the page to load before running the script 
    // Source: https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event

    // JS for phone tel input validation from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel#validation 
    // and https://stackoverflow.com/questions/8936018/limit-input-to-numbers-and-on-input-field 
    document.getElementById("inputPhoneNumber").addEventListener("input", function (e) {
        this.value = this.value.replace(/[^0-9+\s-()]/g, ""); // Remove any invalid characters
    });

    // JS for pet details - if yes is selected, the input field is enabled and required. If no is selected, the input field is disabled and not required. 
    // By default, the input field is disabled and not required via HTML.
    const petsYes = document.getElementById("pets-yes"); // Get the "Yes" radio button
    const petsNo = document.getElementById("pets-no"); // Get the "No" radio button
    const petDetails = document.getElementById("pet-details"); // Get the text input field

    if (petsYes && petsNo && petDetails) { // Check if elements exist before running the code

        function togglePetDetails() {
            if (petsYes.checked) { // If "Yes" is selected
                petDetails.disabled = false; // Enable input field
                petDetails.required = true; // Make it required
            } else { // If "No" is selected
                petDetails.disabled = true; // Disable input field
                petDetails.required = false; // Make it not required
                petDetails.value = ""; // Clear input
            }
        }

        // Event listeners for when the user selects Yes or No
        petsYes.addEventListener("change", togglePetDetails);
        petsNo.addEventListener("change", togglePetDetails);

        // Initial state setup - sets correct input state on page load
        togglePetDetails();
    }

});