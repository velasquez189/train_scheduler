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

    database.ref().push({
        trainName: trainName,
        trainDestination: trainDestination,
        trainTime: trainTime,
        trainFrequency: trainFrequency
    })
})


