window.addEventListener('DOMContentLoaded', function() {
  var convertBtn = document.getElementById('convert-btn');
  convertBtn.addEventListener('click', function() {
    var temperatureInput = document.getElementById('temperature');
    var unitSelect = document.getElementById('unit');
    var resultElement = document.getElementById('result');
    
    var temperature = parseFloat(temperatureInput.value);
    var unit = unitSelect.value;

    if (isNaN(temperature)) {
      resultElement.textContent = 'Please enter a valid number for the temperature.';
      return;
    }

    if (unit === 'celsius') {
      var fahrenheit = (temperature * 9/5) + 32;
      var kelvin = temperature + 273.15;
      resultElement.textContent = temperature + ' °C = ' + fahrenheit.toFixed(2) + ' °F = ' + kelvin.toFixed(2) + ' K';
    } else if (unit === 'fahrenheit') {
      var celsius = (temperature - 32) * 5/9;
      var kelvin = (temperature + 459.67) * 5/9;
      resultElement.textContent = temperature + ' °F = ' + celsius.toFixed(2) + ' °C = ' + kelvin.toFixed(2) + ' K';
    } else if (unit === 'kelvin') {
      var celsius = temperature - 273.15;
      var fahrenheit = (temperature * 9/5) - 459.67;
      resultElement.textContent = temperature + ' K = ' + celsius.toFixed(2) + ' °C = ' + fahrenheit.toFixed(2) + ' °F';
    }
  });
});
