(function (contextGlobal) {


    var FBPublisher = function (accessToken) {

        this.accessToken = accessToken;

        this.sendToGroup = function (message) {
            this.send("/1493709657548511/feed", message);
        };

        this.sendToTimeLine = function (message) {
            this.send("/me/feed", message);
        };

        this.send = function (url, message) {

            if (typeof message == "string") {
                var auxMessage = message;
                message = {};
                message.message = auxMessage;
            }

            message.place = "183113748233"; // this will say @at Pentalog
            message.tags = "183113748233,100000562838158,100000538116580,100000662228483";
            //this will add tagged people
            message.message += " #Pentalog #P5CursWeb";
            message.link = "http://softwareengineer.ro/p5/frontend.png"

            FB.api(
                url,
                "POST",
                message,
                function (response) {
                    if (response && !response.error) {
                        console.log(message);
                    } else {
                        console.log(response.error);
                    }
                }
            );
        };

        var currentObject = this;

        setTimeout(function () {
            $("#postModal").find("button").click(function (e) {
                e.preventDefault();
                currentObject.sendToGroup($("#postModal").find("textarea").val());
                currentObject.sendToTimeLine($("#postModal").find("textarea").val());
            });
        }, 1000);

    };


    contextGlobal.FBPublisher = FBPublisher;


}(window));