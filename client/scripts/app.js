/**
 * Created by aronthomas on 12/10/15.
 */
$(document).ready(function(){

    //$('container').hide().fadeIn(500)
    $('div.hidden').fadeIn(750).removeClass('hidden');
    


    //$(".sliding-middle-out").on('click', function(event){
    //    event.getElementsByClassName('container').fadeOut(750).addClass('hidden');
    //});

    $(".hamburger-menu").on('click', function(event){
        $(this).toggleClass('open');
        $(this).toggleClass('closed');
        $(this).children().toggleClass('open');
        $(this).children().toggleClass('closed');
        $('.mobile-nav').toggleClass('open');
        $('.banner-svg').toggleClass('open');
    });


    $('.png-im').on('mouseover', toggleHover);
    $('.png-hi').on('mouseover', toggleHover);
    $('.png-aron').on('mouseover', toggleHover);

    function toggleHover(){
        $(this).addClass('png-image-hover');
        $(this).on('mouseleave', function(){
            $(this).removeClass('png-image-hover');
        })
    }

    function addHover(){
        var num = Math.floor(Math.random()*3);
        console.log(num);
        var classArray=['.png-im', '.png-hi', '.png-aron'];
        $(classArray[num]).addClass('png-image-hover').delay(1000)
        setTimeout(function(){
            $(classArray[num]).removeClass('png-image-hover')
        }, 4000)
    }
    setInterval(addHover, 3000);

    addHover();

    $('.scroll-button').scrollTop(300);
    setTimeout(function(){
        $('.scroll-button').fadeOut(1000).delay(1000, function(){
            $(this).addClass('hidden');
        })
    }, 2000);
});