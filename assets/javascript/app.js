// Initialize Firebase
var config = {
    apiKey: "AIzaSyAwp5gqDCaUpux6sIAhjfPnUZULgSyts8o",
    authDomain: "trains-4805e.firebaseapp.com",
    databaseURL: "https://trains-4805e.firebaseio.com",
    projectId: "trains-4805e",
    storageBucket: "trains-4805e.appspot.com",
    messagingSenderId: "592648417423"
};

firebase.initializeApp(config);

var database = firebase.database()

var trainName = "";
var trainDestination = "";
var trainTime = 0;
var trainFrequency = 0;

$(".btn").on("click", function (event) {

    // event.preventDefault();
    trainName = $("#train-name").val().trim();
    trainDestination = $("#train-destination").val().trim();
    trainTime = $("#train-time").val().trim();
    trainFrequency = $("#train-frequency").val().trim();

    console.log("oh Raj");

    // var trainTime= moment(trainTime).format("HH:mm");
    database.ref().push({
        trainName: trainName,
        trainDestination: trainDestination,
        trainTime: trainTime,
        trainFrequency: trainFrequency
    })
})

database.ref().on("child_added", function(childSnapshot, prevChildKey){
    $("#trainTable").append(
        "<tr><td id='train-name'>" + childSnapshot.val().trainName  +
        "</td><td id='train-destination'>" + childSnapshot.val().trainDestination +
        "</td><td id='train-frequency'>" + childSnapshot.val().trainFrequency +
        "</td><td id='train-time'>" + childSnapshot.val().trainTime + "</td></tr>"
    )
    console.log(childSnapshot.val());
})





