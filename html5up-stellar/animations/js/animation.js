
/*-----------------bounce------------------------------*/


$('.bounce').on('click', function(){
  console.log('e')

 $(this).addClass('bounceAnimate');

 setTimeout(function(){
  $('.bounce').removeClass("bounceAnimate");
  },1000)
})
