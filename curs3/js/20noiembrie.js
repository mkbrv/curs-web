var callBackClick = function () {
    $.ajax({
        url: "ajax/news.html",
        beforeSend: function () {
            $(".inactive-news").fadeOut();
        },
        error: function () {
            alert("Ups, eroare!");
        }
    }).done(function (rezultat) {
        $(".miki").append(rezultat);
        $(".inactive-news").fadeIn();
    });
};
$("#startTimer").click(callBackClick);


