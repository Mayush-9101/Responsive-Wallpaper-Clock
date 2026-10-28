/**
 * ⏱️ 1. CENTRAL EXECUTION PROCESSING ENGINE
 */
function runClockDashboard() {
  const timeInstance = new Date();
  
  // A. RETRIEVE LIVE HARDWARE TIME COORDINATES
  let hoursValue = timeInstance.getHours();
  let minutesValue = timeInstance.getMinutes();
  let secondsValue = timeInstance.getSeconds();
  
  // Standard structural padding logic implementation
  hoursValue = hoursValue < 10 ? '0' + hoursValue : hoursValue;
  minutesValue = minutesValue < 10 ? '0' + minutesValue : minutesValue;
  secondsValue = secondsValue < 10 ? '0' + secondsValue : secondsValue;
  
  // Safe document wrapper text node mapping injection
  document.getElementById('hour').innerText = hoursValue;
  document.getElementById('minute').innerText = minutesValue;
  document.getElementById('second').innerText = secondsValue;

  // B. RETRIEVE LIVE CALENDAR DATA COORDINATES
  const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const calendarMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const formattedDay = weekdayNames[timeInstance.getDay()];
  const formattedDate = timeInstance.getDate();
  const formattedMonth = calendarMonths[timeInstance.getMonth()];
  const formattedYear = timeInstance.getFullYear();
  
  // Assembles standard layout format output string
  const completeDateString = `${formattedDay} // ${formattedMonth} ${formattedDate}, ${formattedYear}`;
  document.getElementById('date-display').innerText = completeDateString;
}

// Instantiate internal process loops instantly upon runtime launch
runClockDashboard();
setInterval(runClockDashboard, 1000);


/**
 * 🌟 2. HARDWARE THEME TOGGLE EVENT TRACKING SYSTEM
 */
const functionalToggleCheckbox = document.getElementById('theme-toggle');

functionalToggleCheckbox.addEventListener('change', () => {
    if (functionalToggleCheckbox.checked) {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
});
