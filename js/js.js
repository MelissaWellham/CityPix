$(document).ready(start);

function start () {
	console.log("ready!");
	$("#submit-btn").click(handleSubmit); //Use $.click to figure out when the user clicks the "submit" button   
}

function handleSubmit (event, displayCity) {
	event.preventDefault(); //Prevent a form submission 
	//Retrieve input
	var city = $("#city-type").val(); // | Call $.val() on inputs to get the string value of your user's input 
	//Update HTML 
	$("#city-type").val(city); //Store user input in var city
}

// 'Get the first element from an attribute name using $.attr()'' What does this mean? 

function displayCity (event) {
	event.preventDefault(); //Prevent a form submission 
	var city = $("#city-type").val();

	if city = "New York" || "New York City" || "NYC" {
		$("body").addClass("nyc");
	}

	if else city = "San Francisco" || "SF" || "Bay Area" {
		$("body").addClass("sf");
	}

	if else city = "Los Angeles" || "LA" || "LAX" {
		$("body").addClass("la");
	}

	if else city = "Austin" || "ATX" {
		$("body").addClass("la");
	}

	if else city = "Sydney" || "SYD" {
		$("body").addClass("sydney");
	}

	else {
		alert("Error!");
	}
}
