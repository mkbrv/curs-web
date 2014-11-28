/**
 In this file I will handle the login.
 */
(function (contextGlobal) {

    var LOGIN = function () {

        this.login = function () {
            //LOGIN please;
            var x = document.cookie;
            document.cookie = "e logat";
        }

        this.isLoggedIn = function () {


            return false;
        }

    }

    contextGlobal.LOGIN = LOGIN;

}(window));