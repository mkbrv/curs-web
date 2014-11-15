console.log("Hello World");
document.write("Powerful you have" +
    " become, the javascript " +
    "I sense in     you");
//alert("This is really annoying");
//alert("6prnsc8k");


var primaMeaVariabila = 6.3
5 + 10
primaMeaVariabila = "111";

var oneInteger = 99;
var secondINteger = "99";

var nullVariable = undefined;
var nullvar;
console.log(oneInteger === secondINteger);

var firstString = "Salut ";
var secondString = "Mihai ";

//console.log(firstString + secondString
//   + oneInteger);

for (var i = 0; i < 99; i++) {

}

var simpleArray = [];
simpleArray["ceva"] = 10;
simpleArray[10] = "ceva";
simpleArray["matrix"] = [];
simpleArray["matrix"]["ceva"] = "ceva";
console.log(simpleArray);

for (var key in simpleArray) {
    //console.log(key +
    // +" : "+simpleArray[key]);
}

var Persoana = {
    nume: "Popescu",
    prenume: "Ionut",
    adresa: {
        strada: "Aleea Cutare",
        numar: 10
    },
    copii: [
        {
            prenume: "Ionut jr."
        },
        {
            prenume: "Ionut jr. jr."
        }
    ],
    grow: function (parametru) {
        console.log(this.nume);
        var functieceva = function () {

        };
        if (typeof (parametru)
            === "function") {
            parametru();
            console.log(parametru);
        } else {
            console.log(parametru);
        }
    }

};
//console.log("Persoana" + Persoana);
var salut = function () {
    console.log("Sunt doar o functie");
    return "untext";
};
Persoana.grow(salut);
var timer = 1000;
setInterval(function () {

}, 1000);
console.log(Persoana.adresa.numar);


function User(id, username) {
    this.id = id;
    this.username = username;
    this.age = 0;
    this.ban = function (howMuch) {
        if (this.isBanned === undefined) {
            this.isBanned = true;
            this.untilWhen = howMuch;
        }
    };
    this.grow = function () {
        this.age++;
        return this;
    };
}
var user = new User(10, "ceva");
user.grow().grow().grow().grow();
console.log(user);
var secondUser = new User("20", "salut");
user.ban(10);
secondUser.ban(1);
//console.log(user);
User.prototype.unban = function () {
    this.isBanned = undefined;
    this.untilWhen = undefined;
};
