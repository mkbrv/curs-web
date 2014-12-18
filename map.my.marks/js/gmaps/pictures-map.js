(function (contextGlobal) {


    var GMaps = function (fbPicturesList) {
        this.fbPicturesList = fbPicturesList;

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
                if (picture.place !== undefined) {
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
                            '<div id="siteNotice">';

                        if (this.title !== undefined) {
                            contentString += '<h2>' + this.title + '</h2>';
                        }

                        contentString += '<hr><img src="' + this.fbPicture.picture + '"/>'
                        '</div>' +
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

        };
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