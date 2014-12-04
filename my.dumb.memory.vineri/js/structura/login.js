(function (contextGlobal) {

    var LOGIN = function () {

        this.appendLoginButtonEvents = function(){

            $("#submit").click(function () {
                alert("ceva");
            });
        }


        this.currentUser = undefined;

        this.isLoggedIn = function () {
            return this.currentUser !== undefined;
        };

        this.doLogin = function () {

        };


        this.isUsernameAndPasswordValid = function (username, password) {
            ///fetch list of username and password;
            this.currentUser == users["0"];//din json
        }
    };

    if (contextGlobal.LOGIN === undefined) {
        contextGlobal.LOGIN = LOGIN;
    }

}(window));