$(document).ready(start);

function start () {
	console.log("ready!");
	$("#submit-btn").click(handleSubmit); //Use $.click to figure out when the user clicks the "submit" button   
}

//Get user's input 

function handleSubmit (event) {
	event.preventDefault(); //Prevent a form submission 
	//Retrieve input
	// Call $.val() on inputs to get the string value of your user's input 
	var city = $("#city-type").val(); //Store user input in var city 
	displayCity(city);  //Call function for display city 
}

// Display appropriate photo 

function displayCity (city) {

	if(city == "New York" || city == "New York City" || city == "NYC") { // brackets around entire if statement
		$("body").attr("class", "nyc"); // 'Get the first element from an attribute name using $.attr() s
	}

	else if(city == "San Francisco" || city =="SF" || city == "Bay Area") {
		$("body").attr("class", "sf");
	}

	else if(city == "Los Angeles" || city == "LA" || city == "LAX") {
		$("body").attr("class", "la");
	}

	else if(city == "Austin" || city =="ATX") {
		$("body").attr("class", "austin");
	}

	else if(city == "Sydney" || city == "SYD") {
		$("body").attr("class", "sydney");
	}

	else {
		alert("Error!");
	}
}
