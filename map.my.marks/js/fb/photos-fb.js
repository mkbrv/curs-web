(function (contextGlobal) {


    var FBPhoto = function (accessToken) {

        this.accessToken = accessToken;

        this.bringPhotos = function () {
            FB.api('/me/photos?accessToken=' + this.accessToken, function (responseArray) {
                //GMAPS
                var gMaps = new GMaps(responseArray);
                //TIMELINE

                var columns = ["#leftPanels", "#rightPanels"];
                var index = 0;
                console.log(responseArray.data);
                for (var responseKey in responseArray.data) {
                    timeLine = new TimeLine(columns[index % 2], responseArray.data[responseKey]);
                    index++;
                }
            });
        };

        var currentObject = this;
        currentObject.bringPhotos();
    };


    contextGlobal.FBPhoto = FBPhoto;


}(window));