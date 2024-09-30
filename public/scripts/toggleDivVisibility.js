// JavaScript function to toggle the visibility of a div by its ID
function toggleDivVisibility(divId, button) {
  const div = document.getElementById(divId);
  if (div) {
    div.classList.toggle("hidden");
    // Update the button text based on the visibility of the div
    if (div.classList.contains("hidden")) {
      // fold button
      button.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#c0c0c0" d="M12 5.83L15.17 9l1.41-1.41L12 3L7.41 7.59L8.83 9zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15z"></path></svg>`;
    } else {
      // unfold button
      button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#c0c0c0" d="M7.41 18.59L8.83 20L12 16.83L15.17 20l1.41-1.41L12 14zm9.18-13.18L15.17 4L12 7.17L8.83 4L7.41 5.41L12 10z"></path></svg>`;
    }
  } else {
    console.error(`No element found with ID: ${divId}`);
  }
}

// Get all buttons and add event listeners
const toggleButtons = document.querySelectorAll(
  '[id^="toggleSectionVisibility"]',
);
toggleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const targetDivId = this.getAttribute("data-toggle-target");
    toggleDivVisibility(targetDivId, this);
  });
});
