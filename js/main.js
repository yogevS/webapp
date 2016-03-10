
//document.getElementById("menu-nav1").addEventListener("click", function(){
// var x=location.hash;
//  if(x == "#nav1"){
//     location.hash="";
//  }
//else{
//  location.hash="nav1";
//}
//});




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
