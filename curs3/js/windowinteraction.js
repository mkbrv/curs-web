var ceasNode = document.createElement("div");
ceasNode.setAttribute("id", 'ceas');
ceasNode.innerText = "Salut";

document.body.appendChild(ceasNode);
var targetDate = new Date(2014, 11, 14, 7,
    0, 0, 0);
setTimeout(function () {
    setInterval(function () {
        var currentDate = new Date();
        var difference = targetDate.getTime() -
            currentDate.getTime();
        var differenceDate = new Date(difference);

        ceasNode.innerText =
            differenceDate.getHours()
                + ":" + differenceDate.getMinutes()
                + ":" + differenceDate.getSeconds();
    }, 1000);
}, 3000);


console.log(ceasNode);