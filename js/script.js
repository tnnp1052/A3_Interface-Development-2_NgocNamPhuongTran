$(window).on("load", slideshow);

function slideshow (){
    $('#carousel').slick({
        prevArrow: null,
        nextArrow: null
    });
}

$(document).on("click", "#nav a[href]", category);
$(document).on("click", "#connect", category);
$(document).on("click", ".dropdown-item[href]", category);
$(document).on("click", ".post-title[href]", category);

function category(e){

    e.preventDefault();

    var link = $(this).attr("href");
    $("#content").load("modules/" + link);

}



