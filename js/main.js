
function submitReports(){
var error="";

  var ddlist=document.getElementById("report1Select");//dropdwon list
  var option=ddlist.children;

document.forms["report1Form"]["name2"].style.border="none";
document.forms["report1Form"]["webSiteURL2"].style.border="none";
document.forms["report1Form"]["name3"].style.border="none";
document.forms["report1Form"]["webSiteURL3"].style.border="none";


  var url = document.forms["report1Form"]["webSiteURL1"].value;//get the url
  var name=document.forms["report1Form"]["name1"].value;//get the name for url

  var url2 = document.forms["report1Form"]["webSiteURL2"].value;//get the url
  var name2=document.forms["report1Form"]["name2"].value;//get the name for url

  var url3 = document.forms["report1Form"]["webSiteURL3"].value;//get the url
  var name3=document.forms["report1Form"]["name3"].value;//get the name for url

if(((url2 == null || url2 == "" )||( name2 == null || name2 == ""))&&((url3 != null && url3 != "" )&&( name3 != null && name3 != ""))){
  //cheking format,3 doesnt exist before 2
  error="format is wrong,please keep the format!,fill 2 before 3.";
  document.getElementById("error").innerHTML=error;//dropdwon list
}


else{

if((url2 != null && url2 != "" )&&( name2 == null || name2 == "")){
document.forms["report1Form"]["name2"].style.border="2px solid red";
document.forms["report1Form"]["name2"].focus();
}

else{

   if((name2 != null && name2 != "" )&&( url2 == null || url2 == "")){
 document.forms["report1Form"]["webSiteURL2"].style.border="2px solid red";
   document.forms["report1Form"]["webSiteURL2"].focus();
   }
  else{

    if((url3 != null && url3 != "" )&&( name3 == null || name3 == "")){
    document.forms["report1Form"]["name3"].style.border="2px solid red";
    document.forms["report1Form"]["name3"].focus();
    }

    else{

      if((name3 != null && name3 != "" )&&( url3 == null || url3 == "")){
    document.forms["report1Form"]["webSiteURL3"].style.border="2px solid red";
      document.forms["report1Form"]["webSiteURL3"].focus();
      }
     else{


  option[0].innerHTML=name;
  option[0].value=url;
  document.getElementById("report1Iframe").src = url;//put frame
  document.getElementById("report1NTL").href = url;//put new tabl link


  if((url2 != null && url2 != "" )&&( name2 != null && name2 != "")){//cheking if report 2 exist

    if(ddlist.length<2){//need to crate option
     var optionCRT2 = document.createElement("OPTION");        // Create a <button> element
     var t2 = document.createTextNode(name2);       // Create a text node
     optionCRT2.value=url2;
     optionCRT2.appendChild(t2);                                // Append the text to <button>
    ddlist.appendChild(optionCRT2);                    // Append <button> to <body>
  }
    else{
    option[1].innerHTML=name2;
    option[1].value=url2;
     }

  }
 else{//report 2 doesnt exist
    if(ddlist.length==2){
    ddlist.removeChild(ddlist.childNodes[2]);
     }
  }



if((url3 != null && url3 != "" )&&( name3 != null && name3 != "")){//cheking if report 3 exist
if(ddlist.length<3){//need to crate option
  var optionCRT = document.createElement("OPTION");        // Create a <button> element
  var  t = document.createTextNode(name3);       // Create a text node
  optionCRT.value=url3;
  optionCRT.appendChild(t);                                // Append the text to <button>
  ddlist.appendChild(optionCRT);                    // Append <button> to <body>
}
else{
  option[2].innerHTML=name3;
  option[2].value=url3;
}
  }
else{//report 3 doesnt exist
if(ddlist.length==3){
ddlist.removeChild(ddlist.childNodes[3]);
}
}


document.getElementById("report1CB").checked = false;//hiding setting
var x=document.querySelectorAll(".hidden");//showing elements we hidden
var length=x.length;
var i;
for(i=0 ; i<length ;i++){
  x[i].style.display="block";
}

  document.getElementById("error").innerHTML="";//dropdwon list


}//else for if url3 missing
}//else for if name3 missing
}//else for if url2 missing
}//else for if name2 missing
}//else for if not in format

return false;

}//end of submitReports


/** ***********************************    **/


function submitSearch(){
getNotifications();//restart the notifications
  var val = document.forms["searchForm"]["q"].value;//get the url
  var ddlist=document.getElementById("report1Select");//dropdwon list
  var option=ddlist.children;
  var length=option.length;
  var b=true;
  var i=0;
  while( i<length && b){
    if(option[i].innerHTML.search(val)>=0){
     tab1On();
      location.hash="#quick-reports";
      ddlist.selectedIndex =i;
      changeTab();//change the tab
        b=false;
    }
    i++;
  }
  if(b){//meaning we didnt find nothing
   document.getElementById("notificationsCon").innerHTML ="The searched report <b>" + val + "</b> was not found.";
  }


  return false;
}

/** ***********************************    **/

function changeTab(){
var ddlist=document.getElementById("report1Select");//dropdwon list
  var sel=ddlist.value;

  document.getElementById("report1Iframe").src = sel;//put frame
  document.getElementById("report1NTL").href = sel;//put new tabl link
}

/** ***********************************    **/


document.getElementById("tabSettingIm").addEventListener("click", function(){
var t=document.getElementById("tabSettingIm");
if(t.style.transform == ""){
t.style.transform="rotate(360deg)"
}
else{
  t.style.transform=""
}

});

/** ***********************************    **/



function identifyEscKeyPressedEvent(keyEvent){
            var pressedKeyValue = keyEvent.keyCode || keyEvent.which;
            if(pressedKeyValue == 27)
            {
            document.getElementById("report1CB").checked = false;//hidden report form
            }
    }

/** ***********************************    **/

function urlFormat(s){
  var prefix = 'http://';
  var prefix2 = 'https://';
  if (s.substr(0, prefix.length) !== prefix && s.substr(0, prefix2.length) !== prefix2)
  {
    s = prefix + s;
  }

}

/** ***********************************    **/

function AAA(){//need to change,or remove
var notifications ={
  text:"dasd"
  ,res:""
  ,err:""
  ,done:function(a){
      this.res=a;
  }
  ,fail:function(b){
    this.err=b;
  }
};
UTILS.ajax("data/config.json",notifications);
 document.getElementById("notificationsCon").innerHTML =notifications.err;

}

/** ***********************************    **/


function getNotifications(){

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "data/config.json");
    xhttp.onreadystatechange = function() {
      status = xhttp.status;
        document.getElementById("notificationsCon").innerHTML  = status;
      if (xhttp.readyState == 4 && ((status >= 200 && status < 300) || status === 304)) {
         document.getElementById("notificationsCon").innerHTML  = xhttp.responseText;
      }
    };

    xhttp.send();
}

/** ***********************************    **/

document.getElementById("tabHead1").addEventListener("click", function(){

tab1On();

});

function tab1On(){
  document.getElementById("tabHead1").style.background ="#d9d9d9";
  document.getElementById("tabHead1Con").style.color ="black";

    document.getElementById("tabHead2").style.background ="#737373";
    document.getElementById("tabHead2Con").style.color ="white";

    document.getElementById("tabHead3").style.background ="#737373";
    document.getElementById("tabHead3Con").style.color ="white";

    document.getElementById("tabHead4").style.background ="#737373";
    document.getElementById("tabHead4Con").style.color ="white";
}

/** ***********************************    **/

document.getElementById("tabHead2").addEventListener("click", function(){

document.getElementById("tabHead2").style.background ="#d9d9d9";
document.getElementById("tabHead2Con").style.color ="black";

  document.getElementById("tabHead1").style.background ="#737373";
  document.getElementById("tabHead1Con").style.color ="white";

  document.getElementById("tabHead3").style.background ="#737373";
  document.getElementById("tabHead3Con").style.color ="white";

  document.getElementById("tabHead4").style.background ="#737373";
  document.getElementById("tabHead4Con").style.color ="white";

});

/** ***********************************    **/

document.getElementById("tabHead3").addEventListener("click", function(){

document.getElementById("tabHead3").style.background ="#d9d9d9";
document.getElementById("tabHead3Con").style.color ="black";

  document.getElementById("tabHead2").style.background ="#737373";
  document.getElementById("tabHead2Con").style.color ="white";

  document.getElementById("tabHead1").style.background ="#737373";
  document.getElementById("tabHead1Con").style.color ="white";

  document.getElementById("tabHead4").style.background ="#737373";
  document.getElementById("tabHead4Con").style.color ="white";

});


/** ***********************************    **/

document.getElementById("tabHead4").addEventListener("click", function(){

document.getElementById("tabHead4").style.background ="#d9d9d9";
document.getElementById("tabHead4Con").style.color ="black";

  document.getElementById("tabHead2").style.background ="#737373";
  document.getElementById("tabHead2Con").style.color ="white";

  document.getElementById("tabHead3").style.background ="#737373";
  document.getElementById("tabHead3Con").style.color ="white";

  document.getElementById("tabHead1").style.background ="#737373";
  document.getElementById("tabHead1Con").style.color ="white";

});
