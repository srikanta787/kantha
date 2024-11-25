function run(){
    var bill  = document.getElementById('hii').value;
    var option = document.getElementById('hello').value;
    var people = document.getElementById('good').value;
var tip = (bill*option)/people;
document.getElementById('sri').innerHTML="your tip is <br>" +'rupees'+tip +'<br>person';

}
