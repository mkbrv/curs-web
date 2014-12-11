(function (contextGlobal) {


    var FACEBOOK = function () {

        var APP_ID = "334020663448029";
        var SECRET_KEY = "f9b29a54a70f1286d49294182ea4445b";

        var permsRequiredList = ['email', 'user_likes', 'user_friends', 'read_friendlists',
            'user_activities','user_photos', 'user_location', 'user_tagged_places', 'publish_actions', 'user_groups'];

        this.isConnected = false;
        this.accessToken = "";
        this.currentUser = {};
        this.fbPublisher = {};
        this.fbPhoto = {};

        var currentObject = this;

        this.askPermissions = function () {
            FB.login(function (response) {
                currentObject.checkLoginState();
            }, {scope: permsRequiredList});
        };

        this.checkIFRequiresPermissions = function () {
            FB.api('/me/permissions', function (response) {
                for (var permNeedIndex in permsRequiredList) {

                    var permRequired = permsRequiredList[permNeedIndex];
                    var isGranted = false;

                    for (var permHavedIndex  in response.data) {
                        var permHaved = response.data[permHavedIndex];
                        if (permHaved.permission === permRequired) {
                            isGranted = true;
                            break;
                        }
                    }

                    if (!isGranted) {
                        console.log('Need to re-prompt user for permission: ' + permRequired);
                        currentObject.askPermissions();
                        break;
                    }
                }
            });
        };

        this.checkLoginState = function () {
            FB.getLoginStatus(function (response) {
                if (response.status === "connected") {
                    currentObject.accessToken = response.authResponse.accessToken;
                    currentObject.isConnected = true;
                    console.log("User is logged in");
                    currentObject.checkIFRequiresPermissions();
                    currentObject.fbPublisher = new FBPublisher(currentObject.accessToken);
                    currentObject.fbPhoto = new FBPhoto(currentObject.accessToken);
                    //check permisions
                } else {
                    currentObject.askPermissions();
                }
            });
        }

        /**
         * this stuff loads the facebook script;
         */
        {
            contextGlobal.fbAsyncInit = function () {
                FB.init({
                    appId: APP_ID,
                    secret: SECRET_KEY,
                    xfbml: true,
                    version: 'v2.2'
                });
                currentObject.checkLoginState();
            };

            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

            /**
             * end of loading the facebook script
             */
        }
    };

    if (contextGlobal.FACEBOOK === undefined) {
        contextGlobal.FACEBOOK = FACEBOOK;
    }

}(window));