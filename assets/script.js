//write current date into DOM using moment.js
document.getElementById("currentDay").innerHTML = moment().format("MMMM Do YYYY");


//add event listener for saveBtn, get it to work with local storage
document.querySelector(".saveBtn").addEventListener("click", function(event) {

    event.preventDefault();
 
    let buttonID = $(this).attr("id");
    
    let userInput9 = $("#hour-9");
    localStorage.setItem("savedTask9", JSON.stringify(userInput9))

    let userInput10 = $("#hour-10");
    localStorage.setItem("savedTask10", JSON.stringify(userInput10))

    let userInput11 = $("#hour-11");
    localStorage.setItem("savedTask11", JSON.stringify(userInput11))

    let userInput12 = $("#hour-12").val().trim();
    localStorage.setItem("savedTask12", JSON.stringify(userInput12))

    let userInput13 = $("#hour-13").val().trim();
    localStorage.setItem("savedTask13", JSON.stringify(userInput13))

    let userInput14 = $("#hour-14").val().trim();
    localStorage.setItem("savedTask14", JSON.stringify(userInput14))

    let userInput15 = $("#hour-15").val().trim();
    localStorage.setItem("savedTask15", JSON.stringify(userInput15))

    let userInput16 = $("#hour-16").val().trim();
    localStorage.setItem("savedTask16", JSON.stringify(userInput16))

    let userInput17 = $("#hour-17");
    localStorage.setItem("savedTask17", JSON.stringify(userInput17))
});

//call a function to ensure that saved tasks remain visible after page refresh
getFromLocalStorage();

//write that function
function getFromLocalStorage () {
    let key9 = JSON.parse(localStorage.getItem("savedTask9"));
    $("#hour-9").val(key9);
    
    let key10 = JSON.parse(localStorage.getItem("savedTask10"));
    $("#hour-10").val(key10);
    
    let key11 = JSON.parse(localStorage.getItem("savedTask11"));
    $("#hour-11").val(key11);
    
    let key12 = JSON.parse(localStorage.getItem("savedTask12"));
    $("#hour-12").val(key12);
    
    let key13 = JSON.parse(localStorage.getItem("savedTask13"));
    $("#hour-13").val(key13);
    
    let key14 = JSON.parse(localStorage.getItem("savedTask14"));
    $("#hour-14").val(key14);
    
    let key15 = JSON.parse(localStorage.getItem("savedTask15"));
    $("#hour-15").val(key15);
    
    let key16 = JSON.parse(localStorage.getItem("savedTask16"));
    $("#hour-16").val(key16);
    
    let key17 = JSON.parse(localStorage.getItem("savedTask17"));
    $("#hour-17").val(key17);
    }

//readymade js time variables
    let now = new Date().getHours();

//conditionals to change style classes based on current time. Would have rather done a for loop, but couldn't get it to work.
if (now > 9) {
    $("#hour-9").addClass("past");
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