
var pwTB = document.getElementById("newPassword")
var numButton = document.getElementById("numButton")
var upperButton = document.getElementById("upperButton")
var lowerButton = document.getElementById("lowerButton")
var specialButton = document.getElementById("specialButton")

function cl(x) {
console.log(x);
}

$("#createButton").on("click", function() {
    var passLength = parseInt(document.getElementById("length").value,10);
    var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    var nums = "0123456789";
    var special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var charList = "";
    var newPassword = "";
    var passUpper = false;
    var passLower = false;
    var passNumbers = false;
    var specialChar = false;
    var ap = "aria-pressed"

    if (numButton.hasAttribute(ap) && numButton.getAttribute(ap) === "true") {
        passNumbers = true;
    }
    if (upperButton.hasAttribute(ap) && upperButton.getAttribute(ap) === "true") {
        passUpper = true;
    }
    if (lowerButton.hasAttribute(ap) && lowerButton.getAttribute(ap) === "true") {
        passLower = true;
    }

    if (specialButton.hasAttribute(ap) && specialButton.getAttribute(ap) === "true") {
        specialChar = true;
    }

    if (passLower === false && specialChar === false && passUpper === false && passNumbers === false) {
        alert("Choose from character type buttons. Must select at least one");
    }
   
    else if (isNaN(passLength) || passLength < 8 || passLength > 128) {
        alert("Please choose a password length between 8 and 128");
    }
    else {
        if (passUpper === true) {
            charList += upperLetters;
        }
        if (passLower === true) {
            charList += lowerLetters;
        }
        if (passNumbers === true) {
            charList += nums;
        }
        if (specialChar === true) {
            charList += special;
        }
        for (var i = 1; i <= passLength; i++) {
            newPassword += charList.charAt(Math.floor(Math.random() * charList.length) +1);
        }
        cl(newPassword)
        pwTB.value = newPassword;

        if ( document.getElementById("cpbtn").classList.contains('invisible') ) {
            document.getElementById("cpbtn").classList.remove('invisible');
        }    
    }

})

$("#cpbtn").on('click', function() {
    pwTB.select()
    document.execCommand('copy')
    alert("Copied")
})
