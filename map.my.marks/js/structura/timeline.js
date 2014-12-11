(function (contextGlobal) {

    var panelTemplate = "<div class='panel panel-default'></div>";

    var TimeLine = function (parent, fbPicture) {

        this.parent = parent;
        this.fbPicture = fbPicture;

        this.render = function () {
            var panel = $(panelTemplate);
            panel.append("<img/>");
            if (this.fbPicture.images != null) {
                //take the highest resolutions please
                panel.find("img").attr("src", this.fbPicture.images[this.fbPicture.images.length - 1].source);
            } else {
                panel.find("img").attr("src", this.fbPicture.picture);
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

            $(this.parent).append(panel);
        };

        this.render();
    };


    contextGlobal.TimeLine = TimeLine;


}(window));