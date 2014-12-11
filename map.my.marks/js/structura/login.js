(function (contextGlobal) {

    var LOGIN = function () {

        this.appendLoginButtonEvents = function(){
        }


        this.currentUser = undefined;

        this.isLoggedIn = function () {
            return this.currentUser !== undefined;
        };

        this.doLogin = function () {

        };


        this.isUsernameAndPasswordValid = function (username, password) {
        }
    };

    if (contextGlobal.LOGIN === undefined) {
        contextGlobal.LOGIN = LOGIN;
    }

}(window));