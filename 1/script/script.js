jQuery(document).ready(function(){
    //nav
    $('.menu>li').mouseover(function(){        
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    //img
    var slideCount = $('.imgslide').length;
    var currentIndex = 0;
    var slidePosition;
    
    setInterval(function(){
        if(currentIndex < slideCount - 1){
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        slidePosition = currentIndex * (-800) + "px";
        $('.imgbanner').animate({left:slidePosition},400);
    }, 3000);
    

    //tab
    $('.tabmenu>li>a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
        return false;
    });

    //modal
    $('.notice>ul>li:first-child').click(function(){
        $('.modal').addClass('active');
    });
    $('.modal_x').click(function(){
        $('.modal').removeClass('active');
    });
});