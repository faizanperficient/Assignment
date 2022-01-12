
function persondata() {
   
    var first_name = document.getElementById("fname").value;
    var last_name = document.getElementById("lname").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
   function firstname(){
        var first_name2 = first_name.charAt(0).toUpperCase()+first_name.slice(1).toLowerCase();;
        return first_name2;
    }
    function lastname(){
        var last_name2 = last_name.charAt(0).toUpperCase()+last_name.slice(1).toLowerCase();;
        return last_name2;
    }
    if (age >= 10) {
        document.getElementById("pi3").innerHTML = "Your Age is " + age + " and You are Genious";
    } else if (age <= 0) {
        alert("please enter valid value in age");
        return false;
    } else if (age < 10 ) {
        document.getElementById("pi3").innerHTML = "Your Age is " + age + " and You are Kid";
    }
    document.getElementById("pi").innerHTML = "Your first name is :-" + firstname();
    document.getElementById("pi2").innerHTML = "Your last name is:-" + lastname();
    document.getElementById("pi4").innerHTML = "Your Email id  is:-" + email;
}
