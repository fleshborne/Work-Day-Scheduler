// Create time setup to show current day
var timeSetup = moment().format("MMM Do YYYY");
var currentDayEl = $("#currentDay");
var currentTime = moment().format("HH");
currentDayEl.append(timeSetup);
$(".saveBtn").on("click", function () {
  // assign a variable to equal the value of the text area
  var valueText = $(this).siblings(".textarea").val();
  // assign a variable to equal the value of the timeBlock
  var hourKey = $(this).siblings(".timeB").attr("time");
  // store the items in local storage
  localStorage.setItem(hourKey, valueText);
});

//$("#9 .textarea").addClass("present");

// an if function that compares current time to time of the block and assigns appropriate class to text area
$(".timeBlock").each(function () {
  // access this time block by its id
  //   var timeBlockHour = 9;
  var timeBlockHour = $(this).attr("id");

  if (timeBlockHour === currentTime) {
    // $(".timeBlock").children("#9 .textarea").addClass("present");
    $("#9 .textarea").addClass("present");
    $("#10 .textarea").addClass("present");
    $("#11 .textarea").addClass("present");
    $("#12 .textarea").addClass("present");
    $("#13 .textarea").addClass("present");
    $("#14 .textarea").addClass("present");
    $("#15 .textarea").addClass("present");
    $("#16 .textarea").addClass("present");
    $("#17 .textarea").addClass("present");
  } else if (timeBlockHour < currentTime) {
    // $(".timeBlock").children("#9 .textarea").removeClass("present");
    $("#9 .textarea").remove("future");
    $("#10 .textarea").remove("future");
    $("#11 .textarea").remove("future");
    $("#12 .textarea").remove("future");
    $("#13 .textarea").remove("future");
    $("#14 .textarea").remove("future");
    $("#15 .textarea").remove("future");
    $("#16 .textarea").remove("future");
    $("#17 .textarea").remove("future");
    $("#9 .textarea").remove(".present");
    $("#10 .textarea").remove(".present");
    $("#11 .textarea").remove(".present");
    $("#12 .textarea").remove(".present");
    $("#13 .textarea").remove(".present");
    $("#14 .textarea").remove(".present");
    $("#15 .textarea").remove(".present");
    $("#16 .textarea").remove(".present");
    $("#17 .textarea").remove(".present");
    $("#9 .textarea").addClass("past");
    $("#10 .textarea").addClass("past");
    $("#11 .textarea").addClass("past");
    $("#12 .textarea").addClass("past");
    $("#13 .textarea").addClass("past");
    $("#14 .textarea").addClass("past");
    $("#15 .textarea").addClass("past");
    $("#16 .textarea").addClass("past");
    $("#17 .textarea").addClass("past");
  } else if (timeBlockHour > currentTime) {
    // $(".timeBlock").children("#9 .textarea").addClass("future");
    // $(".timeBlock").children("#9 .textarea").remove("present");
    // $(".timeBlock").children("#9 .textarea").removeClass("future");
    // would these jquery selectors work better?
    //

    $("#9 .textarea").remove(".past");
    $("#10 .textarea").remove(".past");
    $("#11 .textarea").remove(".past");
    $("#12 .textarea").remove(".past");
    $("#13 .textarea").remove(".past");
    $("#14 .textarea").remove(".past");
    $("#15 .textarea").remove(".past");
    $("#16 .textarea").remove(".past");
    $("#17 .textarea").remove(".past");
    // $("#9 .textarea").remove(".present");
    // $("#10 .textarea").remove(".present");
    // $("#11 .textarea").remove(".present");
    // $("#12 .textarea").remove(".present");
    // $("#13 .textarea").remove(".present");
    // $("#14 .textarea").remove(".present");
    // $("#15 .textarea").remove(".present");
    // $("#16 .textarea").remove(".present");
    // $("#17 .textarea").remove(".present");
    $("#9 .textarea").addClass("future");
    $("#10 .textarea").addClass("future");
    $("#11 .textarea").addClass("future");
    $("#12 .textarea").addClass("future");
    $("#13 .textarea").addClass("future");
    $("#14 .textarea").addClass("future");
    $("#15 .textarea").addClass("future");
    $("#16 .textarea").addClass("future");
    $("#17 .textarea").addClass("future");
  }
  // create classes for each time block to indicate past present or future
  console.log(timeBlockHour);
});

// allow for input to be saved to local storage
// Items should perists after refresh
$("#9 .textarea").val(localStorage.getItem("9"));
$("#10 .textarea").val(localStorage.getItem("10"));
$("#11 .textarea").val(localStorage.getItem("11"));
$("#12 .textarea").val(localStorage.getItem("12"));
$("#13 .textarea").val(localStorage.getItem("13"));
$("#14 .textarea").val(localStorage.getItem("14"));
$("#15 .textarea").val(localStorage.getItem("15"));
$("#16 .textarea").val(localStorage.getItem("16"));
$("#17 .textarea").val(localStorage.getItem("17"));
// console.log(timeSetup);
console.log(currentTime);

// allow for input in timeblock fields
