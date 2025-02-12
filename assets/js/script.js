/* jshint esversion: 6 */
// JS for phone tel input validation from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel#validation and https://stackoverflow.com/questions/8936018/limit-input-to-numbers-and-on-input-field 
document.getElementById("inputPhoneNumber").addEventListener("input", function (e) {
    this.value = this.value.replace(/[^0-9+\s-()]/g, ""); // Remove any invalid characters
});

// JS for pet details - if yes is selected, the input field is enabled and required. If no is selected, the input field is disabled and not required.
const petsYes = document.getElementById("pets-yes"); // Get the radio button elements by their id's in the html form
const petsNo = document.getElementById("pets-no");
const petDetails = document.getElementById("pet-details");
// Function to toggle the pet details input field based on the radio button selection
function togglePetDetails() {
    if (petsYes.checked) {
        petDetails.disabled = false; // Enable the text input field
        petDetails.required = true; // Make the text input field required
    } else { // If the "No" radio button is selected
        petDetails.disabled = true; // Disable the text input field
        petDetails.required = false; // Make the text input field not required
        petDetails.value = ""; // Clear the text input field
    }
}
// Event listener for the radio buttons
petsYes.addEventListener("change", togglePetDetails);
petsNo.addEventListener("change", togglePetDetails);

// Initial state setup - if the page is reloaded, the input field should be disabled and not required. Also, the radio button should be unchecked.
togglePetDetails();