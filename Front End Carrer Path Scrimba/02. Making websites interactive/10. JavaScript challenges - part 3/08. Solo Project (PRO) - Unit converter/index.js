
    document.getElementById('convert').addEventListener('click', function() {
        const inputValue = document.getElementById('inputValue').value;
        const value = parseFloat(inputValue);

        const metersToFeet = value * 3.28084; 
        const feetToMeters = value / 3.28084;

        const lengthText = `${value} meters = ${metersToFeet.toFixed(2)} feet | ${value} feet = ${feetToMeters.toFixed(2)} meters`;
        document.getElementById('lengthResult').textContent = lengthText;

        // Volume (liters/gallons) conversion
        const litersToGallons = value * 0.264172;
        const gallonsToLiters = value / 0.264172;
        const volumeText = `${value} liters = ${litersToGallons.toFixed(2)} gallons | ${value} gallons = ${gallonsToLiters.toFixed(2)} liters`;
        document.getElementById('volumeResult').textContent = volumeText;

        // Mass (kilograms/pounds) conversion
        const kgToPounds = value * 2.20462;
        const poundsToKg = value / 2.20462;
        const weightText = `${value} kilograms = ${kgToPounds.toFixed(2)} pounds | ${value} pounds = ${poundsToKg.toFixed(2)} kilograms`;
        document.getElementById('weightResult').textContent = weightText;
    });

