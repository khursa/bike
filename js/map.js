/* GOOGLE MAP */
var map;
function initMap() {
    markerPopup = '<a href="#contacts__scrollup-1"><div class="marker__img"></div><p class="marker__info">Полтавська обл., Котелевський район, с.Шевченкове</p></a>',
    pointerPopup = '<a href="https://uk.wikipedia.org/wiki/%D0%90%D0%B2%D1%82%D0%BE%D1%88%D0%BB%D1%8F%D1%85_%D0%A2_1707" target="blank"><div class="pointer__img"></div><p class="pointer__info">Заклад розташований в<br>7 км від автошляху Т 1707</p></a>',
    map = new google.maps.Map(document.querySelector('#map'), {
        center: {lat: 55.3347777, lng: -100.5803696},
        zoom: 6,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        styles: [
          {
               "featureType": "water",
               "stylers": [
                   {
                       "saturation": 43
                   },
                   {
                       "lightness": -11
                   },
                   {
                       "hue": "#0088ff"
                   }
               ]
           },
           {
               "featureType": "road",
               "elementType": "geometry.fill",
               "stylers": [
                   {
                       "hue": "#ff0000"
                   },
                   {
                       "saturation": -100
                   },
                   {
                       "lightness": 99
                   }
               ]
           },
           {
               "featureType": "road",
               "elementType": "geometry.stroke",
               "stylers": [
                   {
                       "color": "#808080"
                   },
                   {
                       "lightness": 54
                   }
               ]
           },
           {
               "featureType": "landscape.man_made",
               "elementType": "geometry.fill",
               "stylers": [
                   {
                       "color": "#ece2d9"
                   }
               ]
           },
           {
               "featureType": "poi.park",
               "elementType": "geometry.fill",
               "stylers": [
                   {
                       "color": "#ccdca1"
                   }
               ]
           },
           {
               "featureType": "road",
               "elementType": "labels.text.fill",
               "stylers": [
                   {
                       "color": "#767676"
                   }
               ]
           },
           {
               "featureType": "road",
               "elementType": "labels.text.stroke",
               "stylers": [
                   {
                       "color": "#ffffff"
                   }
               ]
           },
           {
               "featureType": "poi",
               "stylers": [
                   {
                       "visibility": "off"
                   }
               ]
           },
           {
               "featureType": "landscape.natural",
               "elementType": "geometry.fill",
               "stylers": [
                   {
                       "visibility": "on"
                   },
                   {
                       "color": "#b8cb93"
                   }
               ]
           },
           {
               "featureType": "poi.park",
               "stylers": [
                   {
                       "visibility": "on"
                   }
               ]
           },
           {
               "featureType": "poi.sports_complex",
               "stylers": [
                   {
                       "visibility": "on"
                   }
               ]
           },
           {
               "featureType": "poi.medical",
               "stylers": [
                   {
                       "visibility": "on"
                   }
               ]
           },
           {
               "featureType": "poi.business",
               "stylers": [
                   {
                       "visibility": "simplified"
                   }
               ]
           }

]
    });

    var marker_image = 'img/marker.png';
    var marker = new google.maps.Marker({
        position: {lat: 55.3347777, lng: -100.5803696},
        map: map,
        icon: marker_image
    });


     var marker_infowindow = new google.maps.InfoWindow({
            content: markerPopup
        });
        marker.addListener('click', function() {
            marker_infowindow.open(map, marker);
        });


    var pointer_image = 'img/map/pointer.png';
    var pointer = new google.maps.Marker({
        position: {lat: 49.86922951, lng: 34.77704193},
        map: map,
        icon: pointer_image
    });

    var pointer_infowindow = new google.maps.InfoWindow({
            content: pointerPopup
        });
        pointer.addListener('click', function() {
            pointer_infowindow.open(map, pointer);
        });


}
document.addEventListener('DOMContentLoaded', initMap);
/* GOOGLE MAP END*/
