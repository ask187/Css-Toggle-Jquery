$(document).ready(function(){
$('.knock').click(function(){

$('#kn').toggle();
});
$('.ding').click(function(){

$('#din').toggle();
});
$('.beep').click(function(){

$('#be').toggle();
});
var a=true;
var b=true;
$('.togs').click(function(){
	if(a==true){
		a=false;
	$('#box1').addClass("box2").removeClass("box1");
	$('#box2').addClass("box1").removeClass("box2");
	}
else{
	a=true;
$('#box2').addClass("box2").removeClass("box1");
	$('#box1').addClass("box1").removeClass("box2");
}
});
$('#box1,#box2').click(function(){
	if(a==true){
		a=false;
	$('#box1').addClass("box2").removeClass("box1");
	$('#box2').addClass("box1").removeClass("box2");
	}
else{
	a=true;
$('#box2').addClass("box2").removeClass("box1");
	$('#box1').addClass("box1").removeClass("box2");
}
});






});