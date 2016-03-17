
function submitReports(i){//getting the report who active this
var error="";
var b=false;//bollean var in case when we reomve 2 and 3 toghter


if(localStorage.getItem('data')!=null){
var data=JSON.parse(localStorage.getItem('data'));
}

else{  //if none storage then intillaize
var data={
tab:1,name1:"",url1:"",name2:"",url2:"",
  name3:"",url3:"",name4:"",url4:""
  ,name5:"",url5:"",name6:"",url6:""
} ;

}


  var ddlist=document.getElementById("report" + i + "Select");//dropdwon list
  var option=ddlist.children;

document.forms["report" + i + "Form"]["name2"].style.border="none";  //intillize for error
document.forms["report" + i + "Form"]["webSiteURL2"].style.border="none";
document.forms["report" + i + "Form"]["name3"].style.border="none";
document.forms["report" + i + "Form"]["webSiteURL3"].style.border="none";

document.getElementById("error" + i).innerHTML="";//intillize error

  var url = document.forms["report" + i + "Form"]["webSiteURL1"].value;//get the url
  var name=document.forms["report" + i + "Form"]["name1"].value;//get the name for url

  var url2 = document.forms["report" + i + "Form"]["webSiteURL2"].value;//get the url
  var name2=document.forms["report" + i + "Form"]["name2"].value;//get the name for url

  var url3 = document.forms["report" + i + "Form"]["webSiteURL3"].value;//get the url
  var name3=document.forms["report" + i + "Form"]["name3"].value;//get the name for url

if(((url2 == null || url2 == "" )||( name2 == null || name2 == ""))&&((url3 != null && url3 != "" )&&( name3 != null && name3 != ""))){
  //cheking format,3 doesnt exist before 2
  error="format is wrong,please keep the format!,fill 2 before 3.";
  document.getElementById("error" +i).innerHTML=error;//dropdwon list
}


else{

if((url2 != null && url2 != "" )&&( name2 == null || name2 == "")){
document.forms["report" + i + "Form"]["name2"].style.border="2px solid red";
document.forms["report" + i + "Form"]["name2"].focus();
}

else{

   if((name2 != null && name2 != "" )&&( url2 == null || url2 == "")){
 document.forms["report" + i + "Form"]["webSiteURL2"].style.border="2px solid red";
   document.forms["report" + i + "Form"]["webSiteURL2"].focus();
   }
  else{

    if((url3 != null && url3 != "" )&&( name3 == null || name3 == "")){
    document.forms["report" + i + "Form"]["name3"].style.border="2px solid red";
    document.forms["report" + i + "Form"]["name3"].focus();
    }

    else{

      if((name3 != null && name3 != "" )&&( url3 == null || url3 == "")){
    document.forms["report" + i + "Form"]["webSiteURL3"].style.border="2px solid red";
      document.forms["report" + i + "Form"]["webSiteURL3"].focus();
      }
     else{


  option[0].innerHTML=name;
  option[0].value=url;
  document.getElementById("report" + i + "Iframe").src = url;//put frame
  document.getElementById("report" + i + "NTL").href = url;//put new tabl link

switch(i){
case 1:

data.url1=url;
data.name1=name;

break;

case 2:

data.url4=url;
data.name4=name;


break;
}



  if((url2 != null && url2 != "" )&&( name2 != null && name2 != "")){//cheking if report 2 exist

    switch(i){
    case 1:

    data.url2=url2;
    data.name2=name2;

    break;

    case 2:

    data.url5=url2;
    data.name5=name2;


    break;
    }


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

   switch(i){
   case 1:

   data.url2="";
   data.name2="";

   break;

   case 2:

   data.url5="";
   data.name5="";


   break;
   }

    if(ddlist.length==2||ddlist.length==3){
      b=true;//only in case when we remove 2 before 3
    ddlist.removeChild(option[1]);
     }
  }



if((url3 != null && url3 != "" )&&( name3 != null && name3 != "")){//cheking if report 3 exist

  switch(i){
  case 1:

  data.url3=url3;
  data.name3=name3;

  break;

  case 2:

  data.url6=url3;
  data.name6=name3;


  break;
  }

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
  switch(i){
  case 1:

  data.url3="";
  data.name3="";

  break;

  case 2:

  data.url6="";
  data.name6="";


  break;
  }

if(ddlist.length==3){
ddlist.removeChild(option[2]);
}
if(b && ddlist.length==2){//when we remove 2 before 3,length is 2 so we wont catch it
ddlist.removeChild(option[1]);
}

}


document.getElementById("report" + i + "CB").checked = false;//hiding setting

var x=document.querySelectorAll(".hidden" + i);//showing elements we hidden
var length=x.length;
var j;
for(j=0 ; j<length ;j++){
  x[j].style.display="block";
}


localStorage.setItem('data', JSON.stringify(data));

// Get the data out as a JSON object


}//else for if url3 missing
}//else for if name3 missing
}//else for if url2 missing
}//else for if name2 missing
}//else for if not in format

return false;

}//end of submitReports


/** ***********************************    **/


function submitSearch(){

  var val = document.forms["searchForm"]["q"].value;//get the url
  var ddlist=document.getElementById("report1Select");//dropdwon list
  var option=ddlist.children;
  var length=option.length;
  var b=true;
  var i=0;
  while( i<length && b){
    if(option[i].innerHTML.search(val)>=0){//meaning we found a report
     tab1On();
      location.hash="#quick-reports";
      ddlist.selectedIndex =i;
      changeTab(1);//change the tab
        b=false;
        getNotifications();//restart the notifications
    }

    i++;
  }

   i=0;//now we search on the my-team-folders
   var ddlist=document.getElementById("report2Select");//dropdwon list
   var option=ddlist.children;

   while( i<length && b){
     if(option[i].innerHTML.search(val)>=0){//meaning we found a report
      tab3On();
       location.hash="#my-team-folders";
       ddlist.selectedIndex =i;
       changeTab(2);//change the tab
         b=false;
         getNotifications();//restart the notifications
     }

     i++;
   }


  if(b){//meaning we didnt find nothing
   document.getElementById("notificationsCon").innerHTML ="The searched report <b>" + val + "</b> was not found.";
  }


  return false;
}

/** ***********************************    **/

function changeTab(i){//i is 1 or 2,for quick reports and my-team-folders tabs..

var ddlist=document.getElementById("report" + i + "Select");//dropdwon list
  var sel=ddlist.value;
  document.getElementById("report" + i + "Iframe").src = sel;//put frame
  document.getElementById("report" + i + "NTL").href = sel;//put new tabl link
}

/** ***********************************    **/


document.getElementById("SettingImBox").addEventListener("click", function(){//wheel roatate for form 1
var t=document.getElementById("tabSettingIm");
if(t.style.transform == ""){
t.style.transform="rotate(360deg)"
}
else{
  t.style.transform=""
}

});


document.getElementById("SettingImBox2").addEventListener("click", function(){//wheel roatate for form 2
var t=document.getElementById("tabSettingIm2");
if(t.style.transform == ""){
t.style.transform="rotate(360deg)"
}
else{
  t.style.transform=""
}

});



/** ***********************************    **/

function identifyEscKeyPressedEvent(keyEvent,Id){
            var pressedKeyValue = keyEvent.keyCode || keyEvent.which;
            if(pressedKeyValue == 27)
            {
            document.getElementById(Id).checked = false;//hidden report form
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

function pageLoad(){

 var myData=JSON.parse(localStorage.getItem('data'));//wtf why i need 2 Jason.prase
getNotifications();
 switch(myData.tab){
 case 1:
 location.hash="#quick-reports";
 tab1On();
 break;
 case 2:
 location.hash="#my-folders";
 tab2On();
 break;
 case 3:
 location.hash="#my-team-folders";
 tab3On();
 break;
 case 4:
 location.hash="#public-folders";
 tab4On();
 break;
}//end of switch

 document.forms["report1Form"]["webSiteURL1"].value=myData.url1;//set the url in form
document.forms["report1Form"]["name1"].value=myData.name1;//set the name in form

if(myData.url2!=null){//check if we intzallize this report
document.forms["report1Form"]["webSiteURL2"].value=myData.url2;//set the url in form
}
if(myData.name2!=null){
document.forms["report1Form"]["name2"].value=myData.name2;//set the name in form
}
if(myData.url3!=null){//check if we intzallize this report
document.forms["report1Form"]["webSiteURL3"].value=myData.url3;//set the url in form
}
if(myData.name3!=null){
document.forms["report1Form"]["name3"].value=myData.name3;//set the name in form
}


document.forms["report2Form"]["webSiteURL1"].value=myData.url4;//set the url in form
document.forms["report2Form"]["name1"].value=myData.name4;//set the name in form

if(myData.url5!=null){//check if we intzallize this report
document.forms["report2Form"]["webSiteURL2"].value=myData.url5;//set the url in form
}
if(myData.name5!=null){
document.forms["report2Form"]["name2"].value=myData.name5;//set the name in form
}
if(myData.url6!=null){//check if we intzallize this report
document.forms["report2Form"]["webSiteURL3"].value=myData.url6;//set the url in form
}
if(myData.name6!=null){
document.forms["report2Form"]["name3"].value=myData.name6;//set the name in form
}


submitReports(1);//send the value in the form we put
submitReports(2);//send the value in the form we put

}//end of pageLoad

/** ***********************************    **/

function getNotifications(){
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "data/config.json");
    xhttp.onreadystatechange = function() {
      status = xhttp.status;
        document.getElementById("notificationsCon").innerHTML  = xhttp.readyState == 4 && ((status >= 200 && status < 300) || status === 304);
      if (xhttp.readyState == 4 && ((status >= 200 && status < 300) || status === 304)) {
        var data=JSON.parse(xhttp.responseText);
         document.getElementById("notificationsCon").innerHTML  = data.notification;

      }
      else{
        document.getElementById("notificationsCon").innerHTML  = "problem with the server,please wait.."
      }
    };

    xhttp.send(null);
}

/** ***********************************    **/

document.getElementById("tabHead1Con").addEventListener("click", function(){

tab1On();

});

function tab1On(){


  var myData=JSON.parse(localStorage.getItem('data'));
  myData.tab=1;
  localStorage.setItem('data',JSON.stringify(myData));

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

document.getElementById("tabHead2Con").addEventListener("click", function(){

tab2On();

});

function tab2On(){

var myData=JSON.parse(localStorage.getItem('data'));
myData.tab=2;
localStorage.setItem('data',JSON.stringify(myData));

  document.getElementById("tabHead2").style.background ="#d9d9d9";
  document.getElementById("tabHead2Con").style.color ="black";

    document.getElementById("tabHead1").style.background ="#737373";
    document.getElementById("tabHead1Con").style.color ="white";

    document.getElementById("tabHead3").style.background ="#737373";
    document.getElementById("tabHead3Con").style.color ="white";

    document.getElementById("tabHead4").style.background ="#737373";
    document.getElementById("tabHead4Con").style.color ="white";

}

/** ***********************************    **/

document.getElementById("tabHead3Con").addEventListener("click", function(){

tab3On();

});

function tab3On(){

  var myData=JSON.parse(localStorage.getItem('data'));
  myData.tab=3;
  localStorage.setItem('data',JSON.stringify(myData));


  document.getElementById("tabHead3").style.background ="#d9d9d9";
  document.getElementById("tabHead3Con").style.color ="black";

    document.getElementById("tabHead2").style.background ="#737373";
    document.getElementById("tabHead2Con").style.color ="white";

    document.getElementById("tabHead1").style.background ="#737373";
    document.getElementById("tabHead1Con").style.color ="white";

    document.getElementById("tabHead4").style.background ="#737373";
    document.getElementById("tabHead4Con").style.color ="white";

}

/** ***********************************    **/

document.getElementById("tabHead4Con").addEventListener("click", function(){
tab4On();
});


function tab4On(){

  var myData=JSON.parse(localStorage.getItem('data'));
  myData.tab=4;
  localStorage.setItem('data',JSON.stringify(myData));

  document.getElementById("tabHead4").style.background ="#d9d9d9";
  document.getElementById("tabHead4Con").style.color ="black";

    document.getElementById("tabHead2").style.background ="#737373";
    document.getElementById("tabHead2Con").style.color ="white";

    document.getElementById("tabHead3").style.background ="#737373";
    document.getElementById("tabHead3Con").style.color ="white";

    document.getElementById("tabHead1").style.background ="#737373";
    document.getElementById("tabHead1Con").style.color ="white";
}
