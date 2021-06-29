//write current date into DOM using moment.js
document.getElementById("currentDay").innerHTML = moment().format("MMMM Do YYYY");


//add event listener for saveBtn, get it to work with local storage
document.querySelector("#saveBtn").addEventListener("click", function() {
    Event.preventDefault();
 
    let buttonID = $(this).attr("id");
    
    let userInput9 = $("#hour-9");
    localStorage.setItem("savedItem9", JSON.stringify(userInput9))

    let userInput10 = $("#hour-10");
    localStorage.setItem("savedItem10", JSON.stringify(userInput10))

    let userInput11 = $("#hour-11");
    localStorage.setItem("savedItem11", JSON.stringify(userInput11))

    let userInput12 = $("#hour-12");
    localStorage.setItem("savedItem12", JSON.stringify(userInput12))

    let userInput13 = $("#hour-13");
    localStorage.setItem("savedItem13", JSON.stringify(userInput13))

    let userInput14 = $("#hour-14");
    localStorage.setItem("savedItem14", JSON.stringify(userInput14))

    let userInput15 = $("#hour-15");
    localStorage.setItem("savedItem15", JSON.stringify(userInput15))

    let userInput16 = $("#hour-16");
    localStorage.setItem("savedItem16", JSON.stringify(userInput16))

    let userInput17 = $("#hour-17");
    localStorage.setItem("savedItem17", JSON.stringify(userInput17))
});
