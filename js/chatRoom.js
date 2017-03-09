

var collegeId = parseInt(localStorage.getItem("collegeId"));

	alert(collegeId);

var collegeFacebookUrl = [

[0,"Suny-Adirondack-Community-College"],
[1,"sunybroome"],
[2,"CayugaCommunityCollege"],
[3,"clintoncommunitycollege"],
[4,"ColumbiaGreeneCC"],
[5,"CorningCommunityCollege"],
[6,"DutchessCommunityCollege"],
[7,"Erie-Community-College-South"],
[8,"FashionInstituteofTechnology"],
[9,"fingerlakescommunitycollege"],
[10,"FultonMontgomery-Community-College"],
[11,"sunygcc"],
[12,"herkimercollege"],
[13,"HudsonValleyCommunityCollege"],
[14,"jamestown-Community-College"],
[15,"sunyjefferson"],
[16,"WeAreMVCC"],
[17,"MonroeCC"],
[18,"nassaucommunitycollege"],
[19,"NiagaraCountyCommunityCollege"],
[20,"nocccd"],
[21,"OnondagaCC"],
[22,"sunyorange"],
[23,"Rockland-Community-College"],
[24,"SUNY.SchenectadyCountyCommunityCollege"],
[25,"SUNYSFLK"],
[26,"sunysullivan"],
[27,"TompkinsCortland"],
[28,"sunyulster"],
[29,"sunywcc"],
[30,"thecollegeatbrockport"],
[31,"BuffaloStateCollege"],
[32,"sunycortland"],
[33,"SUNYEmpire"],
[34,"Suny-College-At-Fredonia"],
[35,"SUNYGeneseo"],
[36,"newpaltz"],
[37,"SUNYOldWestbury"],
[38,"SUNYOneonta"],
[39,"SUNYOswego"],
[40,"sunyplattsburgh"],
[41,"SUNYPotsdam"],
[42,"SUNYPurchaseCollege"],
[43,"universityatalbany"],
[44,"AlfredStateCollege"],
[45,"BinghamtonU"],
[46,"universityatbuffalo"],
[47,"Cornell"],
[48,"DownstateStuAdm"],
[49,"Forestry-and-Environmental-Science-Society-88007037602"],
[50,"sunyopt"],
[51,"groups/StonyBrook2018"],
[52,"UpstateMedicalUniversity"],
[53,"AlfredStateCollege"],
[54,"suny.canton"],
[55,"Cobleskill"],
[56,"sunydelhi"],
[57,"farmingdale"],
[58,"sunymaritimecollege"],
[59,"morrisvillestatecollege"],
[60,"sunypolytechnic"],
[61,"baruchcollege"],
[62,"brooklyncollege"],
[63,"CUNY.BMCC"],
[64,"bronxcc"],
[65,"citytech"],
[66,"cunylawschool"],
[67,"theGraduateCenter"],
[68,"huntercollege"],
[69,"Hostos-Community-College-Library-111147448943002"],
[70,"johnJayCollege"],
[71,"CUNYkcc"],
[72,"LehmanCUNY"],
[73,"LaGuardiaCC"],
[74,"MECCUNY"],
[75,"theCityCollegeofNewYork"],
[76,"QueensboroughCUNY"],
[77,"QueensCollege"],
[78,"CollegeOfStatenIsland"],
[79,"York-College-CUNY-175813186163"],
[80,"GuttmanCC"],
[81,"cunysps"],
[82,"cunyjschool"]

]


function loadFacebookPage(){

	var div = document.createElement('div');

    div.className = 'facebook';

    div.innerHTML +=   '<div class="fb-page" data-href="https://www.facebook.com/'+collegeFacebookUrl[collegeId][1]+'/?ref=br_rs" data-tabs="timeline" data-width="480" data-height="520" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/'+collegeFacebookUrl[collegeId][1]+'/?ref=br_rs" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/'+collegeFacebookUrl[collegeId][1]+'/?ref=br_rs"></a></blockquote></div></div>';

	alert(collegeId);

  document.getElementById('facebook').appendChild(div);
}