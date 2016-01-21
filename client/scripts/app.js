/**
 * Created by aronthomas on 12/10/15.
 */
$(document).ready(function(){

    //$('container').hide().fadeIn(500)
    $('div.hidden').fadeIn(750).removeClass('hidden');
    
    $(".download").on('click', function(event){
        event.preventDefault();
        window.location.href = 'https://www.dropbox.com/s/7klk97kcokkyine/aron_resume_january_2016.pdf?dl=0';
    });

    $(".sliding-middle-out").on('click', function(event){
        event.getElementsByClassName('container').fadeOut(750).addClass('hidden');
    })
});