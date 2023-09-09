const currentDate = new Date();

function getCurrentDay() {
  // Array of day names
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the current day as a number (0-6)
  const dayNumber = currentDate.getDay();

  // Get the current day name as a string
  const currentDayName = dayNames[dayNumber];

  const dayElement = document.querySelector('[data-testid="day-name"]');
  dayElement.textContent = currentDayName;
}

function getDateTime() {
  const dateTimeElement = document.querySelector('[data-testid="datetime"]');
  const dateTimeString = currentDate.toLocaleString();
  dateTimeElement.textContent = dateTimeString;
}

function GetUtcTime(){
    const utcElement = document.querySelector('[data-testid="utc-time"]');
    const utcTime = currentDate.getTime()
    utcElement.textContent = utcTime
}

// Update day name every second
getCurrentDay();
setInterval(getCurrentDay, 1000);

// Update date and time every second
getDateTime();
setInterval(getDateTime, 1000);

// Update UTC time every milli second
GetUtcTime();
setInterval(GetUtcTime, 1000);