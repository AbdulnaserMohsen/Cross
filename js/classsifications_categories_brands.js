$(document).ready(function(){

  /** classification by category **/
  $(document).on("click",".classification button",function(event){
    event.preventDefault();
    if($(this).attr("data-classification") == "All")
    {
      $(".row .col[data-classification]").hide("slow");
      $(".row .col[data-classification]").show("slow");
      $(".classification button").removeClass("active");
      $(this).addClass("active");
    }
    else
    {
      $(".row .col:not([data-classification='"+$(this).attr("data-classification")+"'])").hide("slow");
      $(".row .col[data-classification='"+$(this).attr("data-classification")+"']").show("fast");
      $(this).off("click");
      $(".classification button").removeClass("active");
      $(this).addClass("active");
    }
  });

});
