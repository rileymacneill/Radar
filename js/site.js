//Console
function getValue() {
    //Make sure alert is invisible
    document.getElementById("alert").classList.add("invisible");
    //Get user string from page
    let userString = document.getElementById("userString").value;
    //Check for Palindrome
    let returnObj = checkForPalindrom(userString);
    //Display msg to screen
    displayMessage(returnObj);
}

//Check for Palindrome
function checkForPalindrom(userString) {
    //Make string lowercase
    userString = userString.toLowerCase();
    //Remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");
    //Set arrays/objects
    let revString = [];
    let returnObj = {};
    //Index the string in reverse
    for (let index = userString.length - 1; index >= 0; index--) {

        revString += userString[index];
    }
    //Compare the string to see if the match
    if (revString == userString) {
        returnObj.msg = "Well Done! You entered a palindrome!"
    } else {
        returnObj.msg = "Sorry, you did not enter a palindrome"
    }
    returnObj.reversed = revString;
    return returnObj;
}

//View function
function displayMessage(returnObj) {
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}