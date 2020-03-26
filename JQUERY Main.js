$(document).ready(function(){
    $('.target1').click(function(){
        $('.navigation ul .target').removeClass('active');
        $('.navigation ul .target1').addClass('active');
        $('.box1').animate({'left':'35%'},500);
        $('.box2').animate({'left':'100%'},500);
        $('.box3').animate({'left':'165%'},500);
    });

    $('.target2').click(function(){
        $('.navigation ul .target').removeClass('active');
        $('.navigation ul .target2').addClass('active');
        $('.box1').animate({'left':'-30%'},500);
        $('.box2').animate({'left':'35%'},500);
        $('.box3').animate({'left':'100%'},500);
    });

    $('.target3').click(function(){
        $('.navigation ul .target').removeClass('active');
        $('.navigation ul .target3').addClass('active');
        $('.box1').animate({'left':'-95%'},500);
        $('.box2').animate({'left':'-30%'},500);
        $('.box3').animate({'left':'35%'},500);
    });
});
