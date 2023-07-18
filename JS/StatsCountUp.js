// This function calculates the number of years since 1994
function calculateYearsSince1994() {
    const currentYear = new Date().getFullYear();
    return currentYear - 1994;
  }
  
  // This function updates the 'data-final-value' attribute and the content of the element
  function updateStatsValue() {
    const statsElement = document.querySelector('.stats');
    const yearsSince1994 = calculateYearsSince1994();
  
    statsElement.dataset.finalValue = yearsSince1994;
    statsElement.textContent = yearsSince1994;
  }
  
  // Call the function to update the value on page load
  window.addEventListener('DOMContentLoaded', updateStatsValue);
  


// countup.js
function startSlowCountUp() {
    const numElements = document.querySelectorAll('.stats');
    const finalValues = Array.from(numElements).map((element) => parseFloat(element.dataset.finalValue));
    const duration = 150000; // Total duration of the count-up in milliseconds (10 seconds)

    const increments = finalValues.map((value) => value / (duration / 100));

    function updateNumbers(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;

        for (let i = 0; i < finalValues.length; i++) {
            const value = Math.min(finalValues[i], Math.floor(progress * increments[i]));
            numElements[i].textContent = value;
        }

        if (progress < duration) {
            requestAnimationFrame(updateNumbers);
        }
    }

    let start = null;
    requestAnimationFrame(updateNumbers);
}

window.onload = function () {
    startSlowCountUp();
};
