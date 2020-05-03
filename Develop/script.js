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
  if (timeBlockHour > currentTime) {
    $(".textarea").addClass("future");
  } else {
    $(".textarea").addClass("past");
  }
  // create classes for each time block to indicate past present or future
  console.log(timeBlockHour);
});

// allow for input to be saved to local storage
// Items should perists after refresh
$(".textarea").val(localStorage.getItem());
// $("#10 .textarea").val(localStorage.getItem("10"));
console.log(timeSetup);
console.log(currentTime);

// allow for input in timeblock fields