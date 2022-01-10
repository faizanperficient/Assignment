function PersonData() {
    //store input value in varibles
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    //convert the first name into title case
    var fname = fname.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
    //convert the last name into title case
    var lname = lname.toLowerCase().split(' ').map(function (word1) {
        return (word1.charAt(0).toUpperCase() + word1.slice(1));
    }).join(' ');

    //check all input have some values or not
    if (age == "" || fname == "" || lname == "" || email == "") {
        alert("Please input a Value");
        return false;
    }
    //check the age is satisfy for condition
    if (age >= 10) {
        document.getElementById("pi3").innerHTML = "your age is " + age + " thats why u are Genious";
    } else if (age <= 0) {
        alert("please enter valid value in age")
    } else if (age < 10) {
        document.getElementById("pi3").innerHTML = "your age is " + age + " thats why u are Kids";
    }
    //print the all input value into paragraph
    document.getElementById("pi").innerHTML = "Your first name is :-" + fname;
    document.getElementById("pi2").innerHTML = "Your last name is:-" + lname;
    document.getElementById("pi4").innerHTML = "Your Email id  is:-" + email;

}
//function to delete all text into input box
function Clearall() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    
}