/* ====================================
               Navigation
======================================= */
/* Show and Hide Gold Nav */

$(function() {
    
    // show/hide nav on page load
    showHideNav();
    
    
   $(window).scroll(function(){
       
       // show/hide nav on window's scroll
       
       showHideNav();
       
   }); 
    
    function showHideNav() {
        
        
         if( $(window).scrollTop() >50 ) {
         
           // show gold nav
           $("nav").addClass("gold-nav-top");
           
           // show white logo
           $(".navbar-brand img").attr("src", "img/logo/logo-original-name2.png");
             
           // show back to top
           $(".btn-back-to-top").fadeIn();
           
           
       } else {
            // hide gold nav
           $("nav").removeClass("gold-nav-top");
           
           // show logo
           $(".navbar-brand img").attr("src", "img/logo/logo-original-name.png");
           
           // hide back to top
           $(".btn-back-to-top").fadeOut();

       }
        
    }
    
});

// Smooth Scrolling
$(function () {
   
    $("a.smooth-scroll").click(function(event) {
        
        event.preventDefault();
        
        // get section id like #about, #menu etc.
        var section_id = $(this).attr("href");
        
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 15
        }, 1250); //add "easeInQuad" or not?//
        
    });
    
});




/* ====================================
              Google Map
======================================= */
$(window).on('load', function initMap() {
   
    // Map Variables 
    var addressString = '1027 S Washington Ave, Minneapolis, MN 55415';
    var myLatlng = {lat: 44.975347, lng: -93.253487};
    

    // 1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 14,
       center: myLatlng,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#333333'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#252626'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#b0a170'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#b0a170'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#b0a170'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#353535'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#b0a170'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#2B2B2B'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#333333'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#b0a170'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#2B2B2B'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#333333'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#b0a170'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#303030'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#b0a170'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#b0a170'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#1b1b1b'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#b0a170'}]
            },
            
            // Hide Map Features
            {
              featureType: 'poi.business',
              elementType: 'labels.icon',
              stylers:[{visibility: 'off'}]
            },
            {
              featureType: 'poi.school',
              elementType: 'labels.icon',
              stylers:[{visibility: 'off'}]
            },
            {
              featureType: 'poi.government',
              elementType: 'labels.icon',
              stylers:[{visibility: 'off'}]
            },
            {
              featureType: 'poi.place_of_worship',
              elementType: 'labels.icon',
              stylers:[{visibility: 'off'}]
            },
            {
              featureType: 'poi.medical',
              elementType: 'labels.icon',
              stylers:[{visibility: 'off'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.icon',
              stylers:[{visibility: 'off'}]
            },
            {
              featureType: 'poi.attraction',
              elementType: 'labels.icon',
              stylers:[{visibility: 'off'}]
            },
            {
              featureType: 'poi.sports_complex',
              elementType: 'labels.icon',
              stylers:[{visibility: 'off'}]
            },
            
            
            
          ]
        
    });
    
    // 2. Add Marker
    var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
        title: 'Click To See Address',
        animation: google.maps.Animation.DROP,
    });
    
    marker.addListener('click', toggleBounce);
    
    function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
    
    // 3. Add Info Window and show by clicking
    var infowindow = new google.maps.InfoWindow({
    content: addressString
    });
    
    marker.addListener('click', function() {
    infowindow.open(map, marker);
  });     


});


/* ====================================
              Animation
======================================= */
// animation when scroll
$(function () {
     new WOW().init(); 
});

// home animation on page load
$(window).on('load', function() {
    
    $("#menu-heading-1").addClass("animated fadeInDown");
    $("#menu-heading-2").addClass("animated fadeInLeft");

});







