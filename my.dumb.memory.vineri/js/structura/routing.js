(function (contextGlobal) {

    var RoutingEngine = function (login) {
        this.login = login;
        this.pages = [];
        this.start = function () {

            var hash = window.location.hash;
            var currentObject = this;
            if (hash !== undefined) {
                $.ajax({
                    url: "js/data/pages.json"
                }).done(function (result) {
                    currentObject.pages = result;
                    currentObject.renderContent(hash);
                });
            }

        };

        this.bringData = function (whereFrom) {
            var currentObject = this;
            $.ajax({
                url: whereFrom
            }).done(function (result) {
                $("#wrapper").html(result);
                currentObject.login.appendLoginButtonEvents();
            });
        }

        this.renderContent = function (hash) {

            if (this.pages.length > 0) {

                var currentPage = undefined;

                for (var page in this.pages) {
                    if (this.pages[page]["url"] !== undefined && this.pages[page]["url"] === hash) {
                        currentPage = this.pages[page];
                    }
                }

                if (currentPage === undefined) {
                    document.write("404");
                } else {
                    if (currentPage["private"]) {
                        if (this.login.isLoggedIn()) {
                            this.bringData("data/" + currentPage["template"]);
                        } else {
                            document.write("404");
                        }
                    } else {
                        this.bringData("data/" + currentPage["template"]);
                    }

                }
            }
        }
    };

    if (contextGlobal.ROUTER === undefined) {
        contextGlobal.ROUTER = RoutingEngine;
    }

}(window));