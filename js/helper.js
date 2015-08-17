/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name" class="_row">%data%</h1>';
var HTMLheaderRole = '<span id="role" class="_row">%data%</span><hr/ class="_row">';

var HTMLcontactGeneric = '<li><span>%contact%</span><span class="lightGrey-text">%data%</span></li>';
var HTMLmobile = '<li class="contact-item"><i class="fa fa-phone"></i></i><span class="lightGrey-text">%data%</span></li>';
var HTMLemail = '<li class="contact-item"><i class="fa fa-envelope"></i><span class="lightGrey-text">%data%</span></li>';
var HTMLtwitter = '<li class="contact-item"><a href="#"><i class="fa fa-twitter"></i><span class="lightGrey-text">%data%</a></span></li>';
var HTMLgithub = '<li class="contact-item"><a href="#"><i class="fa fa-github-alt"></i><span class="lightGrey-text">%data%</a></span></li>';
var HTMLblog = '<li class="contact-item"><span class="lightGrey-text">%data%</span></li>';
var HTMLlocation = '<li class="contact-item"><i class="fa fa-map-marker"></i><span class="lightGrey-text">%data%</span></li>';

var HTMLmobile_footer = '<li class="contact-item inblock text-center"><i class="fa fa-phone"></i></i><span class="white-text">%data%</span></li>';
var HTMLemail_footer = '<li class="contact-item inblock text-center"><i class="fa fa-envelope"></i><span class="white-text">%data%</span></li>';
var HTMLtwitter_footer = '<li class="contact-item inblock text-center"><a href="#"><i class="fa fa-twitter"></i><span class="white-text">%data%</a></span></li>';
var HTMLgithub_footer = '<li class="contact-item inblock text-center"><a href="#"><i class="fa fa-github-alt"></i><span class="white-text">%data%</a></span></li>';
var HTMLblog_footer = '<li class="contact-item inblock text-center"><span class="white-text">%data%</span></li>';
var HTMLlocation_footer = '<li class="contact-item inblock"><i class="fa fa-map-marker"></i><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillOutter = '<div id="#id" style="position:relative;"></div>';
var HTMLskillInner = '<span id="#id" style="position:absolute; left:2%; top:0%"></span>';

var HTMLworkStart = '<div class="work-entry flex-box"></div>';
var HTMLworkEmployer = '<div class="title col-12"><a href="#">%data%';
var HTMLworkTitle = ' - %data%</a></div>';
var HTMLworkDates = '<div class="date-text col-6">%data%</div>';
var HTMLworkLocation = '<div class="location-text col-6">%data%</div>';
var HTMLworkDescription = '<p>%data%</p><br><br>';

var HTMLprojectStart = '<div class="project-entry col-4 col-sm-12"></div>';
var HTMLprojectTitle = '<div class="title"><a href="#">%data%</a></div>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<div class="bottom-margin side-padding"><p>%data%</p></div>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry flex-box"></div>';
var HTMLschoolName = '<div class="title col-12"><a href="#">%data%';
var HTMLschoolDegree = ' - %data%</a></div>';
var HTMLschoolDates = '<div class="date-text col-6">%data%</div>';
var HTMLschoolLocation = '<div class="location-text col-6">%data%</div>';
var HTMLschoolMajor = '<em> Major: %data%</em>';

var HTMLonlineClasses = '<br><h3>Online Classes</h3>';
//var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineTitle = '<div class="title col-12">%data%';
var HTMLonlineSchool = ' @ %data%</div>';
var HTMLonlineDates = '<div class="date-text col-12">%data%</div>';
var HTMLonlineURL = '<a href="#" class="url">%data%</a><br>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y)
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  //var myLatlng = new google.maps.LatLng(-25.363882,131.044922);

  var mapOptions = {
    disableDefaultUI: true,
    //zoom: 4,
    //center: new google.maps.LatLng(-25.363882, 131.044922)
  };


  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });
    //marker.setMap(map);

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map,marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
