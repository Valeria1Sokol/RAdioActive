// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn0 = document.getElementById("dot0");
var btn1 = document.getElementById("dot1");
var btn2 = document.getElementById("dot2");
var btn3 = document.getElementById("dot3");
var btn4 = document.getElementById("dot4");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeBtn")[0];

// When the user clicks on the button, open the modal 
btn0.onclick = function () {
    modal.style.display = "block";
    $('.main_box').css({
        display: 'flex'
    });
    $('.pay').css({
        display: 'none'
    });
    $('.challenge').css({
        display: 'none'
    });
    $('.cause').css({
        display: 'none'
    });
    $('.dontGiveUp').css({
        display: 'none'
    })
    $('.modal').css({
        padding: '28% 9vw 0'
    })
    $('.closeBtn').css({
        top: '32vw'
    })
    $('.modalImg').css({
        backgroundImage: 'none',
    });
    $('.modal').css({
        padding: '28% 9vw 0'
    });
}
btn1.onclick = function () {
    modal.style.display = "block";
    $('.main_box').css({
        display: 'none'
    });
    $('.pay').css({
        display: 'flex'
    });
    $('.challenge').css({
        display: 'none'
    });
    $('.cause').css({
        display: 'none'
    });
    $('.dontGiveUp').css({
        display: 'none'
    })
    $('.modal').css({
        padding: '28% 9vw 0'
    })
    $('.closeBtn').css({
        top: '33vw'
    })
    $('.modalImg').css({
        backgroundImage: 'none',
    });
}
btn2.onclick = function () {
    modal.style.display = "block";
    $('.main_box').css({
        display: 'none'
    });
    $('.pay').css({
        display: 'none'
    });
    $('.challenge').css({
        display: 'flex'
    });
    $('.cause').css({
        display: 'none'
    });
    $('.dontGiveUp').css({
        display: 'none'
    })
    $('.modal').css({
        padding: '14% 9vw 0'
    });
    $('.closeBtn').css({
        top: '19vw'
    })
    $('.modalImg').css({
        backgroundImage: 'none',
    });
}
btn3.onclick = function () {
    modal.style.display = "block";
    $('.main_box').css({
        display: 'none'
    });
    $('.pay').css({
        display: 'none'
    });
    $('.challenge').css({
        display: 'none'
    });
    $('.cause').css({
        display: 'flex'
    });
    $('.dontGiveUp').css({
        display: 'none'
    });
    $('.modalImg').css({
        backgroundImage: 'url(./img/behind_img_bottom1.png)',
        height: '50vw'
    });
    $('.closeBtn').css({
        top: '19vw'
    })
    $('.modal').css({
        padding: '14% 9vw 0'
    });

}
btn4.onclick = function () {
    modal.style.display = "block";
    $('.main_box').css({
        display: 'none'
    });
    $('.pay').css({
        display: 'none'
    });
    $('.challenge').css({
        display: 'none'
    });
    $('.cause').css({
        display: 'none'
    });
    $('.dontGiveUp').css({
        display: 'flex'
    });
    $('.modalImg').css({
        backgroundImage: 'url(./img/behind_img_bottom2.png)',
        height: '59vw'
    });
    $('.closeBtn').css({
        top: '19vw'
    })
    $('.modal').css({
        padding: '14% 9vw 0'
    });
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
