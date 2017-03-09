 /*
 * 5 ways to customize the Google Maps infowindow
 * 2015 - en.marnoto.com
 * http://en.marnoto.com/2014/09/5-formas-de-personalizar-infowindow.html
*/



var lat =  parseFloat(localStorage.getItem("lat"));
var lng =  parseFloat(localStorage.getItem("lng"));


// map center
var center = new google.maps.LatLng(lng, lat);

// marker position


var markers = [
['0','Adirondack',43.3507652,-73.656311,"0.jpg"],
['1','Broome',42.1678047,-75.8884735,"1.jpg"],
['2','Cayuga County',42.9488068,-76.5238113,"2.jpg"],
['3','Clinton',44.6937408,-73.4672546,"3.jpg"],
['4','Columbia-Greene',42.2176323,-73.818367,"4.jpg"],
['5','Corning',42.1163292,-77.0738907,"5.jpg"],
['6','Dutchess',41.7216949,-73.9061966,"6.jpg"],
['7','Erie',42.8819122,-78.8731613,"7.jpg"],
['8','Fashion Institute',40.758503,-73.9851379,"8.jpg"],
['9','Finger Lakes',42.8767853,-77.2724304,"9.jpg"],
['10','Fulton-Montgomery',42.9834557,-74.2950974,"10.jpg"],
['11','Genesee',43.0168915,-78.1380844,"11.jpg"],
['12','Herkimer County',43.0320549,-75.0077438,"12.jpg"],
['13','Hudson Valley',42.6984253,-73.6890869,"13.jpg"],
['14','Jamestown',42.1129532,-79.217926,"14.jpg"],
['15','Jefferson',43.9843063,-75.9313431,"15.jpg"],
['16','Mohawk Valley',43.0786896,-75.22155,"16.jpg"],
['17','Monroe',43.1010475,-77.6152344,"17.jpg"],
['18','Nassau',40.7482071,-73.5510559,"18.jpg"],
['19','Niagara County',43.1444206,-78.8828583,"19.jpg"],
['20','North Country',44.3219337,-74.1233521,"20.jpg"],
['21','Onondaga',43.0060577,-76.1969223,"21.jpg"],
['22','Orange County',41.4395943,-74.4265747,"22.jpg"],
['23','Rockland',41.1308861,-74.0856476,"23.jpg"],
['24','Schenectady County',42.8150826,-73.9524078,"24.jpg"],
['25','Suffolk County',40.848156,-73.0564575,"25.jpg"],
['26','Sullivan County',41.7653084,-74.6683044,"26.jpg"],
['27','Tompkins Cortland',42.4971085,-76.2984009,"27.jpg"],
['28','Ulster County',41.8715286,-74.1750259,"28.jpg"],
['29','Westchester',41.0705185,-73.7826691,"29.jpg"],
['30','Brockport',43.2119102,-77.9509811,"30.jpg"],
['31','Buffalo State',42.9324188,-78.8768921,"31.jpg"],
['32','Cortland',42.5985222,-76.1890335,"32.jpg"],
['33','Empire State',43.0773811,-73.7833099,"33.jpg"],
['34','Fredonia',42.4385948,-79.3207245,"34.jpg"],
['35','Geneseo',42.7967949,-77.8248215,"35.jpg"],
['36','New Paltz',41.7401619,-74.0813141,"36.jpg"],
['37','Old Westbury',40.7985573,-73.5742111,"37.jpg"],
['38','Oneonta',42.467598,-75.0663681,"38.jpg"],
['39','Oswego',43.4527702,-76.5448303,"39.jpg"],
['40','Plattsburgh',44.6945381,-73.4675446,"40.jpg"],
['41','Potsdam',44.6631737,-74.9790192,"41.jpg"],
['42','Purchase',41.0488014,-73.7037048,"42.jpg"],
['43','Albany',42.6907845,-73.8232956,"43.jpg"],
['44','Alfred-Ceramics',42.2569656,-77.7895355,"44.jpg"],
['45','Binghamton',42.0898132,-75.9698486,"45.jpg"],
['46','Buffalo University',43.0008278,-78.7888641,"46.jpg"],
['47','Cornell Statutory',42.4458351,-76.4746933,"47.jpg"],
['48','Downstate Medical',40.6556015,-73.9450836,"48.jpg"],
['49','Envir Sci & Forestry',43.0342941,-76.1362228,"49.jpg"],
['50','Optometry',40.7404442,-73.9862137,"50.jpg"],
['51','Stony Brook',40.9181595,-73.1226883,"51.jpg"],
['52','Upstate Medical',43.0427628,-76.1404648,"52.jpg"],
['53','Alfred State',42.2555046,-77.7876892,"53.jpg"],
['54','Canton',44.5889854,-75.1620026,"54.jpg"],
['55','Cobleskill',42.6741714,-74.497551,"55.jpg"],
['56','Delhi',42.2705536,-74.9245529,"56.jpg"],
['57','Farmingdale',40.7528114,-73.4278793,"57.jpg"],
['58','Maritime',40.8069954,-73.7960739,"58.jpg"],
['59','Morrisville',42.8959999,-75.6411972,"59.jpg"],
['60','SUNY POLY',43.0969925,-75.2718658,"60.jpg"],
['61','Baruch College',40.740977,-73.984252,"61.jpg"],
['62','Brooklyn College',40.630276,-73.955545,"62.jpg"],
['63','Borough of Manhattan Community College',40.717367,-74.012178,"63.jpg"],
['64','Bronx Community College',40.856673,-73.910127,"64.jpg"],
['65','The City College of New York',40.819548,-73.949518,"65.jpg"],
['66','CUNY School of Law',40.747639,-73.943676,"66.jpg"],
['67','The Graduate School and University Center',40.748724,-73.984205,"67.jpg"],
['68','Hunter College',40.768731,-73.964915,"68.jpg"],
['69','Hostos Community College',40.817828,-73.926862,"69.jpg"],
['70','John Jay College of Criminal Justice',40.769939,-73.986469,"70.jpg"],
['71','Kingsborough Community College',40.578349,-73.934465,"71.jpg"],
['72','Lehman College',40.873442,-73.889361,"72.jpg"],
['73','LaGuardia Community College',40.743951,-73.935154,"73.jpg"],
['74','Medgar Evers College',40.66624,-73.957349,"74.jpg"],
['75','New York City College of Technology',40.695507,-73.987882,"75.jpg"],
['76','Queensborough Community College',40.744988,-73.816444,"76.jpg"],
['77','Queens College',40.736316,-73.820035,"77.jpg"],
['78','College of Staten Island',40.608648,-74.153563,"78.jpg"],
['79','York College',40.702821,-73.795776,"79.jpg"],
['80','Guttman Community College',40.752846,-73.984133,"80.jpg"],
['81','School of Professional Studies',40.748151,-73.989723,"81.jpg"],
['82','School of Journalism',40.755343,-73.988846,"82.jpg"]

 ]; 


var images= [markers.length];
for (i = 0; i < markers.length; i++) {
    images[i]= {
  url: "mapIcons/collegeIcons/"+markers[i][4],
  size: new google.maps.Size(71, 71),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(17, 34),
  scaledSize: new google.maps.Size(65, 55)
};

}


function initialize() {
  var mapOptions = {
    center: center,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);


var infoWindowSummary=[];


 for( i = 0; i < 61; i++ ) {

  infoWindowSummary[i] = '<div id="iw-container">' +
                    '<div class="iw-title">'+markers[i][1]+"     " +'<img src="mapIcons/tick.png" alt="" padding ="15" height="22" width="22"><a href="chatRoomSuny.html" onClick ="saveCollegeForFacebook('+i+')">Speak With our Students</a>' +'</div>' +
                    '<div class="iw-content">' +
                      '<img src="mapIcons/collegeIcons/'+markers[i][4]+'" alt="'+markers[i][1]+'" height="115" width="83">' +
                      '<p> '+markers[i][1]+' is home to an exceptionally diverse student body of more than 25,700 high-achieving students including more than 17,000 undergraduates from nearly all 50 states and more than 150 countries.</p>'+
            '<div class="iw-subTitle">Cost of Attendance</div>' + 
            '<p>In-State Tuition: $8,430 <br>Out-of-State Tuition: $21,850 <br>Room and Board: $12,032 <br>Other Expenses : $1200 <br>Total In-state: $21,662</p>'+
            '<img src="mapIcons/scholarship.jpg" alt="Stony Brook University." height="80" width=100%>' +
            '<p>New York Tuition-Free Degree Program: The Excelsior Scholarship </p>'+
                      '<div class="iw-subTitle">Cost of Attendance After Excelsior Scholarship:</div>' + 
            '<p>Total In-state: $21,662<br>NY Excelsior Scholarship:  - $8,430  </p>'+
            '<b>Total In-state: $1200 <br>Total per year(excluding housing)  </b>'+

             '<p>Graduate without any debt with help of NY excelsior scholarship. <br> Learn more at:<br><a href= "https://www.ny.gov/programs/tuition-free-degree-program-excelsior-scholarship" target="target="_blank""> https://www.ny.gov/programs/tuition-free-degree-program-excelsior-scholarship</a></p>'+
             
             '<b> Get your questions answered from our current students. </b>'+
             '<form action="chatRoomSuny.html" method="get" ><br><a href = "https://collegediscussion.chatovod.com"><button type="submit" text-align:center><h5>Speak with our Students<br></h5></button></a></form>'+
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'
            
 }

 for( i = 61; i < markers.length; i++ ) {

  infoWindowSummary[i] = '<div id="iw-container">' +
                    '<div class="iw-title">'+markers[i][1]+"     " +'<img src="mapIcons/tick.png" alt="" padding ="15" height="22" width="22"><a href="chatRoomSuny.html" onClick ="saveCollegeForFacebook('+i+')">Speak With our Students</a>' +'</div>' +
                    '<div class="iw-content">' +
                      '<img src="mapIcons/collegeIcons/'+markers[i][4]+'" alt="'+markers[i][1]+'" height="115" width="83">' +
                      '<p> '+markers[i][1]+' is home to an exceptionally diverse student body of more than 25,700 high-achieving students including more than 17,000 undergraduates from nearly all 50 states and more than 150 countries.</p>'+
            '<div class="iw-subTitle">Cost of Attendance</div>' + 
            '<p>In-State Tuition: $8,430 <br>Out-of-State Tuition: $21,850 <br>Room and Board: $12,032 <br>Other Expenses : $1200 <br>Total In-state: $21,662</p>'+
            '<img src="mapIcons/scholarship.jpg" alt="Stony Brook University." height="80" width=100%>' +
            '<p>New York Tuition-Free Degree Program: The Excelsior Scholarship </p>'+
                      '<div class="iw-subTitle">Cost of Attendance After Excelsior Scholarship:</div>' + 
            '<p>Total In-state: $21,662<br>NY Excelsior Scholarship:  - $8,430  </p>'+
            '<b>Total In-state: $1200 <br>Total per year(excluding housing)  </b>'+

             '<p>Gradute without any debt with help of NY excelsior scholarship. <br> Learn more at:<br><a href= "https://www.ny.gov/programs/tuition-free-degree-program-excelsior-scholarship" target="target="_blank""> https://www.ny.gov/programs/tuition-free-degree-program-excelsior-scholarship</a></p>'+
             
             '<b> Get your questions answered from our current students. </b>'+
             '<form action="chatRoomCuny.html" method="get" ><br><a href = "https://collegediscussion.chatovod.com"><button type="submit" text-align:center><h5>Speak with our Students<br></h5></button></a></form>'+
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'
            
 }

var markerWithIcons = [];
var infowindowsForMarkers = [];
var positionForMarkerWithIcons = [];

 // Place each marker on the map  
    for( i = 0; i < markers.length; i++ ) {

  

  positionForMarkerWithIcons[i]= new google.maps.LatLng(markers[i][2], markers[i][3]);
  
     markerWithIcons[i] = new google.maps.Marker({
            position: positionForMarkerWithIcons[i],
            map: map,
            icon: images[i]
        });



markerWithIcons[i].index = i; //add index property

infowindowsForMarkers[i] = new google.maps.InfoWindow({
    content: infoWindowSummary[i],
    // Assign a maximum value for the width of the infowindow allows
    // greater control over the various content elements
    maxWidth: 350
  });
  

  // This event expects a click on a marker
  // When this event is fired the Info Window is opened.

  google.maps.event.addListener(markerWithIcons[i], 'click', function() {
    console.log(this.index); // this will give correct index
    console.log(i); //this will always give 10 for you
    infowindowsForMarkers[this.index].open(map,markerWithIcons[this.index]);
  });


// *
  // START INFOWINDOW CUSTOMIZE.
  // The google.maps.event.addListener() event expects
  // the creation of the infowindow HTML structure 'domready'
  // and before the opening of the infowindow, defined styles are applied.
  // *
    
  google.maps.event.addListener(infowindowsForMarkers[i], 'domready', function() {

    // Reference to the DIV that wraps the bottom of infowindow
    var iwOuter = $('.gm-style-iw');

    /* Since this div is in a position prior to .gm-div style-iw.
     * We use jQuery and create a iwBackground variable,
     * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
    */
    var iwBackground = iwOuter.prev();

    // Removes background shadow DIV
    iwBackground.children(':nth-child(2)').css({'display' : 'none'});

    // Removes white background DIV
    iwBackground.children(':nth-child(4)').css({'display' : 'none'});

    // Moves the infowindow 115px to the right.
    iwOuter.parent().parent().css({left: '115px'});

    // Moves the shadow of the arrow 76px to the left margin.
    iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

    // Moves the arrow 76px to the left margin.
    iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

    // Changes the desired tail shadow color.
    iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});

    // Reference to the div that groups the close button elements.
    var iwCloseBtn = iwOuter.next();

    // Apply the desired effect to the close button
    iwCloseBtn.css({opacity: '1', right: '38px', top: '3px', border: '7px solid #48b5e9', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9'});

    // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
    if($('.iw-content').height() < 140){
      $('.iw-bottom-gradient').css({display: 'none'});
    }

    // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
    iwCloseBtn.mouseout(function(){
      $(this).css({opacity: '1'});
    });
  });


}



}
google.maps.event.addDomListener(window, 'load', initialize);


function saveCollegeForFacebook(id){

  localStorage.setItem("collegeId", id );
 // alert(id);

}