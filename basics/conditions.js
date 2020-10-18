var temperature;

temperature = 38;

if (temperature > 25) {
    console.log("it is humid");
}

var google = true;
var facebook = false;
var email = true;

if (google || email || facebook) {
    console.log("success");
} else {
    console.log("fail");
}

var authenticated = true;

if (authenticated) {
    console.log("show signout button");
} else {
    console.log("show login option");
}

authenticated == true ? console.log("show signout button") : console.log("login button");

var key = "user";

switch (key) {
    case "admin":
        console.log("you get full access");
        break;
    case "user":
        console.log("you get only comment");
        break;
}