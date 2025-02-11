// JS for phone tel input validation from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel#validation and https://stackoverflow.com/questions/8936018/limit-input-to-numbers-and-on-input-field 
document.getElementById("inputPhoneNumber").addEventListener("input", function (e) {
    this.value = this.value.replace(/[^0-9+\s-()]/g, ""); // Remove any invalid characters
});