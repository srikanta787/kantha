var value = 0;
var colourarr = ['yellow','blue','green'];
function get(){
    value += 1;
   document.getElementById('hii').innerHTML=value; 
   document.body.style.backgroundColor=colourarr[value-1];
}

var value = 0;
var colourarr = ['yellow','blue','green']
function put(){
    value = value -1;
document.getElementById("hii").innerHTML=value;
document.body.style.backgroundColor=colourarr[value+1];
}