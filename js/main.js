
function submitReports(){
var error="";

  var ddlist=document.getElementById("report1Select");//dropdwon list
  var option=ddlist.children;

  var url = document.forms["report1Form"]["webSiteURL1"].value;//get the url
  var name=document.forms["report1Form"]["name1"].value;//get the name for url

  var url2 = document.forms["report1Form"]["webSiteURL2"].value;//get the url
  var name2=document.forms["report1Form"]["name2"].value;//get the name for url

  var url3 = document.forms["report1Form"]["webSiteURL3"].value;//get the url
  var name3=document.forms["report1Form"]["name3"].value;//get the name for url

if(((url2 == null || url2 == "" )||( name2 == null || name2 == ""))&&((url3 != null && url3 != "" )&&( name3 != null && name3 != ""))){
  //cheking format,3 doesnt exist before 2
  error="format is wrong,please keep the format!";
}


else{

  option[0].innerHTML=name;
  option[0].value=url;
  document.getElementById("report1Iframe").src = url;//put frame
  document.getElementById("report1NTL").href = url;//put new tabl link


  if((url3 != null && url3 != "" )&&( name3 != null && name3 != "")){//cheking if report 3 exist
if(ddlist.length<3){//need to crate option
  var optionCRT = document.createElement("OPTION");        // Create a <button> element
  var  t = document.createTextNode(name3);       // Create a text node
  optionCRT.value=url3;
  optionCRT.appendChild(t);                                // Append the text to <button>
  ddlist.appendChild(optionCRT);                    // Append <button> to <body>
}
else{
  option[3].innerHTML=name3;
  option[3].value=url3;
}
  }
else{//report 3 doesnt exist
if(ddlist.length==3){
ddlist.removeChild(ddlist.childNodes[3]);
}
}




if((url2 != null && url2 != "" )&&( name2 != null && name2 != "")){//cheking if report 3 exist
if(ddlist.length<2){//need to crate option
var optionCRT2 = document.createElement("OPTION");        // Create a <button> element
var t2 = document.createTextNode(name2);       // Create a text node
optionCRT.value=url2;
optionCRT.appendChild(t2);                                // Append the text to <button>
ddlist.appendChild(optionCRT2);                    // Append <button> to <body>
}
else{
option[2].innerHTML=name2;
option[2].value=url2;
}
}
else{//report 3 doesnt exist
if(ddlist.length==2){
ddlist.removeChild(ddlist.childNodes[2]);
}
}



document.getElementById("report1CB").checked = false;//hiding setting
var x=document.querySelectorAll(".hidden");//showing elements we hidden
var length=x.length;
var i;
for(i=0 ; i<length ;i++){
  x[i].style.display="inline";
}
}//else for if not in format
return false;

}//end of submitReports



function changeTab(){
var ddlist=document.getElementById("report1Select");//dropdwon list
  var sel=ddlist.value;

  document.getElementById("report1Iframe").src = sel;//put frame
  document.getElementById("report1NTL").href = sel;//put new tabl link
}


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

function getNotifications(){

  document.getElementById("notificationsCon").innerHTML  = "esponseText";
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



function startTime() {//just demo time function
var today = new Date()
var h = today.getHours()
var m = today.getMinutes()
var s = today.getSeconds()
// add a zero in front of numbers<10
m = checkTime(m)
s = checkTime(s)
document.getElementById('txt').innerHTML = h+":"+m+":"+s
t=setTimeout('startTime()',500)
}
function checkTime(i) {
if (i<10) {i="0" + i}
return i
}



document.getElementById("tabHead1").addEventListener("click", function(){

document.getElementById("tabHead1").style.background ="white";
document.getElementById("tabHead1Con").style.color ="black";

  document.getElementById("tabHead2").style.background ="#737373";
  document.getElementById("tabHead2Con").style.color ="white";

  document.getElementById("tabHead3").style.background ="#737373";
  document.getElementById("tabHead3Con").style.color ="white";

  document.getElementById("tabHead4").style.background ="#737373";
  document.getElementById("tabHead4Con").style.color ="white";

});

document.getElementById("tabHead2").addEventListener("click", function(){

document.getElementById("tabHead2").style.background ="white";
document.getElementById("tabHead2Con").style.color ="black";

  document.getElementById("tabHead1").style.background ="#737373";
  document.getElementById("tabHead1Con").style.color ="white";

  document.getElementById("tabHead3").style.background ="#737373";
  document.getElementById("tabHead3Con").style.color ="white";

  document.getElementById("tabHead4").style.background ="#737373";
  document.getElementById("tabHead4Con").style.color ="white";

});

document.getElementById("tabHead3").addEventListener("click", function(){

document.getElementById("tabHead3").style.background ="white";
document.getElementById("tabHead3Con").style.color ="black";

  document.getElementById("tabHead2").style.background ="#737373";
  document.getElementById("tabHead2Con").style.color ="white";

  document.getElementById("tabHead1").style.background ="#737373";
  document.getElementById("tabHead1Con").style.color ="white";

  document.getElementById("tabHead4").style.background ="#737373";
  document.getElementById("tabHead4Con").style.color ="white";

});


document.getElementById("tabHead4").addEventListener("click", function(){

document.getElementById("tabHead4").style.background ="white";
document.getElementById("tabHead4Con").style.color ="black";

  document.getElementById("tabHead2").style.background ="#737373";
  document.getElementById("tabHead2Con").style.color ="white";

  document.getElementById("tabHead3").style.background ="#737373";
  document.getElementById("tabHead3Con").style.color ="white";

  document.getElementById("tabHead1").style.background ="#737373";
  document.getElementById("tabHead1Con").style.color ="white";

});
