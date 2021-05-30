$(document).ready(function(){
    $('.next').on('click', function(){
        var current = $('.active');
        var next = current.next();

        if(next.length)
        {
            current.removeClass('active').css('z-index', -10);
            next.addClass('active').css('z-index', 10);
        }  
    });


    $('.prev').on('click', function(){
        var current = $('.active');
        var prev = current.prev();

        if(prev.length)
        {
            current.removeClass('active').css('z-index', -10);
            prev.addClass('active').css('z-index', 10);
        }
        
    });
});