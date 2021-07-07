$(document).ready(function(){

  /*** general ajax ***/
  function getAJAX(url)
  {
    var results;
    $.ajax
      ({
        type: 'GET',
        url: url,
        dataType: 'json',
        data: {},
        async:false,
        success: function (data)
        {
          //console.log(data);
          results = data;
        },
        error:function(data)
        {
          console.log(data);
          results = data;
        }
      });
    return results;
  }

  /*** choosing language ***/
  var language= $("html").attr("lang"); //get language from html set lang="en" or lang ="ar" if you don't set it

  /*** countries ***/
  var conutriesURL = 'http://api.geonames.org/countryInfoJSON?q=&country=&lang='+language+'&username=abdulnaser_mohsen'; //url that get your conuntries
  var countries = getAJAX(conutriesURL); // the importance of async test without aync or aync is true
  //console.log(countries);
  //console.log(countries.geonames);
  //all these things changed
  $(countries.geonames).each(function(index,item){
    //console.log(item.countryName , item.geonameId);
    var selectOption = $("<option>")
    selectOption.attr("value",item.geonameId).append(item.countryName);
    $('.countryId').append(selectOption);
  });


  /** states **/
  $(document).on("change",".countryId",function(){
    $( "input[name='country']" ).val($(this).children(':selected').text());
    //console.log($('.stateId').eq($('.countryId').index($(this))));
    var stateElement = $('.stateId').eq($('.countryId').index($(this)));
    //$('.stateId option:not(option:first)').eq($('.countryId').index($(this))).remove();
    $('.stateId option:not(option:first)').remove(); // clear states
    $('.stateId').eq($('.countryId').index($(this))).addClass("is-invalid"); //make it invalid
    $('.cityId option:not(option:first)').remove(); // clear cities
    $('.cityId').eq($('.countryId').index($(this))).addClass("is-invalid"); //make it invalid

    var geonameid= $(this).val(); //get country id
    var statesURL = 'http://api.geonames.org/childrenJSON?lang='+language+'&geonameId='+geonameid+'&username=abdulnaser_mohsen'; //url that get your states

    var states = getAJAX(statesURL);
    //console.log(states);
    //console.log(states.geonames);

    $(states.geonames).each(function(index,item){
      //console.log(item.name , item.geonameId);
      var selectOption = $("<option>")
      selectOption.attr("value",item.geonameId).append(item.name);
      $(stateElement).append(selectOption);
      //$('.stateId').append(selectOption);
    });
  });

  /** cities **/
 $(document).on("change",".stateId",function(){
   $( "input[name='state']" ).val($(this).children(':selected').text());
   var cityElement = $('.cityId').eq($('.stateId').index($(this)));
   //$('.cityId option:not(option:first)').eq($('.stateId').index($(this))).remove();
   $('.cityId option:not(option:first)').remove(); // clear cities
   $('.cityId').eq($('.countryId').index($(this))).addClass("is-invalid"); //make it invalid

   var geonameid= $(this).val(); //get country id
   var citiesURL = 'http://api.geonames.org/childrenJSON?lang='+language+'&geonameId='+geonameid+'&username=abdulnaser_mohsen'; //url that get your cities

   var cities = getAJAX(citiesURL);
   //console.log(cities);
   //console.log(cities.geonames);

   $(cities.geonames).each(function(index,item){
     //console.log(item.name , item.geonameId);
     var selectOption = $("<option>")
     selectOption.attr("value",item.geonameId).append(item.name);
     $(cityElement).append(selectOption);
     //$('.cityId').append(selectOption);
   });
 });

  /*** get selected city ***/
   $(document).on("change",".cityId",function(){
     $( "input[name='city']" ).val($(this).children(':selected').text());
   });

 /** to be continue **/


});
