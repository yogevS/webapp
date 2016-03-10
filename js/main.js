
function submitReports(){


document.getElementById("notificationsCon").innerHTML ="1";
return false;
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
