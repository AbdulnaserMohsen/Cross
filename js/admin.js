$("#menu-toggle").click(function(e) {
   e.preventDefault();
   $("#wrapper").toggleClass("toggled");
});
$("#menu-toggle-2").click(function(e) {
   e.preventDefault();
   $("#wrapper").toggleClass("toggled-2");
   $('#menu ul').hide();
});

function initMenu() {
   $('#menu ul').hide();
   $('#menu ul').children('.current').parent().show();
   //$('#menu ul:first').show();
   $('#menu li a').click
   (
		function()
		{
			var checkElement = $(this).next();
			if ((checkElement.is('ul')) && (checkElement.is(':visible')))
			{
				return false;
			}
			if ((checkElement.is('ul')) && (!checkElement.is(':visible')))
			{
				$('#menu ul:visible').slideUp('normal');
				checkElement.slideDown('normal');
				return false;
			}
		}
   );
}
$(document).ready(function() {

  /** sidebar ***/
  initMenu();


   /*** dashboard cards ***/
   $('.counter-value').each(function(){
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      },{
          duration: 3500,
          easing: 'swing',
          step: function (now){
              $(this).text(Math.ceil(now));
          }
      });
  });


  /** table filter **/
  $("#table-filter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
      $("#table-body tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
  });






});
