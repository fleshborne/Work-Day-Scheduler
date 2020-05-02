// Create time setup to show current day
var timeSetup = moment().format("MMM Do YYYY");
var currentDayEl = $("#currentDay");
var currentTime = moment().format("HH");
currentDayEl.append(timeSetup);
$(".saveBtn").on("click", function () {
  var valueText = $(this).siblings(".textarea").val();
  var hourKey = $(this).siblings(".timeB").attr("time");
  localStorage.setItem(hourKey, valueText);
});

//$("#9 .textarea").addClass("present");

// an if function that compares current time to time of the block and assigns appropriate class to text area
$(".timeBlock").each(function () {
  var timeBlockHour = $(this).attr("id");
  if (timeBlockHour > currentTime) {
    $(".textarea").addClass("future");
  }
  console.log(timeBlockHour);
});
$("#9 .textarea").val(localStorage.getItem("9"));
$("#10 .textarea").val(localStorage.getItem("10"));
console.log(timeSetup);
// create time block
// var timeBlock9 = $("<div>").text
// create time block input
// create classes for each time block to indicate past present or future
// allow for input in timeblock fields
// aloow for input to be saved to local storage
// Items should perists after refresh
