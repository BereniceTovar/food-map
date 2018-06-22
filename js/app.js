//Función que muestra splash inicial y segunda página
function splash(param) {
  var time = param;
  setTimeout(function () {
  $('#splashscreen').hide();
  $('#map').css('display', 'block');
  $('#main').css('display', 'block');
  $('.int-section').css('display', 'block');
  }, time);
}

var restaurants = [
  {
    name: 'bostonMarket',
    restaurant: true,
    coffeshop: false,
    cheap: false,
    fastFood: false,
    healthyFood: true
  },
  
  {
    name: 'chaiChop',
    restaurant: false,
    coffeshop: true,
    cheap: true,
    fastFood: false,
    healthyFood: true
  },
  
  {
    name: 'cafeChaiRosas',
    restaurant: false,
    coffeshop: true,
    cheap: true,
    fastFood: false,
    healthyFood: true
  },
  
  {
    name: 'pastesDulceYsalado',
    restaurant: false,
    coffeshop: false,
    cheap: true,
    fastFood: true,
    healthyFood: false
  },
  
  {
    name: 'cocinaLasRosas', 
    restaurant: true,
    coffeshop: false,
    cheap: true,
    fastFood: false,
    healthyFood: true
  },
  
  {
    name: 'lasFabulosasPapas', 
    restaurant: true,
    coffeshop: false,
    cheap: false,
    fastFood: true,
    healthyFood: false
  },
  
  {
    name: 'tooginosPizza',
    restaurant: true,
    coffeshop: false,
    cheap: false,
    fastFood: true,
    healthyFood: false
  },
  
  {
    name: 'laCocinaDeLulu',
    restaurant: true,
    coffeshop: false,
    cheap: true,
    fastFood: false,
    healthyFood: true
  },
  
  {
    name: 'laSolovina',
    restaurant: true,
    coffeshop: false,
    cheap: false,
    fastFood: false,
    healthyFood: true
  },
  
  {
    name: 'laCiudadDeLosAlmuerzos',
    restaurant: true,
    coffeshop: false,
    cheap: false,
    fastFood: false,
    healthyFood: true
  },
  
  {
    name: 'haciendaCanelos',
    restaurant: true,
    coffeshop: false,
    cheap: false,
    fastFood: false,
    healthyFood: false
  },
        
  {
    name: 'bonSalads', 
    restaurant: false,
    coffeshop: false,
    cheap: true,
    fastFood: false,
    healthyFood: true
  }

];

console.log(restaurants[0].name);

for(var i = 0; i<restaurants.length; i++)
var allRestaurants = 


      
      //API Google
      
      var map;
      var infowindow;

      function initMap() {
        var zapopan = {lat: 20.6574418, lng: -103.3984133};

        map = new google.maps.Map(document.getElementById('map'), {
          center: zapopan,
          zoom: 15
        });

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: zapopan,
          radius: 500,
          type: ['restaurant']
        }, callback);
      }

      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      }

      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }

