 $(document).ready( function() 
 {
  $('#maindiv').hide();
 $(window).on('load',function()
{ console.log("loaded");
preloaderFadeOutTime = 1000;
function hidePreloader()
{
  var preloader = $('.spinner');
  preloader.delay(5000).fadeOut(preloaderFadeOutTime);  
$('#maindiv').delay(1000).show(0); 
 
}
        hidePreloader();
  
    }); });

  
// slide show 
$(document).ready( function ()
{
$("#slider > div:gt(0)").hide();
setInterval(function() {
  $('#slider > div:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('#slider');
}, 4500);


$(window).scroll(function()
{      var i;
       var wid = $('html').width();
      var posslider = $('#slider').offset().top;
    var posmenu = $('#menu').offset().top;
    if(posmenu == 0) i=0;
    /* scroll function 
      if(posslider > 0  && posslider < 90)
{       i++;            
  $('html,body').animate({
              scrollTop : $('#slider').offset().top
             },1000);
      
}*/

    var Pos = $('#about').offset().top;
        var Pos1 = $('#subsystems').offset().top;
      var Pos2 = [];
      var Posbg = $('#slider').offset().top;
      //var Pos2 = $('#columns').offset().top;
    var habout = $('#about').height();
        var i;
    var topOfWindow = $(window).scrollTop();
        var Pos3 = $('#contactus').offset().top;
        //animation for subsystems
        for(i=0;i<6;i++)
        {      
            Pos2[i] = $('#columns').find(".sub").eq(i).offset().top;
          if(i < 3 )
          { if(Pos2 [i] < topOfWindow + 500)
            {
              $('#columns').find(".sub").eq(i).addClass("slideup");
            }
          }
          else
          {
           if(Pos2 [i] < topOfWindow + 520)
            {
              $('#columns').find(".sub").eq(i).addClass("slideup");
            } 
          }
      /*else
      {
        $('#columns').find("div").eq(i).removeClass("slideup");
      }*/
      } 

        if(Pos3 < topOfWindow + 400)
        {
                $('#contactus a').addClass('slidein');
        } 
        else
        {
               $('#contactus a').removeClass('slidein');
        }

          //animation for menu
  /*        if(wid > 768)
          {

      if(Posbg < topOfWindow) {
        $('#menu').addClass("transparent");
        $('#list').addClass("transparent");
      }
       
       else if(Pos > topOfWindow + 400)
       {
        $('#menu').removeClass("transparent");
        $('#list').removeClass("transparent");
       }

       if(Pos + habout < topOfWindow+400)
       {
        $('#menu').removeClass("transparent");
        $('#list').removeClass("transparent");
       }
       }
       else
       {
          $('#menu').removeClass("transparent");
        $('#list').removeClass("transparent");
       }
    */
  });
 
  $(".link").click(function(){
    var x = $(".sub").width();
        
        $(".inside").toggleClass('slidertl');
});
      
  
});
$(document).ready( function()
{ 


   $('#buttonmenu').click(function(e)
{
  $('#nav').slideToggle();
  e.preventDefault();
});
   var x = $('body').width();

   $('#l1').click( function(e) {
    e.preventDefault();
   
    $('html,body').animate(
    {
      scrollTop: $('#goto1').offset().top + 25
    }, 2500 - x);
});
$('#l2').click( function(e) {
    e.preventDefault();
    //console.log('2');
    $('html,body').animate(
    {
      scrollTop: $('#goto2').offset().top 
    }, 2500 - x);
});
 $('#l3').click( function(e) {
    e.preventDefault();
    
    $('html,body').animate(
    {
      scrollTop: $('#goto3').offset().top 
    },2500 - x);
});
$('#l4').click( function(e) {
    e.preventDefault();
 var y=0;
 var x = $('body').width();
    if(x> 534.54) 
      { y = 0;
        console.log("width > 640")  
        console.log(x)
      }
    else{ y=120;
       console.log(x)
      //console.log("width < 640")
   }
    console.log(y)
    $('html,body').animate(
   {
      scrollTop: $('#goto4').offset().top - y
    }, 2500 - x);
});
$('#l5').click( function(e) {
    e.preventDefault();
    console.log('2');
    $('html,body').animate(
    {
      scrollTop: $('#goto5').offset().top
    }, 2500 - x);
});


});

