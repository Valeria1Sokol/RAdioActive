var open = $(".main2");
var widthW = window.innerWidth;
console.log(widthW);
if (widthW >= '1024') {
    open.each(function () {
        var openB = $(this);
        var k = 1;
        openB.find(".marie .touch").click(function () {
            if (k == 1) {
                if (widthW <= '1024') {
                    $('.about_box').animate({
                        padding: '3.1vw 5.4vw 18.1vw 6.5vw',
                    }, 1000);
                } else {
                    $('.about_box').animate({
                        top: '0vw',
                        padding: '3.1vw 5.4vw 7.1vw 6.5vw',
                    }, 1000);
                }
                $('.about_box').css({
                    zIndex: '3',
                    borderRadius: '6.5vw 0 0 0'
                });
                $('.pierre').css({
                    zIndex: '1'
                });
                $('.shadow').animate({
                    opacity: '0.8'
                });
                $('.shadowGreen').animate({
                    opacity: '0.8'
                });
                $(".slide-toggled-element").slideToggle("slow");
                $('.about_p').css({
                    display: 'none'
                })
                k = 0;
            } else if (k == 0) {

                if (widthW <= '1024') {
                    $('.about_box').animate({
                        padding: '3.1vw 1.4vw 3.1vw 15.5vw',
                        zIndex: '1'
                    }, 500);
                } else {
                    $('.about_box').animate({
                        top: '0vw',
                        padding: '3.1vw 2.4vw 3.1vw 11.5vw',
                        zIndex: '1'
                    }, 500);
                }
                $('.about_box').css({
                    borderRadius: '6.5vw 0 0 6.5vw'
                });
                $('.shadow').animate({
                    opacity: '0'
                });
                $('.shadowGreen').animate({
                    opacity: '0'
                });
                $('.pierre').css({
                    zIndex: '3'
                });
                $(".slide-toggled-element").slideToggle("slow");
                $('.about_p').css({
                    display: 'block'
                })
                k = 1;
            }
        });

        openB.find(".pierre .touchP").click(function () {
            if (k == 1) {

                if (widthW <= '1024') {
                    $('.about_box').animate({
                        padding: '3.1vw 5.4vw 23.1vw 6.5vw',
                    }, 1000);
                } else {
                    $('.about_box').animate({
                        top: '0vw',
                        padding: '3.1vw 5.4vw 10.1vw 6.5vw',
                    }, 1000);
                }
                $('.about_box').css({
                    zIndex: '3',
                    borderRadius: '6.5vw 0 0 0',
                });
                $('.marie').css({
                    zIndex: '2'
                });
                $('.shadow').animate({
                    opacity: '0.8'
                });
                $('.shadowGreen2').animate({
                    opacity: '0.8'
                });

                $(".slide-toggled-element2").slideToggle("slow");
                $('.about_p').css({
                    display: 'none'
                })
                $('.about_Maria').css({
                    display: 'none'
                });
                $('.about_Pierre').css({
                    display: 'flex'
                })
                k = 0;
            } else if (k == 0) {

                if (widthW <= '1024') {
                    $('.about_box').animate({
                        padding: '3.1vw 1.4vw 3.1vw 15.5vw',
                        zIndex: '1'
                    }, 500);
                } else {
                    $('.about_box').animate({
                        top: '0vw',
                        padding: '3.1vw 2.4vw 3.1vw 11.5vw',
                        zIndex: '1'
                    }, 500);
                }
                $('.about_box').css({
                    borderRadius: '6.5vw 0 0 6.5vw'

                }, );
                $('.shadow').animate({
                    opacity: '0'
                });
                $('.shadowGreen2').animate({
                    opacity: '0'
                });
                $('.marie').css({
                    zIndex: '3'
                });
                $('.about_Maria').css({
                    display: 'flex'
                });
                $('.about_Pierre').css({
                    display: 'none'
                })
                $(".slide-toggled-element2").slideToggle("slow");
                $('.about_p').css({
                    display: 'block'
                })
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
            $('.about_box_m').css({
                zIndex: 2
            })
            if (k == 1) {
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
                k = 1;
            }
        });
        openB.find(".pierre .touchP").click(function () {
            if (k == 1) {
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
