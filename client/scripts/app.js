/**
 * Created by aronthomas on 12/10/15.
 */
$(document).ready(function(){
    console.log('hi');

    $(".download").on('click', function(event){
        event.preventDefault();
        window.location.href = 'https://www.dropbox.com/s/bqdclw8rsg15i20/resume.pdf?dl=0'
    })
});