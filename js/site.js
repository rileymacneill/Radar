function getValue() {
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let specialString = userString.replace(/[^a-zA-Z ]/g, "");
    let lowerString = specialString.toLowerCase();
    let revString = reverseString(lowerString);
    displayString(revString,lowerString);
}

//Reverse the string
function reverseString(lowerString) {
    let revString = [];
    //Reverse the string using a for loop
    for (let index = lowerString.length - 1; index >= 0; index--) {
        revString += lowerString[index];
    }
    return revString;
}

//View function
function displayString(revString,lowerString) {
    if (revString == lowerString) {
        document.getElementById("msg").innerHTML = `Your string is Palindrome: ${revString}`;
        document.getElementById("alert").classList.remove("invisible");
        document.getElementById("alert").classList.add("alert-success");
    } else {
        document.getElementById("msg").innerHTML = `Your string is NOT a Palindrome: ${revString}`;
        document.getElementById("alert").classList.remove("invisible");
        document.getElementById("alert").classList.add("alert-danger");
    }
}