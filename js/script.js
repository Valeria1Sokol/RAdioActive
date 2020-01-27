var open = $(".main2");
var widthW = window.innerWidth;
var widthH = window.innerHeight;
console.log(widthH);
console.log(widthW);
if (widthW >= '1024') {
    open.each(function () {
        var openB = $(this);
        var k = 1;
        openB.find(".marie .touch").click(function () {
            if (k == 1) {
                $('.about_box_m').animate({
                    opacity: 1,
                }, 1000);
                $('.about_box_m').css({
                    zIndex: '3'
                })
                $('.about_box').animate({
                    opacity: 0
                }, 800)

                $('.pierre').css({
                    zIndex: '1'
                });
                $('.shadow').animate({
                    opacity: '0.8'
                });
                $('.shadowGreen').animate({
                    opacity: '0.8'
                });
                k = 0;
            } else if (k == 0) {
                $('.about_box_m').animate({
                    opacity: 0
                }, 800)
                $('.about_box_m').animate({
                    zIndex: 0
                }, 1000)
                $('.about_box').animate({
                    opacity: 1
                }, 800)
                $('.shadow').animate({
                    opacity: '0'
                });
                $('.shadowGreen').animate({
                    opacity: '0'
                });
                $('.pierre').css({
                    zIndex: '3'
                });
                k = 1;
            }
        });

        openB.find(".pierre .touchP").click(function () {
            if (k == 1) {
                $('.about_box_p').animate({
                    opacity: 1,
                }, 1000);
                $('.about_box_p').css({
                    zIndex: '3'
                })
                $('.about_box').animate({
                    opacity: 0
                }, 800)
                $('.marie').css({
                    zIndex: '2'
                });
                $('.shadow').animate({
                    opacity: '0.8'
                });
                $('.shadowGreen2').animate({
                    opacity: '0.8'
                });


                k = 0;
            } else if (k == 0) {


                $('.about_box_p').animate({
                    opacity: 0
                }, 800)
                $('.about_box_p').animate({
                    zIndex: 0
                }, 1000)
                $('.about_box').animate({
                    opacity: 1
                }, 800)

                $('.shadow').animate({
                    opacity: '0'
                });
                $('.shadowGreen2').animate({
                    opacity: '0'
                });
                $('.marie').css({
                    zIndex: '3'
                });


                k = 1;
            }
        });

    })
} else


if (widthW <= '1023') {
    open.each(function () {
        var openB = $(this);
        var k = 1;
        openB.find(".marie .touch").click(function () {

            if (k == 1) {
                $('footer').animate({
                    opacity: '0'
                }, 500);
                $('#menuToggle').animate({
                    opacity: '0'
                }, 500);
                $('.about_box_m').animate({
                    opacity: 1,
                }, 500);
                $('.about_box_m').css({
                    zIndex: '2'
                })
                $('.about_box').animate({
                    opacity: 0
                }, 800)

                $('.pierre').animate({
                    zIndex: '0'
                });
                $('.shadow').animate({
                    opacity: '0.8'
                });
                $('.shadowGreen').animate({
                    opacity: '0.8'
                });

                k = 0;
            } else if (k == 0) {
                $('.about_box_m').animate({
                    opacity: 0
                }, 500)
                $('.about_box_m').animate({
                    zIndex: 0
                }, 1000)
                $('.about_box').animate({
                    opacity: 1
                }, 500)
                $('.shadow').animate({
                    opacity: '0'
                });
                $('.shadowGreen').animate({
                    opacity: '0'
                });
                $('.pierre').animate({
                    zIndex: '2'
                });
                $('footer').animate({
                    opacity: '1'
                }, 500);
                $('#menuToggle').animate({
                    opacity: '1'
                }, 500);
                k = 1;
            }
        });
        openB.find(".pierre .touchP").click(function () {
            if (k == 1) {
                $('footer').animate({
                    opacity: '0'
                }, 500);
                $('#menuToggle').animate({
                    opacity: '0'
                }, 500);
                $('.about_box_p').animate({
                    opacity: 1
                }, 500)
                $('.about_box_p').css({
                    zIndex: 2
                })
                $('.about_box').animate({
                    opacity: 0
                }, 800)
                $('.marie').css({
                    zIndex: '0'
                });
                $('.shadow').animate({
                    opacity: '0.8'
                });
                $('.shadowGreen2').animate({
                    opacity: '0.8'
                });

                k = 0;
            } else if (k == 0) {

                $('.about_box_p').animate({
                    opacity: 0,
                }, 500)
                $('.about_box_p').animate({
                    zIndex: 0
                }, 1000)
                $('.about_box').animate({
                    opacity: 1
                }, 800)
                $('.shadow').animate({
                    opacity: '0'
                });
                $('.shadowGreen2').animate({
                    opacity: '0'
                });
                $('.marie').css({
                    zIndex: '2'
                });
                $('footer').animate({
                    opacity: '1'
                }, 500);
                $('#menuToggle').animate({
                    opacity: '1'
                }, 500);

                k = 1;
            }
        });

        $('#btnClose1').click(function () {
            $('.about_box_m').animate({
                opacity: 0
            }, 1000)
            $('.about_box').animate({
                opacity: 1
            }, 500)
            $('.shadow').animate({
                opacity: '0'
            });
            $('.shadowGreen').animate({
                opacity: '0'
            });
            $('.pierre').animate({
                zIndex: '2'
            });
            $('.about_box_m').animate({
                zIndex: '2'
            });
        });
        $('#btnClose2').click(function () {
            $('.about_box_p').animate({
                opacity: 0,
            }, 1000)
            $('.about_box_p').css({
                zIndex: 0
            })
            $('.about_box').animate({
                opacity: 1
            }, 800)
            $('.shadow').animate({
                opacity: '0'
            });
            $('.shadowGreen2').animate({
                opacity: '0'
            });
            $('.marie').css({
                zIndex: '2'
            });
        });
    });


}

