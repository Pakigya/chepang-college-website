


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

function listColleges(){

 var div = document.createElement('div');

    div.className = 'listView';

    var informationWindow=[];



 for( i = 0; i < 61; i++ ) {

    div.innerHTML +=    '<div class="col s12 m7">'+
    '<div class="card horizontal">'+
     '<div class="card-image">'+
     '<div style="width:150px; height:150px;">'+
        '<img src="mapIcons/collegeIcons/'+markers[i][4]+'">'+
      '</div></div>'+
      '<div class="card-stacked">'+
        '<div class="card-content">'+
         '<h5><b>'+markers[i][1]+"     " +'</b><img src="mapIcons/tick.png" alt="" padding ="13" height="13" width="13">' +'</h5>' +
          '<p> is home to an exceptionally diverse student body of more than 25,700 high-achieving students including more than 17,000 undergraduates from nearly all 50 states and more than 150 countries.</p>'+
             '<p>Gradute without any debt with help of NY exelsior scholarship.'+
             '</div>'+
        '<div class="card-action">'+
          '<a class="waves-effect waves-light btn-large" href="chatRoomSuny.html">Speak With our Students</a>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>';
 }
 
  document.getElementById('listView').appendChild(div);
}



/*


 '<div class="col s12 m7">'+
    '<h2 class="header">Horizontal Card</h2>'+
    '<div class="card horizontal">'+
     '<div class="card-image">'+
        '<img src="http://lorempixel.com/100/190/nature/6">'+
      '</div>'+
      '<div class="card-stacked">'+
        '<div class="card-content">'+
          '<p>I am a very simple card. I am good at containing small bits of information.</p>'+
        '</div>'+
        '<div class="card-action">'+
          '<a href="#">This is a link</a>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>';











    '<div class="carousel">'+
    '<a class="carousel-item" ><img src="mapIcons/stonyList.jpg"><div><h6 align="center">Stony Brook University</h6></div></a>'+
    '<a class="carousel-item" ><img src="mapIcons/suffolkList.jpg"><div><h6 align="center">Suffolk county community college</h6></div></a>'+
    '<a class="carousel-item" ><img src="mapIcons/farmingdaleList.jpg"><div><h6 align="center">Farmingdale State University</h6></div></a>'+
    '<a class="carousel-item" ><img src="mapIcons/saintList.jpg"><div><h6 align="center">St. Johns University</h6></div></a>'+
    '<a class="carousel-item" ><img src="mapIcons/empireList.jpg"><div><h6 align="center">Empire State College</h6></div></a>'+
  	'</div>';

document.body.appendChild(listView);
*/