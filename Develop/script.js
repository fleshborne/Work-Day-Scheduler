// Create time setup to show current day
var timeSetup = moment().format("MMM Do YYYY");
var currentDayEl = $("#currentDay");
var currentTime = parseInt(moment().format("HH"));
currentDayEl.append(timeSetup);
$(".saveBtn").on("click", function () {
  // assign a variable to equal the value of the text area
  var valueText = $(this).siblings(".textarea").val();
  // assign a variable to equal the value of the timeBlock
  var hourKey = $(this).siblings(".timeB").attr("time");
  // store the items in local storage
  localStorage.setItem(hourKey, valueText);
});

// an if function that compares current time to time of the block and assigns appropriate class to text area
$(".timeBlock").each(function () {
  // access this time block by its id
  var timeBlockHour = parseInt($(this).attr("id"));
  if (timeBlockHour === currentTime) {
    $(this).children(".textArea").addClass("present");
  } else if (timeBlockHour < currentTime) {
    $(this).children(".textArea").addClass("past");
  } else if (timeBlockHour > currentTime) {
    $(this).children(".textArea").addClass("future");
  }

  // create classes for each time block to indicate past present or future
  console.log(timeBlockHour);
  console.log(currentTime);
});

// allow for input to be saved to local storage
// Items should perists after refresh
$(".9").val(localStorage.getItem("9"));
$(".10").val(localStorage.getItem("10"));
$(".11").val(localStorage.getItem("11"));
$(".12").val(localStorage.getItem("12"));
$(".13").val(localStorage.getItem("13"));
$(".14").val(localStorage.getItem("14"));
$(".15").val(localStorage.getItem("15"));
$(".16").val(localStorage.getItem("16"));
$(".17").val(localStorage.getItem("17"));
// console.log(timeSetup);
// console.log(currentTime);

// allow for input in timeblock fields
