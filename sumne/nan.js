var hour = new Date().getHours()
var hour = 20;
/*morning 4am - 11am;
evening 12pm - 5pm;
night 6pm - 10pm;
*/

if(hour >=4 && hour <=11){
   document.getElementById('sri').innerHTML="good morning";
} else if(hour >=12 && hour <=17){
   document.getElementById('sri').innerHTML="good evening";
} else if(hour >=18 && hour <=23){
   document.getElementById('sri').innerHTML="good night";
}


