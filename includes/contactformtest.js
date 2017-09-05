// GOAL:  Acquire user inputted text from input form of id=robottest.  
// If this inputted text is equal to "GF8Q", then take the user input and dump it into the paragraph tag with id=testresults along with the text "is correct!", replacing the existing span element (node) and its contents.
// Otherwise, take the user input and display it along with the text "is incorrect; try again!"

// Likely this could have been accomplished more effectively without going through the tedious process of removing an existing <span> element.  But it was worth doing the research and determining how, precisely, to pull this off as a JavaScript novice.

function robotTest() {
		
	// Variables are all inside the function, as they will only be used within this function.
	
	var userInputText = document.getElementById("robottest").value; // Fetch the user inputted text from form input id=robottest
		// console.log(userInputText); (Test to make sure user input text is successfully grabbed)
	var testResultSuccessText = "<span>" + userInputText + " is correct!</span>";
		// console.log(testResultSuccessText); (Test contents of variable)
	var testResultFailureText = "<span>" + userInputText + " is incorrect; try again!</span>";
		// console.log(testResultFailureText); (Test contents of variable)
	
	if(userInputText == "GF8Q") {   // Comparing the inputted string vs. the expected string ("GF8Q")...
	
		// If condition is true, run this code

		// console.log('comparison is TRUE'); (Verify results of comparison)
		// console.log(document.getElementById("testresults").innerHTML) (Check current contents of element)
		
		var testResultsText = document.getElementById("testresults");   // Get the <p> element with id="testresults"
		
		testResultsText.removeChild(testResultsText.childNodes[0]);     // Remove <span> (and its contents) as the first child node within <p> id=testresults
		
		// console.log(document.getElementById("testresults").innerHTML) (Test to make sure contents were removed)
		
		document.getElementById("testresults").innerHTML = testResultSuccessText;   // Dump a new <span> with desired text into <p> id="testresults"

	} else {
		
		// If condition is false, run this code

		// console.log('comparison is FALSE'); (Verify results of comparison)
		// console.log(document.getElementById("testresults").innerHTML) (Check current contents of element)

		var testResultsText = document.getElementById("testresults");   // Get the <p> element with id="testresults"
		
		testResultsText.removeChild(testResultsText.childNodes[0]);     // Remove <span> (and its contents) as the first child node within <p> id=testresults
		
		// console.log(document.getElementById("testresults").innerHTML) (Test to make sure contents were removed)			
		
		document.getElementById("testresults").innerHTML = testResultFailureText;   // Dump a new <span> with desired text into <p> id="testresults"
		
	}
		
}