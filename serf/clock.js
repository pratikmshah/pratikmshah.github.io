function updateClock() {
  const now = new Date();

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const dayOfWeek = days[now.getDay()];
  const month = months[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;

  const timeString = `${dayOfWeek}, ${month} ${day} ${year} ${hours}:${minutes} ${ampm}`;

  const clockElement = document.getElementById('clock-container');
  if (clockElement) {
    clockElement.textContent = timeString;
  }
}

updateClock();
setInterval(updateClock, 1000);
