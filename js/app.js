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
    name: 'Boston Market',
    restaurant: true,
    coffeshop: false,
    cheap: false,
    fastFood: false,
    healthyFood: true
  },
  
  {
    name: 'Chai Chop',
    restaurant: false,
    coffeshop: true,
    cheap: true,
    fastFood: false,
    healthyFood: true
  },
  
  {
    name: 'Pastes Dulce Y Salado',
    restaurant: false,
    coffeshop: false,
    cheap: true,
    fastFood: true,
    healthyFood: false
  },
    
  {
    name: 'Las Fabulosas Papas', 
    restaurant: true,
    coffeshop: false,
    cheap: false,
    fastFood: true,
    healthyFood: false
  },
  
  {
    name: 'Tooginos Pizza',
    restaurant: true,
    coffeshop: false,
    cheap: false,
    fastFood: true,
    healthyFood: false,
  },
  
  {
    name: 'La Cocina De Lulu',
    restaurant: true,
    coffeshop: false,
    cheap: true,
    fastFood: false,
    healthyFood: true
  },
  
  {
    name: 'La Solovina',
    restaurant: true,
    coffeshop: false,
    cheap: false,
    fastFood: false,
    healthyFood: true
  },
  
  {
    name: 'La Ciudad De Los Almuerzos',
    restaurant: true,
    coffeshop: false,
    cheap: false,
    fastFood: false,
    healthyFood: true
  },
  
  {
    name: 'Hacienda Canelos',
    restaurant: true,
    coffeshop: false,
    cheap: false,
    fastFood: false,
    healthyFood: false
  },
        
  {
    name: 'Bon Salads', 
    restaurant: false,
    coffeshop: false,
    cheap: true,
    fastFood: false,
    healthyFood: true
  }
];

//Función para obtener a los restaurantes
$('#restaurants').click(function(){
  var containerInfo = document.getElementById('print-info');
  containerInfo.innerHTML = "";
  for(var i = 0; i < restaurants.length; i++){
      var isRestaurant = restaurants[i].restaurant;
      //console.log(isRestaurant)
      if(isRestaurant == true){
        var nameRestaurants = restaurants[i].name; //nombreId
        restaurants[i].id = i;
        //console.log(nameRestaurants);
        //Div que contiene el nuevo elemento
        var newCont = document.createElement('div');//id rest

        //Nodo que contiene a nuevos elementos
        var namesRestaurants = document.createTextNode(nameRestaurants); 

        //Contenedor del nodo
        var elementContainer = document.createElement('a');
        elementContainer.setAttribute('href', "#"+i);
        elementContainer.setAttribute('data-toggle', 'modal');
        elementContainer.setAttribute('data-target', '#modal1');
        //elementContainer.setAttribute(attr2);

        elementContainer.appendChild(namesRestaurants);
        newCont.appendChild(elementContainer);
        containerInfo.appendChild(newCont);   
        
        newCont.id = restaurants[i].id;
    }
  }
});

//Función para obtener a las cafeterias
$('#coffe-shops').click(function(){
  var containerInfo = document.getElementById('print-info');
  containerInfo.innerHTML = "";
  for(var i = 0; i < restaurants.length; i++){
      var isCoffeShop = restaurants[i].coffeshop;
      //console.log(isCoffeShop)
      if(isCoffeShop == true){
        var nameCoffeShop = restaurants[i].name; //nombreId
        //console.log(nameCoffeShop);
        //Div que contiene el nuevo elemento
        var newCont = document.createElement('div');//id rest

        //Nodo que contiene a nuevos elementos
        var namesCoffeShop = document.createTextNode(nameCoffeShop); 

        //Contenedor del nodo
        var elementContainer = document.createElement('a');

        elementContainer.appendChild(namesCoffeShop);
        newCont.appendChild(elementContainer);
        containerInfo.appendChild(newCont);   
    }
    
  }
});

//Función para obtener a la comida rapida
$('#fast-food').click(function(){
  var containerInfo = document.getElementById('print-info');
  containerInfo.innerHTML = "";
  for(var i = 0; i < restaurants.length; i++){
      var isFastFood = restaurants[i].fastFood;
      
      if(isFastFood == true){
        var nameFastFood = restaurants[i].name; //nombreId
        
        //Div que contiene el nuevo elemento
        var newCont = document.createElement('div');//id rest

        //Nodo que contiene a nuevos elementos
        var namesFastFood = document.createTextNode(nameFastFood); 

        //Contenedor del nodo
        var elementContainer = document.createElement('a');

        elementContainer.appendChild(namesFastFood);
        newCont.appendChild(elementContainer);
        containerInfo.appendChild(newCont);   
    }
    
  }
});

//Función para obtener a la comida saludable
$('#healthy-food').click(function(){
  var containerInfo = document.getElementById('print-info');
  containerInfo.innerHTML = "";
  for(var i = 0; i < restaurants.length; i++){
      var isHealthyFood = restaurants[i].healthyFood;
      
      if(isHealthyFood == true){
        var nameHealthyFood = restaurants[i].name; //nombreId
        
        //Div que contiene el nuevo elemento
        var newCont = document.createElement('div');//id rest

        //Nodo que contiene a nuevos elementos
        var namesHealthyFood = document.createTextNode(nameHealthyFood); 

        //Contenedor del nodo
        var elementContainer = document.createElement('a');

        elementContainer.appendChild(namesHealthyFood);
        newCont.appendChild(elementContainer);
        containerInfo.appendChild(newCont);   
    }
    
  }
});

//Función para obtener a la comida más económica
$('#cheap').click(function(){
  var containerInfo = document.getElementById('print-info');
  containerInfo.innerHTML = "";
  for(var i = 0; i < restaurants.length; i++){
      var isCheap = restaurants[i].cheap;
      
      if(isCheap == true){
        var nameCheap = restaurants[i].name; //nombreId
        
        //Div que contiene el nuevo elemento
        var newCont = document.createElement('div');//id rest

        //Nodo que contiene a nuevos elementos
        var namesCheap = document.createTextNode(nameCheap); 

        //Contenedor del nodo
        var elementContainer = document.createElement('a');

        elementContainer.appendChild(namesCheap);
        newCont.appendChild(elementContainer);
        containerInfo.appendChild(newCont);   
    }
    
  }
});
      
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

