/*mix it up for skill section radial progress bar*/

$(document).ready(function(){
    var mixer = mixitup('.container')
});
/*stecky menu  */
$(".js--service-section").waypoint(
    function(direction)
      {if (direction == "down"){
         $("nav").addClass("sticky");
       
        } else{
            $("nav").removeClass(".ticky");
    }
});