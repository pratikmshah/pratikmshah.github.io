function updateClock() {
  const now = new Date();

  // Arrays to convert numeric days/months into words
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Get current date components
  const dayOfWeek = days[now.getDay()];
  const month = months[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();

  // Get current time components
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert 24-hour format to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hour is 0, set to 12

  // Assemble the exact format requested
  const timeString = `${dayOfWeek}, ${month} ${day} ${year} ${hours}:${minutes} ${ampm}`;

  // Find the HTML element with the ID 'clock-container' and update its text
  const clockElement = document.getElementById('clock-container');
  if (clockElement) {
    clockElement.textContent = timeString;
  }
}

// Run the function immediately so the clock appears on page load
updateClock();

// Re-run the function every 1000ms (1 second) to ensure it updates right on the minute
setInterval(updateClock, 1000);
