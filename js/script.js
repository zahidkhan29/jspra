// text change
function textchange(){

	document.getElementById('h2').innerHTML=  "hello there"; 

} 

function showdate(){

	document.getElementById('dh2').innerHTML=Date();
}

function repeatmessage(){
	var message ="welcome to web"
	document.getElementById('dm2').innerHTML=message.repeat(30);
}

function bulbon(){
    document.getElementById('bulb').src='image/on.gif';
}

function bulboff(){
    document.getElementById('bulb').src='image/off.gif';
}

function fontsize(){
    document.getElementById('fs').style.fontSize ="200px";
}

function textShow(){
    document.getElementById('db').style.display="block";
}
function textHide(){
    document.getElementById('db').style.display="none";
}
 
 function output(){
	var number1=10;
	var number2=200;
	var result= number1+number2;
	document.getElementById('op').innerHTML=result;
}