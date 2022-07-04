$(document).ready(function(){
    $('#submit').click(function(e){
        $('#modal-wrap').fadeIn('slow');
        $('body').css("opacity","0.9");
        e.preventDefault();

    });
    $('.close').click(function(e){
        $('#modal-wrap').fadeOut('slow');
        e.preventDefault();
    });
    $('#sb').click(function(e){
        $('.form_submit-confirmation').fadeIn('slow');
        $('#modal-wrap').fadeOut;
        e.preventDefault();
       
    });
    $('#formResest').click(function(e){
        $('.form_submit-confirmation').css("display","none");
        e.preventDefault();
       
    });

})