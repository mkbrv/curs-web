(function (contextGlobal) {

    var RoutingEngine = function () {
        this.pages = [];
        this.start = function () {

            var hash = window.location.hash.substr(1);
            var currentObject = this;
            if (hash !== undefined) {
                $.ajax({
                    url: "js/data/pages.json"
                }).done(function (result) {
                    currentObject.pages = result;
                    currentObject.renderContent();
                });
            }

        };

        this.renderContent = function () {

            $.ajax({
                url: "data/" + this.pages[0]["template"]
            }).done(function (result) {
                jQuery("#wrapper").html(result);
            });
        }
    };

    if (contextGlobal.ROUTER === undefined) {
        contextGlobal.ROUTER = RoutingEngine;
    }

}(window));