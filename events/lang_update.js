$(document).ready(function(){

    /*
    $('#navbar-langs li').each(function(){
        console.log($(this).text());
    });
    */

    $('.navbar-lang').click(function() {
        $.cookie('user-lang', $(this).attr('id').split('-')[2]);
        location.reload();
    });

});
