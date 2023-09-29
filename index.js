// Your code here
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

function moveDodgerRight() {
    const dodger = document.getElementById('dodger'); // Get a reference to the dodger element
    const currentLeft = parseInt(dodger.style.left.replace('px', '')); // Get the current left position
    const newLeft = currentLeft + 1; // Increase the left position by 1 pixel
  
    dodger.style.left = `${newLeft}px`; // Update the dodger's left position
  }
  
