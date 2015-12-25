/**
 * Created by aronthomas on 12/10/15.
 */
$(document).ready(function(){

    //$('container').hide().fadeIn(500)
    $('div.hidden').fadeIn(750).removeClass('hidden');
    console.log('hi');
    
    $(".download").on('click', function(event){
        event.preventDefault();
        window.location.href = 'https://www.dropbox.com/s/5iwsvq9j9fqmzo3/aron_resume.pdf?dl=0';
    });
});