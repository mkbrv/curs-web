(function (global) {

    var button = document
        .getElementById("startTimer");

    var Timer = function (targetDate) {
        this.targetDate = targetDate;
        this.start = function () {
            this.log("wasStarted");
            this.timeOut = setInterval(function () {
                var currentDate = new Date();
                var differenceDate = new Date(
                    targetDate - currentDate
                );
                var contentDiv =
                    document.getElementById("content");
                contentDiv.innerHTML =
                    differenceDate.getDate() + "-" +
                        differenceDate.getHours() + ":" +
                        differenceDate.getMinutes() + ":" +
                        differenceDate.getSeconds();
            }, 1000);
        };
        this.stop = function () {
            this.log("wasStoped");
            clearInterval(this.timeOut);
        };

        this.log = function (toLog) {
            if (global.LOGGER !== undefined
                && global.LOGGER === true) {
                console.log(toLog);
            }
        };
    };

    var timer;
    button.addEventListener("contextmenu",
        function (e) {
            e.preventDefault();
            timer = new Timer(
                new Date(
                    2014, 12, 1,
                    20, 0, 0
                )
            );
            timer.start();
        });
    button.addEventListener("click",
        function (e) {
            if (timer !== undefined) {
                timer.stop();
            }
        });

}(window));