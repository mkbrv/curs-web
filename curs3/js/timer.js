(function (contextGlobal) {

    var button = document
        .getElementById("startTimer"); //preluam din DOM elementul cu id= "startTimer"

    var Timer = function (targetDate) { //constructorul obiectului Timer
        this.targetDate = targetDate;
        this.start = function () {
            this.log("wasStarted");//logam interactiunea
            this.timeOut = setInterval(function () {//creem o functie anonima care sa se execute every 1000 ms
                var currentDate = new Date(); // data curenta.
                var differenceDate = new Date(
                    targetDate - currentDate//va crea o noua data din diferenta celorlalte 2. deci probabil vorbim de
                    //ceva gen ianuarie 1970
                );
                var contentDiv =
                    document.getElementById("content");
                contentDiv.innerHTML =
                    differenceDate.getDate() + "-" + //afisam ziua / ora / minute / secunde
                        differenceDate.getHours() + ":" +
                        differenceDate.getMinutes() + ":" +
                        differenceDate.getSeconds();
            }, 1000);
        };
        this.stop = function () {
            this.log("wasStoped");//logam interactiunea
            clearInterval(this.timeOut);//oprim intervalul
        };

        this.log = function (toLog) {
            if (contextGlobal.LOGGER !== undefined//avem o variabila global definita, in functie de care afisam sau nu un mesaj
                && contextGlobal.LOGGER === true) {//aceasta variabila se poate seta din consola.
                // exemplu F12 click pe consola, tastam:  LOGGER= true;
                //dam click pe buton si vom vedea niste mesaje
                console.log(toLog);
            }
        };
    };

    var timer; //EVENIMENT
    button.addEventListener("contextmenu",//contextmenu = click dreapta
        function (e) {
            e.preventDefault();
            timer = new Timer(
                new Date(
                    2014, 12, 1,
                    20, 0, 0//data tinta 1 dec 2014
                )
            );
            timer.start();//pornim timer
        });//EVENIMENT
    button.addEventListener("click", // atasam butonului o functie pe evenimentul CLICK
        function (e) {
            if (timer !== undefined) {
                timer.stop();//oprim timer
            }
        });

    contextGlobal.TIMER = Timer;  //exportam in context global doar 1 singur obiect -- Timer

}(window));
//window este variabila globala cu care apelam functia anonima precedent declarata


