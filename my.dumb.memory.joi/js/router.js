/**
 In this file I will handle the single page app functionality.
 */
(function (contextGlobal) {

    var RoutingEngine = function () {
        this.pages = [];
        this.start = function () {
            var hash = window.location.hash;
            var routingEngine = this;
            if (hash !== undefined && hash.length > 0) {
                $.ajax({
                    url: "js/data/pages.json"
                }).done(function (result) {
                    routingEngine.pages = result;
                    routingEngine.renderContent(1);
                    console.log(this);
                });
            }
        };
        this.renderContent = function (index) {
            $.ajax({
                url: "privateinfo/" + router.pages[index]["file"]
            }).done(function (result) {
                $("#wrapper").html(result);
            });
        };
    };

    if (contextGlobal.ROUTER === undefined) {
        contextGlobal.ROUTER = RoutingEngine;
    }

}(window));