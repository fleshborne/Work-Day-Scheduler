// var save9 = $(".9");
// var save10 = $(".10");
// var save11 = $(".11");
// var save12 = $(".12");
// var save13 = $(".13");
// var save14 = $(".14");
// var save15 = $(".15");
// var save16 = $(".16");
// var save17 = $(".17");
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
// trying to see if putting the saved data into an aray would solve my issue
// var allSaves = [
//   save9,
//   save10,
//   save11,
//   save12,
//   save13,
//   save14,
//   save15,
//   save16,
//   save17,
// ];

// allSaves.forEach(function (saves) {
//   var saveTimeId = parseInt(saves[0]);
//   console.log(saveTimeId);
//   console.log(currentTime);

//   if (saveTimeId === currentTime) {
//     $(".textarea").addClass("present");
//   } else if (saveTimeId < currentTime) {
//     $(".textarea").addClass("past");
//   } else {
//     $(".textarea").addClass("future");
//   }
// });
//$("#9 .textarea").addClass("present");
// an if function that compares current time to time of the block and assigns appropriate class to text area
$(".timeBlock").each(function () {
  // access this time block by its id
  var timeBlockHour = parseInt($(this).attr("id"));
  //   var timeBlockHour = 24;
  if (timeBlockHour === currentTime) {
    // $(".timeBlock").children("#9 .textarea").addClass("present");
    $(".textarea").addClass("present");
    // $("#10 .textarea").addClass("present");
    // $("#11 .textarea").addClass("present");
    // $("#12 .textarea").addClass("present");
    // $("#13 .textarea").addClass("present");
    // $("#14 .textarea").addClass("present");
    // $("#15 .textarea").addClass("present");
    // $("#16 .textarea").addClass("present");
    // $("#17 .textarea").addClass("present");
  } else if (timeBlockHour < currentTime) {
    // $(".timeBlock").children("#9 .textarea").removeClass("present");
    // $("#9 .textarea").remove(".present");
    // $("#10 .textarea").remove(".present");
    // $("#11 .textarea").remove(".present");
    // $("#12 .textarea").remove(".present");
    // $("#13 .textarea").remove(".present");
    // $("#14 .textarea").remove(".present");
    // $("#15 .textarea").remove(".present");
    // $("#16 .textarea").remove(".present");
    // $("#17 .textarea").remove(".present");
    $(".textarea").addClass("past");
    // $("#10 .textarea").addClass("past");
    // $("#11 .textarea").addClass("past");
    // $("#12 .textarea").addClass("past");
    // $("#13 .textarea").addClass("past");
    // $("#14 .textarea").addClass("past");
    // $("#15 .textarea").addClass("past");
    // $("#16 .textarea").addClass("past");
    // $("#17 .textarea").addClass("past");
  } else {
    // $(".timeBlock").children("#9 .textarea").addClass("future");
    // $(".timeBlock").children("#9 .textarea").remove("present");
    // $(".timeBlock").children("#9 .textarea").removeClass("future");
    // would these jquery selectors work better?
    //

    $(".textarea").remove("past");
    // $("#10 .textarea").remove(".past");
    // $("#11 .textarea").remove(".past");
    // $("#12 .textarea").remove(".past");
    // $("#13 .textarea").remove(".past");
    // $("#14 .textarea").remove(".past");
    // $("#15 .textarea").remove(".past");
    // $("#16 .textarea").remove(".past");
    // $("#17 .textarea").remove(".past");
    // $(".textarea").remove(".present");
    // $("#10 .textarea").remove(".present");
    // $("#11 .textarea").remove(".present");
    // $("#12 .textarea").remove(".present");
    // $("#13 .textarea").remove(".present");
    // $("#14 .textarea").remove(".present");
    // $("#15 .textarea").remove(".present");
    // $("#16 .textarea").remove(".present");
    // $("#17 .textarea").remove(".present");
    $(".textarea").addClass("future");
    // $("#10 .textarea").addClass("future");
    // $("#11 .textarea").addClass("future");
    // $("#12 .textarea").addClass("future");
    // $("#13 .textarea").addClass("future");
    // $("#14 .textarea").addClass("future");
    // $("#15 .textarea").addClass("future");
    // $("#16 .textarea").addClass("future");
    // $("#17 .textarea").addClass("future");
  }
  // create classes for each time block to indicate past present or future
  console.log(timeBlockHour);
  console.log(currentTime);
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
// console.log(currentTime);

// allow for input in timeblock fields
