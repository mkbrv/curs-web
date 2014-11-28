(function (contextGlobal) {

    var LOGIN = function () {
        this.isLoggedIn = function () {
            return false;
        };

        this.doLogin = function () {

        };
    };

    if (contextGlobal.LOGIN === undefined) {
        contextGlobal.LOGIN = LOGIN;
    }

}(window));