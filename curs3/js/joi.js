console.log("Hello World");
document.write("Powerful you have become," +
    " the javascript I sense in  you");
//alert("This is really annoying");

6.3;
834.4, 34;

var simpleString = "this is a string";
var specialString = "this is \"special\" a string";

simpleString = 10.1;
var oneInteger = 99;
var secondInteger = "99";
if (oneInteger === secondInteger) {
    alert("something bad");
}
for (var i = 0; i < 99; i++) {
    //console.log(i);
}
var x;
if (x !== undefined) {
    console.log(x);
}

var concatenatedString = simpleString +
    specialString + oneInteger;
//console.log(concatenatedString);

var simpleArray = [];
simpleArray["ceva"] = 1;
simpleArray[oneInteger] = "string";
simpleArray["matrix"] = [];
simpleArray["matrix"][10] = "ceva";
console.log(simpleArray);

var variabilaFunctie = function () {
    console.log("variabila functie a fost apelata");
};
function ceva(parametru) {
    console.log("ceva a fost apelat");
    if (parametru !== undefined &&
        typeof (parametru) == "function") {
        parametru();
    }
}
ceva(variabilaFunctie);
variabilaFunctie();
var timer = 0;
setInterval(function () {
    //timer++;
    //console.log(timer);
}, 1000);

setTimeout(function () {

}, 10);

var Persoana = {
    nume: "Popescu",
    prenume: "Ionut",
    adresa: {
        strada: "Aleea Cutare",
        numar: 10
    }
};
console.log(Persoana.nume);


function User(id, username) {
    this.id = id;
    this.age = 0;
    this.username = username;
    this.grow = function () {
        this.age++;
        return this;
    };
}

User.prototype.grow = function () {
    this.age--;
    return this;
};
var userOne = new User(10, "usernameOne");
var userSecond = new User(11, "usernameTwo");
console.log(userOne);
userSecond.grow().grow().grow().grow();
console.log(userSecond);

for (var param in userOne) {
    console.log(param + ":" + userOne[param] + " - ");
}

var sir = [];//new Array()
sir[0] = 0;
sir[1] = 12;
//mostenire
Array.prototype.forEach = function () {
    console.log("apel");
};


userSecond.grow().grow().grow().grow();
console.log(userSecond);
[10, 11, 12, 53, 23].forEach();

