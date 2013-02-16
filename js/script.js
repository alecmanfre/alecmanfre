$(document).ready(function(){

	$('#nav-contact-container').hover(function(){
		$('#contact-box-wrapper').fadeIn(500)
		},function(){
		$('#contact-box-wrapper').stop().fadeOut(250);
	});

	$(window).resize(function(){
		var windowHeight = $(window).height()+'px';
		$('#map_canvas').css('height',windowHeight);
	})

	$(window).scroll(function(){
		if($(window).scrollTop() > 100){
			$('.text-scroll-background').css('background-color','rgba(240, 240, 240, 0.8)');
			console.log('test')
		}else{
			$('#projects-header').css('background-color','rgba(240, 240, 240, 0.1)');
		}
	})
	

	var counter = 0;
	$('#travel-info-tab').click(function(){

		if(counter == 0){
			$('#travel-info-container').animate({
				left: '-341px'
			},1000)

			$('.icon-white').removeClass('icon-chevron-left');
			$('.icon-white').addClass('icon-globe');
			counter = 1;
		} else{
			$('#travel-info-container').animate({
				left: '0px'
			},1000)

			$('.icon-white').removeClass('icon-globe');
			$('.icon-white').addClass('icon-chevron-left');
			counter = 0;
		}

	})
})

function initialize() {
	var windowHeight = $(window).height()+'px';
	$('#map_canvas').css('height',windowHeight);

	var styles = [
		{
			featureType: "administrative.country",
			elementType: "labels",
			stylers:[
				{visibility: "simplified"}
			]
		},{
			featureType: 'all',
			elementType: 'all',
			stylers:[
				{gamma: 0.42}
			]
		}
	]

	var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

	var mapOptions = {
	  center: new google.maps.LatLng(50,0),
	  zoom: 2,
	  mapTypeId: google.maps.MapTypeId.TERRAIN,
	  mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.TERRAIN, 'map_style'],
    },
    scrollwheel: false,
    panControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    zoomControl: true,
    zoomControlOptions: {
 			position: google.maps.ControlPosition.RIGHT_CENTER
    }
	};

	var map = new google.maps.Map(document.getElementById("map_canvas"),
	    mapOptions);

	map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  var layer = new google.maps.FusionTablesLayer({
  	query: {
  		select: 'geometry',
  		from: '1o7t_pMHh7LXReV9LRYMDtEzTKyFBOVg4T_ulIq8'
  	},
  	styles: [{
  		polygonOptions: {
  			fillColor: '#000000',
  			fillOpacity: 0.5,
  			strokeColor: '#f3f3f3',
  			strokeWeight: '2px'
  		}
  	}]
  });

  layer.setMap(map);
}