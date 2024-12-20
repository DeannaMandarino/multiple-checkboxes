const checkboxes = document.querySelectorAll('.inbox__email-checkbox');

let lastChecked;

function handleCheck(event) {
  let inBetween = false;

  // If the shift key is pressed and the checkbox is being checked
  if (event.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      // Find the range between the last checked and the current checkbox
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      // Check all checkboxes between the range
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  
  // Update lastChecked to the current checkbox when Shift is not held
  lastChecked = this;
}

// Attach event listener to each checkbox
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));