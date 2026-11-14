// Footer: current year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Static weather values (metric) that match the content displayed on the page
const temperature = 8; // °C
const windSpeed = 14; // km/h

// Wind chill formula (metric: °C and km/h)
function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Only calculate when conditions are viable: temp <= 10 °C and wind > 4.8 km/h
const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
  windChillElement.textContent = "N/A";
}
