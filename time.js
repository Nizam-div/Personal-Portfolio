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