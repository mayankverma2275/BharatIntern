const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener("click", convertTemperature);

function convertTemperature() {
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = parseFloat(fahrenheitInput.value);

    if (!isNaN(celsiusValue)) {
        const fahrenheitCalculated = (celsiusValue * 9/5) + 32;
        fahrenheitInput.value = fahrenheitCalculated.toFixed(2);
    }

    if (!isNaN(fahrenheitValue)) {
        const celsiusCalculated = (fahrenheitValue - 32) * 5/9;
        celsiusInput.value = celsiusCalculated.toFixed(2);
    }
}
