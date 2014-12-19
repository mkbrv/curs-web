(function (contextGlobal) {
    var firebase = new Firebase('https://boiling-torch-7924.firebaseio.com/miki');

    var GMaps = function (fbPicturesList) {
        this.fbPicturesList = fbPicturesList;

        var currentObject = this;

        //push to firebase;
        for (var pictureKey in this.fbPicturesList.data) {
            var picture = this.fbPicturesList.data[pictureKey];

            // Tests to see if /users/<userId> has any data.
            function checkIfUserExists(picture) {
                firebase.once('value', function (data) {
                    var allPics = data.val();

                    for (var key in allPics) {
                        var picWr = allPics[key];
                        if (picWr.id === picture.id) {
                            return;
                        }
                    }
                    firebase.push({ id: picture.id, data: picture});

                });
            }

            checkIfUserExists(picture);

            //push picture to firebase
        }


        this.initMap = function () {
            var mapOptions = {
                zoom: 10
            };
            map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);

            // Try HTML5 geolocation
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var pos = new google.maps.LatLng(position.coords.latitude,
                        position.coords.longitude);

                    var infowindow = new google.maps.InfoWindow({
                        map: map,
                        position: pos,
                        content: 'Location found using HTML5.'
                    });

                    map.setCenter(pos);
                }, function () {
                    //do something without
                });
            } else {

            }


            /**
             * ADD MARKERS
             */

            for (var pictureKey in this.fbPicturesList.data) {
                var picture = this.fbPicturesList.data[pictureKey];

                var toSearch = $("#srch-term").val();

                var toIgnore = true;
                console.log(toSearch);
                if (toSearch.length > 0) {
                    if (picture.from.name.indexOf(toSearch) > -1) {
                        toIgnore = false;
                    }
                } else {
                    toIgnore = false;
                }

                if (picture.place !== undefined && !toIgnore) {
                    var newMarker = new google.maps.Marker({
                        position: new google.maps.LatLng(picture.place.location.latitude, picture.place.location.longitude),
                        title: picture.name,
                        map: map,
                        fbPicture: picture,
                        id: pictureKey
                        //icon: picture.picture
                    });

                    google.maps.event.addListener(newMarker, 'click', function (event) {
                        var contentString = '<div id="content">' +
                            '<div id="bodyContent">';

                        if (this.title !== undefined) {
                            contentString += '<h2>' + this.title + '</h2>';
                        }

                        contentString += '<hr><img src="' + this.fbPicture.picture + '"/><br>';

                        if (this.fbPicture.tags != null && this.fbPicture.tags.data.length > 0) {
                            contentString += " with: ";
                            for (var tagKey  in this.fbPicture.tags.data) {
                                contentString += " - " + this.fbPicture.tags.data[tagKey].name;
                            }
                        }
                        contentString += '</div>' +
                            '</div>';
                        var infowindow = new google.maps.InfoWindow({
                            content: contentString,
                            position: this.position
                        });

                        infowindow.open(map);
                    });
                }
            }

            function hideShowMap() {
                var mapCanvas = $("#map-canvas");
                var isShown = mapCanvas.css("display");
                if (isShown === "none") {
                    mapCanvas.slideDown("slow");
                } else {
                    mapCanvas.slideUp("slow");
                }
                e.preventDefault();
                google.maps.event.trigger(map, 'resize');
            }

            //add the show not show map
            $(".badge").click(function (e) {
                hideShowMap();
            });

            $("#srch-term").change(function () {
                currentObject.bringFromFireBase();
            });

        };

        var currentObject = this;

        //bring all from firebase

        this.bringFromFireBase = function () {
            firebase.once('value', function (data) {

                var allPics = data.val();
                currentObject.fbPicturesList.data = [];

                console.log(allPics);
                var hasOne = false;

                for (var key in allPics) {
                    hasOne = true;

                    var picWr = allPics[key];
                    currentObject.fbPicturesList.data.push(picWr.data);

                }
                if (hasOne) {
                    currentObject.initMap();
                }

            });
        };

        this.bringFromFireBase();

        this.initMap();
    };

    contextGlobal.GMaps = GMaps;

}(window));


function addMarkerBrasov() {
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(45.659, 25.614),
        title: "Hello World!"
    });
}