// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal]
var btn00 = document.getElementById("dot11");
var btn11 = document.getElementById("dot12");
var btn22 = document.getElementById("dot13");
var btn33 = document.getElementById("dot14");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeBtn")[0];

// When the user clicks on the button, open the modal 
btn00.onclick = function () {
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
        padding: '28% 9vw'
    });
}
btn11.onclick = function () {
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
    $('.dontGiveUp').css({
        display: 'none'
    })
    $('.modal').css({
        padding: '28% 9vw'
    })
     $('.closeBtn').css({
        top: '33vw'
    })
     $('.modalImg').css({
        backgroundImage: 'none',
    });
}

btn22.onclick = function () {
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
        padding: '14% 9vw'
    });
    
}
btn33.onclick = function () {
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
        padding: '14% 9vw'
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
