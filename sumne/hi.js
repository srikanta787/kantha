var myvar = 1
var col =['yellow','green','red']
function man(){
  myvar = myvar + 1;
    document.getElementById('hell').innerHTML=myvar;
    document.body.style.backgroundColor=col[myvar-1];
}


