function displayDateTime() 
{
  var date = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = days[date.getDay()];
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  var currentTime = hours + " " + ampm + " : " + minutes + " : " + seconds;
  document.getElementById("day").innerHTML = "Today is: " + day + ".";
  document.getElementById("time").innerHTML = "Current time is: " + currentTime;
}