settings = {
    //Model Popup
    objModalPopupBtn: ".modalButton",
    objModalCloseBtn: ".overlay, .closeBtn",
    objModalDataAttr: "data-popup"
}
//$(settings.objModalPopupBtn).bind("click", function () {
//    if ($(this).attr(settings.objModalDataAttr)) {
//
//        var strDataPopupName = $(this).attr(settings.objModalDataAttr);
//
//
//        //Fade In Modal Pop Up
//        $(".overlay, #" + strDataPopupName).fadeIn();
//
//    }
//});
$('.btbL').bind("click", function () {
    $('.modalImg').css({
        backgroundImage: 'url(./img/poster3.png)'
    });

    $('.infoL').css({
        display: 'flex'
    })
    $('.infoC').css({
        display: 'none'
    })
    $('.infoR').css({
        display: 'none'
    })
    $('.btnSience').css({
        display: 'none'
    })
    $('.btnImpact').css({
        display: 'flex'
    })
    $('.btnRebel').css({
        display: 'none'
    })
    if ($(this).attr(settings.objModalDataAttr)) {

        var strDataPopupName = $(this).attr(settings.objModalDataAttr);


        //Fade In Modal Pop Up
        $(".overlay, #" + strDataPopupName).fadeIn();

    }
});
$('.btbC').bind("click", function () {
    if ($(this).attr(settings.objModalDataAttr)) {
        $('.modalImg').css({
            backgroundImage: 'url(./img/poster1.png)'
        });
        $('.infoL').css({
            display: 'none'
        })
        $('.infoC').css({
            display: 'flex'
        })
        $('.infoR').css({
            display: 'none'
        });
        $('.btnSience').css({
            display: 'none'
        })
        $('.btnImpact').css({
            display: 'none'
        })
        $('.btnRebel').css({
            display: 'flex'
        })
        $('.modalWrapper').css({
            'align-items': 'flex-start'
        })

        var strDataPopupName = $(this).attr(settings.objModalDataAttr);


        //Fade In Modal Pop Up
        $(".overlay, #" + strDataPopupName).fadeIn();

    }

});
$('.btbR').bind("click", function () {
    if ($(this).attr(settings.objModalDataAttr)) {
        $('.modalImg').css({
            backgroundImage: 'url(./img/poster2.png)'
        });
        $('.infoL').css({
            display: 'none'
        })
        $('.infoC').css({
            display: 'none'
        })
        $('.infoR').css({
            display: 'flex'
        })
        $('.modalWrapper').css({
            'align-items': 'flex-start'
        })
        $('.btnSience').css({
            display: 'flex'
        })
        $('.btnImpact').css({
            display: 'none'
        })
        $('.btnRebel').css({
            display: 'none'
        })
        var strDataPopupName = $(this).attr(settings.objModalDataAttr);


        //Fade In Modal Pop Up
        $(".overlay, #" + strDataPopupName).fadeIn();

    }
});

//On clicking the modal background
$(settings.objModalCloseBtn).bind("click", function () {
    $(".modal").fadeOut();
});
var k = 0;
var spoilers = $(".ingredient");
//spoilers.each(function () {
//    var spoiler = $(this);
//    spoiler.find(".infoHeader").click(function () {
//
//        //        spoiler.find(".info").slideToggle("slow");
//        if ($(this).hasClass('headerIngredient')) {
//            spoiler.find("img").css({
//                display: 'none'
//            })
//            $(this).removeClass("headerIngredient").addClass("h1");
//            spoiler.find(".ingredientInfo").slideToggle("slow");
//
//
//        } else {
//            $(this).removeClass("h1").addClass("headerIngredient");
//            spoiler.find(".ingredientInfo").slideToggle("slow");
//            spoiler.find("img").css({
//                display: 'block'
//            })
//        }
//
//
//
//    });
//});
