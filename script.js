// Get elements from the DOM
const birthdateInput = document.getElementById('birthdate');
const calculateBtn = document.getElementById('calculate-btn');
const resultElement = document.getElementById('result');

// Add event listener to the button
calculateBtn.addEventListener('click', () => {
    const birthdateValue = birthdateInput.value;

    if (!birthdateValue) {
        resultElement.textContent = "Please select a valid birthdate.";
        return;
    }

    const birthdate = new Date(birthdateValue);
    const today = new Date();
    const age = calculateAge(birthdate, today);

    resultElement.textContent = `You are ${age} years old.`;
});

// Function to calculate age
function calculateAge(birthdate, today) {
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();

    // Adjust age if the current date is before the birthdate in the current year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    return age;
}
