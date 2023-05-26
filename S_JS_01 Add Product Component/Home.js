
var plus= document.getElementById('plus');
var sub= document.getElementById('sub');
var divide= document.getElementById('divide');
var times= document.getElementById('times');


plus.addEventListener("click", function(e){
    e.preventDefault()
    var x= document.getElementById('num1').value;
    var y= document.getElementById('num2').value;
    document.getElementById('solution').innerText= parseInt(x) + parseInt(y) ;

})


sub.addEventListener("click", function(e){
    e.preventDefault()
    var x= document.getElementById('num1').value;
    var y= document.getElementById('num2').value;
    document.getElementById('solution').innerText= parseInt(x) - parseInt(y) ;

})


divide.addEventListener("click", function(e){
    e.preventDefault()
    var x= document.getElementById('num1').value;
    var y= document.getElementById('num2').value;
    document.getElementById('solution').innerText= parseInt(x) / parseInt(y) ;

})


times.addEventListener("click", function(e){
    e.preventDefault()
    var x= document.getElementById('num1').value;
    var y= document.getElementById('num2').value;
    document.getElementById('solution').innerText= parseInt(x) * parseInt(y) ;

})


