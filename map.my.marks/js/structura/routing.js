(function (contextGlobal) {

    var RoutingEngine = function (login) {
        this.login = login;
        this.pages = [];
        this.start = function () {

            /**
             * bring templates
             * @type {string}
             */
            this.bringTemplates();

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

        this.bringData = function (whereFrom, whereTO) {
            var currentObject = this;
            $.ajax({
                url: whereFrom
            }).done(function (result) {
                $("#" + whereTO).html(result);
            });
        };

        this.renderContent = function (hash) {

            if (this.pages.length > 0) {

                var currentPage = undefined;

                for (var page in this.pages) {
                    if (this.pages[page]["url"] !== undefined && this.pages[page]["url"] === hash) {
                        currentPage = this.pages[page];
                    }
                }

                if (currentPage === undefined) {
                    this.bringData("data/" + "404.html", "content");
                } else {
                    if (currentPage["private"]) {
                        if (this.login.isLoggedIn()) {
                            this.bringData("data/" + currentPage["template"], "content");
                        } else {
                            this.bringData("data/" + "404.html", "content");
                        }
                    } else {
                        this.bringData("data/" + currentPage["template"], "content");
                    }

                }
            }
        };

        this.bringTemplates = function () {
            var currentObject = this;
            $(".template-content").each(function () {
                var template = $(this).attr("data-template");
                //template will be located in a file with the name of the data-template
                if (template !== undefined && template.length > 0) {
                    currentObject.bringData("templates/" + template, $(this).attr("id"));
                }
            });
        };
    };

    if (contextGlobal.ROUTER === undefined) {
        contextGlobal.ROUTER = RoutingEngine;
    }

}(window));