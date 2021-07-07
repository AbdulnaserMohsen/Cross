$(document).ready(function(){

  $(document).on("click","#checkout",function(e){

    var validates= new Array();
    $("#cart .needs-validation").each(function(index){
      e.preventDefault();
      e.stopPropagation();
      var form = $(this)[0];
      validates[index] = form.checkValidity();
      form.classList.add('was-validated');
      if($(".special-selector").val() == "")
      {
        $(".special-selector").next(".selectator_element").removeClass('is-valid').addClass('is-invalid');
      }
    });
    //console.log(validates);
    if(jQuery.inArray(false,validates) != -1)
    {
      //console.log($.inArray(false,validates));
      e.preventDefault();
      e.stopPropagation();
    }
    else
    {
      window.location.href = "file:///D:/laravel/cross%20world/checkout.html";
    }


  });

});
