var pies = $('.top-pie');
var columns = $('.top-column');

var title_top_buyed_products = " Top Buyed Products";
var top_buyed_products_names = ['reel 1', 'reel 2', 'rod 1', 'P-TALICA', 'Penn Spinfisher','Daiwa moulinet'];
var top_buyed_products_values = [
  ['reel 1', 29.9, false],
  ['reel 2', 71.5, false],
  ['rod 1', 106.4, false],
  ['P-TALICA', 129.2, true,true],
  ['Penn Spinfisher', 144.0, false],
  ['Daiwa moulinet', 176.0, false]
];
var title_top_viewed_products = " Top Viewed Products";
var top_viewed_products_names = ['reel 1', 'reel 2', 'rod 1', 'P-TALICA', 'Penn Spinfisher','Daiwa moulinet'];
var top_viewed_products_values = [
  ['reel 1', 29.9, false],
  ['reel 2', 71.5, false],
  ['rod 1', 106.4, false],
  ['P-TALICA', 129.2, true,true],
  ['Penn Spinfisher', 144.0, false],
  ['Daiwa moulinet', 176.0, false]
];
var title_top_favorite_products = " Top Favorites Products";
var top_favorite_products_names = ['reel 1', 'reel 2', 'rod 1', 'P-TALICA', 'Penn Spinfisher','Daiwa moulinet'];
var top_favorite_products_values = [
  ['reel 1', 29.9, false],
  ['reel 2', 71.5, false],
  ['rod 1', 106.4, false],
  ['P-TALICA', 129.2, true,true],
  ['Penn Spinfisher', 144.0, false],
  ['Daiwa moulinet', 176.0, false]
];

var title_top_rating_products = " Top Rating Products";
var top_rating_products_names = ['reel 1', 'reel 2', 'rod 1', 'P-TALICA', 'Penn Spinfisher','Daiwa moulinet'];
var top_rating_products_values = [
  ['reel 1', 29.9, false],
  ['reel 2', 71.5, false],
  ['rod 1', 106.4, false],
  ['P-TALICA', 129.2, true,true],
  ['Penn Spinfisher', 144.0, false],
  ['Daiwa moulinet', 176.0, false]
];

var title_top_users_buyed = " Top Users Buyed";
var top_users_buyed_names = ['Ahmed', 'Mohamed', 'Ashraf', 'Taher', 'Refeet','Moaz'];
var top_users_buyed_values = [
  ['Ahmed', 50, false],
  ['Mohamed', 71, false],
  ['Ashraf', 100, false],
  ['Taher', 350, true,true],
  ['Refeet', 244, false],
  ['Moaz', 176, false]
];

var title_top_users_have_favorites = "Top Users Have Favorites";
var top_users_have_favorites_names = ['Ahmed', 'Mohamed', 'Ashraf', 'Taher', 'Refeet','Moaz'];
var top_users_have_favorites_values = [
  ['Ahmed', 50, false],
  ['Mohamed', 71, false],
  ['Ashraf', 100, false],
  ['Taher', 350, true,true],
  ['Refeet', 244, false],
  ['Moaz', 176, false]
];

var title_top_users_make_good_rating = "Top Users Make Good Rating";
var top_users_make_good_rating_names = ['Ahmed', 'Mohamed', 'Ashraf', 'Taher', 'Refeet','Moaz'];
var top_users_make_good_rating_values = [
  ['Ahmed', 50, false],
  ['Mohamed', 71, false],
  ['Ashraf', 100, false],
  ['Taher', 350, true,true],
  ['Refeet', 244, false],
  ['Moaz', 176, false]
];

var title_top_users_make_bad_rating = "Top Users Make Bade RATING";
var top_users_make_bad_rating_names = ['Ahmed', 'Mohamed', 'Ashraf', 'Taher', 'Refeet','Moaz'];
var top_users_make_bad_rating_values = [
  ['Ahmed', 50, false],
  ['Mohamed', 71, false],
  ['Ashraf', 100, false],
  ['Taher', 350, true,true],
  ['Refeet', 244, false],
  ['Moaz', 176, false]
];

var title_least_users_buyed = "Least Users Buyed";
var least_users_buyed_names = ['Ahmed', 'Mohamed', 'Ashraf', 'Taher', 'Refeet','Moaz'];
var least_users_buyed_values = [
  ['Ahmed', 50, false],
  ['Mohamed', 71, false],
  ['Ashraf', 100, false],
  ['Taher', 350, true,true],
  ['Refeet', 244, false],
  ['Moaz', 176, false]
];

var title_least_buyed_products = "Least Buyed Products";
var least_buyed_products_names = ['reel 1', 'reel 2', 'rod 1', 'P-TALICA', 'Penn Spinfisher','Daiwa moulinet'];
var least_buyed_products_values = [
  ['reel 1', 29.9, false],
  ['reel 2', 71.5, false],
  ['rod 1', 106.4, false],
  ['P-TALICA', 129.2, true,true],
  ['Penn Spinfisher', 144.0, false],
  ['Daiwa moulinet', 176.0, false]
];

var title_least_viewed_products = "Least Viewed Products";
var least_viewed_products_names = ['reel 1', 'reel 2', 'rod 1', 'P-TALICA', 'Penn Spinfisher','Daiwa moulinet'];
var least_viewed_products_values = [
  ['reel 1', 29.9, false],
  ['reel 2', 71.5, false],
  ['rod 1', 106.4, false],
  ['P-TALICA', 129.2, true,true],
  ['Penn Spinfisher', 144.0, false],
  ['Daiwa moulinet', 176.0, false]
];

var title_least_rating_products = "Least Rating Products";
var least_rating_products_names = ['reel 1', 'reel 2', 'rod 1', 'P-TALICA', 'Penn Spinfisher','Daiwa moulinet'];
var least_rating_products_values = [
  ['reel 1', 29.9, false],
  ['reel 2', 71.5, false],
  ['rod 1', 106.4, false],
  ['P-TALICA', 129.2, true,true],
  ['Penn Spinfisher', 144.0, false],
  ['Daiwa moulinet', 176.0, false]
];

var titles=[title_top_buyed_products,title_top_viewed_products,title_top_favorite_products,
            title_top_rating_products, title_top_users_buyed, title_top_users_have_favorites,
            title_top_users_make_good_rating, title_top_users_make_bad_rating,
            title_least_users_buyed, title_least_buyed_products,
            title_least_viewed_products,title_least_rating_products];

var xAxises=[top_buyed_products_names,top_viewed_products_names,top_favorite_products_names,
            top_rating_products_names, top_users_buyed_names, top_users_have_favorites_names,
            top_users_make_good_rating_names, top_users_make_bad_rating_names,
            least_users_buyed_names, least_buyed_products_names,
            least_viewed_products_names, least_rating_products_names];

var values=[top_buyed_products_values,top_viewed_products_values,top_favorite_products_values,
            top_rating_products_values, top_users_buyed_values,top_users_have_favorites_values,
            top_users_make_good_rating_values, top_users_make_bad_rating_values,
            least_users_buyed_values, least_buyed_products_values,
            least_viewed_products_values, least_rating_products_values];

/** top products **/
  /** top  products pie **/
  for(var i=0; i<pies.length; i++)
  {
    Highcharts.chart( {
      chart: {
        renderTo:pies[i],
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      },
      xAxis: {
        categories: xAxises[i],
      },
      title: {
        text: titles[i],
      },

      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        }
      },

      series: [{
        type: 'pie',
        keys: ['name', 'y', 'selected', 'sliced'],
        data: values[i],
        showInLegend: true
      }]
    });

  }

  /*** end of top products pie **/

  /** begin of top products column **/
  for(var i=0; i<columns.length; i++)
  {
    Highcharts.chart( {
      chart: {
        renderTo:columns[i],
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      },
      xAxis: {
        categories: xAxises[i],
      },
      title: {
        text: titles[i],
      },

      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        }
      },

      series: [{
        type: 'column',
        keys: ['name', 'y', 'selected', 'sliced'],
        data: values[i],
        showInLegend: true
      }]
    });

  }

  /** end of top products column **/
/*** end of top products **/
