// Create time setup to show current day
var timeSetup = moment().format("MMM Do YYYY");
var currentDayEl = $("#currentDay");
var currentTime = moment().format("HH:mm:ss a");
currentDayEl.append(timeSetup);
$(".saveBtn").on("click", function () {
  var valueText = $(this).siblings(".textarea").val();
  var hourKey = $(this).siblings(".timeB").attr("time");
  localStorage.setItem(hourKey, valueText);
});

//$("#9 .textarea").addClass("present");

// an if function that compares current time to time of the block and assigns appropriate class to text area
$(".timeBlock").each(function () {
  // access this time block by its id
  var timeBlockHour = $(this).attr("id");
  if (timeBlockHour === currentTime) {
    $(".textarea").addClass("present");
  } else if (timeBlockHour < currentTime) {
    $(".textarea").addClass("future");
  } else {
    $(".textarea").addClass("past");
  }
  // create classes for each time block to indicate past present or future
  //   console.log(timeBlockHour);
});

// allow for input to be saved to local storage
// Items should perists after refresh
$("#9 .textarea").val(localStorage.getItem("9"));
$("#10 .textarea").val(localStorage.getItem("10"));
$("#11 .textarea").val(localStorage.getItem("11"));
$("#12 .textarea").val(localStorage.getItem("12"));
$("#1 .textarea").val(localStorage.getItem("1"));
$("#2 .textarea").val(localStorage.getItem("2"));
$("#3 .textarea").val(localStorage.getItem("3"));
$("#4 .textarea").val(localStorage.getItem("4"));
$("#5 .textarea").val(localStorage.getItem("5"));
// console.log(timeSetup);
// console.log(currentTime);

// allow for input in timeblock fields
