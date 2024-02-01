var count = 0;

$('.change').on('click', function(){
    count++;
    if(count % 2 == 1){
        $('.change').text("Lightmode");
        $('nav').addClass('dark');
    } else {
        $('.change').text("Darkmode");
        $('nav').removeClass('dark');
    }
})