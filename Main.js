// JavaScript code
const timeDiv = document.querySelector(".time");

// Function to update the time in the div
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const twelveHourFormat = hours % 12 || 12;
  const timeString = `${twelveHourFormat}:${minutes}:${seconds} ${ampm}`;
  timeDiv.textContent = timeString;
}

// Update the time initially and then every second
updateTime();
setInterval(updateTime, 1000);


const locationDiv = document.querySelector('.location');

function showLocation(city, country) {
  locationDiv.textContent = `${city}, ${country}`;
}

function showError() {
  locationDiv.textContent = 'Location not available';
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            if (data.error) {
              showError();
            } else {
              const city = data.address.city || data.address.town || data.address.village || data.address.hamlet || '';
              const country = data.address.country || '';
              showLocation(city, country);
            }
          })
          .catch(() => {
            showError();
          });
      },
      () => {
        showError();
      }
    );
  } else {
    showError();
  }
}

getLocation();




document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".text", {
      strings: ["Web Developer...", "Frontend Developer...",  "Database Administrator (DBA)...","Database Developer!"],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 500,
      loop: true
    });
  });
  