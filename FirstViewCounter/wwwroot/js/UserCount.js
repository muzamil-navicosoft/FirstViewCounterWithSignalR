// create connection with Hub

var connection = new signalR.HubConnectionBuilder().withUrl("/hub/userCounter").build();

// connect to method that hub invokes

connection.on("uPdateTotalViewsAsync", (value) => {
    var newspan = document.getElementById("totalViewCounter");
    newspan.innerText = value.toString();
    console.log("")
});

// Invoke Hub Method

function newWidolwLoadedonClient(){
    connection.send("newWindowloaded");

}
//
function fullfield() {
    newWidolwLoadedonClient();
    console.log("Connection Started");

}

function rejected() {

}

//start connection

connection.start().then(fullfield, rejected);