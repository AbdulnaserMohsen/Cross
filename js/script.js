$(document).ready(function(){

  //cart dropdown
    //on click cart dropdown
    $(document).on("click","#cart-dropdown",function(){
      event.preventDefault();
      $(".cart-dropdown").toggleClass("invisible");
    });
    //on pressing escape on keyboard and the cart dropdown is visable
    $(document).keydown(function(e){
      if(e.keyCode == 27 && !$(".cart-dropdown").hasClass("invisible"))
      {
        $(".cart-dropdown").addClass("invisible");
      }
    });
    //on clicking anywhere execpt cart down button or cart down area
    $(document).on("click",function(e){
      if($(e.target).closest('#cart-dropdown').length){return;}
      else if(!$(e.target).closest('.cart-dropdown').length && !$(".cart-dropdown").hasClass("invisible"))
      {
        $(".cart-dropdown").addClass("invisible");
      }
    });

  //Activte Tooltip
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });



});
