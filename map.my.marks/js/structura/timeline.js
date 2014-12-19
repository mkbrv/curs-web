(function (contextGlobal) {

    var panelTemplate = "<div class='panel panel-default'></div>";
    var peopleWhoLikedTemplate = "<div class='panel-liked'>";
    var panelImageTemplate = "<a data-lightbox='facebook-pictures'><img class='head-image'/></a>";

    var TimeLine = function (parent, fbPicture) {

        this.parent = parent;
        this.fbPicture = fbPicture;

        this.render = function () {
            var panel = $(panelTemplate);
            var panelImage = $(panelImageTemplate);
            panel.append(panelImage);
            if (this.fbPicture.images != null) {
                //take the highest resolutions please
                panelImage.attr("href", this.fbPicture.images[0].source);
                panelImage.find("img").attr("src", this.fbPicture.images[0].source);
            } else {
                panelImage.find("img").attr("src", this.fbPicture.picture);
                panelImage.attr("src", this.fbPicture.picture);
            }

            panel.append("<div class='panel-body'></div>");

            var textToDisplay =
                "";
            if (this.fbPicture.name != null) {
                textToDisplay += this.fbPicture.name;
            }
            if (this.fbPicture.tags != null && this.fbPicture.tags.data.length > 0) {
                textToDisplay += " with: ";
                for (var tagKey  in this.fbPicture.tags.data) {
                    textToDisplay += " - " + this.fbPicture.tags.data[tagKey].name;
                }
            }
            if (this.fbPicture.place != null) {
                textToDisplay += " @" + this.fbPicture.place.name;
            }

            panel.find("div").html(textToDisplay);
            var peopleWhoLikedContainer = $(peopleWhoLikedTemplate);
            if (this.fbPicture.tags != null && this.fbPicture.tags.data.length > 0) {
                for (var likeKey in this.fbPicture.tags.data) {
                    var pic = $("<img/>");
                    pic.attr("src", "http://graph.facebook.com/" + this.fbPicture.tags.data[likeKey].id + "/picture?type=large&height=100&width=100");
                    pic.attr("title", this.fbPicture.tags.data[likeKey].name);
                    peopleWhoLikedContainer.append(pic);
                }
            }
            panel.append("<hr/>");
            panel.append(peopleWhoLikedContainer);


            $(this.parent).append(panel);
        };

        this.render();
    };


    contextGlobal.TimeLine = TimeLine;


}(window));