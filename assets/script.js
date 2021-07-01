$(document).ready(function() {

//write current date into DOM using moment.js
document.getElementById("currentDay").innerHTML = moment().format("MMMM Do YYYY");

//add event listener for saveBtn, get it to work with local storage
$(".saveBtn").on("click", function (event) {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  event.preventDefault();

  //set items in local storage.
  localStorage.setItem(time, text);
})
//load any saved data from LocalStorage - do this for each hour created.
$("#hour-9.description").val(localStorage.getItem("9AM"));
$("#hour-10.description").val(localStorage.getItem("10AM"));
$("#hour-11.description").val(localStorage.getItem("11AM"));
$("#hour-12.description").val(localStorage.getItem("12PM"));
$("#hour-13.description").val(localStorage.getItem("1PM"));
$("#hour-14.description").val(localStorage.getItem("2PM"));
$("#hour-15.description").val(localStorage.getItem("3PM"));
$("#hour-16.description").val(localStorage.getItem("4PM"));
$("#hour-17.description").val(localStorage.getItem("5PM"));


//conditionals to change style classes based on current time. Not ideal, but it works (unlike my for each attempt)
var now = moment().hour();

if (now > 9) {
  $("#hour-9").addClass("past");
  console.log("past")
} else if (now >= 9 && now < 10) {
  $("#hour-9").addClass("present");
} else if (now < 9) {
  $("#hour-9").addClass("future");
}

if (now > 10) {
  $("#hour-10").addClass("past");
} else if (now >= 10 && now < 11) {
  $("#hour-10").addClass("present");
} else if (now < 10) {
  $("#hour-10").addClass("future");
}

if (now > 11) {
  $("#hour-11").addClass("past");
} else if (now >= 11 && now < 12) {
  $("#hour-11").addClass("present");
} else if (now < 11) {
  $("#hour-11").addClass("future");
}

if (now > 12) {
  $("#hour-12").addClass("past");
} else if (now >= 12 && now < 13) {
  $("#hour-12").addClass("present");
} else if (now < 12) {
  $("#hour-12").addClass("future");
}

if (now > 13) {
  $("#hour-13").addClass("past");
} else if (now >= 13 && now < 14) {
  $("#hour-13").addClass("present");
} else if (now <13) {
  $("#hour-13").addClass("future");
}

if (now > 14) {
  $("#hour-14").addClass("past");
} else if (now >= 14 && now < 15) {
  $("#hour-14").addClass("present");
} else if (now < 14) {
  $("#hour-14").addClass("future");
}

if (now > 15) {
  $("#hour-15").addClass("past");
} else if (now >= 15 && now < 16) {
  $("#hour-15").addClass("present");
} else if (now < 15) {
  $("#hour-15").addClass("future");
}

if (now > 16) {
  $("#hour-16").addClass("past");
} else if (now >= 16 && now < 17) {
  $("#hour-16").addClass("present");
} else if (now < 16) {
  $("#hour-16").addClass("future");
}

if (now > 17) {
  $("#hour-17").addClass("past");
} else if (now >= 17 && now < 18) {
  $("#hour-17").addClass("present");
} else if (now < 17) {
  $("#hour-17").addClass("future");
}

})
