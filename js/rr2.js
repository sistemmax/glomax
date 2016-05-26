var  Color = new Array();
Color[0] = 'red';
Color[1] = 'blue';
Color[2] = 'green';
Color[3] = 'black';
Color[4] = 'green';
Color[5] = 'black';
Color[6] = 'brown';
Color[7] = 'black';
Color[8] = 'black';
Color[9] = 'black';
Color[10] = 'black';

var  fontName = new Array();
fontName[0] = 'arial';
fontName[1] = 'sans-serif';
fontName[2] = 'century gothic';
fontName[3] = 'Calibri';
fontName[4] = 'Corbel';
fontName[5] = 'David';
fontName[6] = 'Dotum';
fontName[7] = 'Impact';
fontName[8] = 'Segoe UI';
fontName[9] = 'Tahoma';
fontName[10] = 'Verdana';
fontName[11] = 'Georgia';


var text = document.getElementById('message').value;
var h1 = document.getElementById('h1').innerHTML;
var button = document.getElementById('button');
var newText = document.getElementById('newText');
var str = '';
var text2 = document.createElement('p');
var new_h1 = document.getElementById('new_h1');
console.log(text);

var capital = 'true';

rrH1();
rr();

button.onclick = function() {
	rr();
	rrH1();
}

function rr() {

text = document.getElementById('message').value;
newText.innerHTML = '';

for(i=0; i<text.length; i++) {

	var wrap = document.createElement('span');
	var letter = text.substring(i,i+1);
	wrap.innerHTML = letter;

//getting the big capital letter
if(capital) {

	if(letter==' '){
		newText.appendChild(wrap);
	}

//if it is not a space give the letter font-size 30 pt
if (letter!=' '){

		wrap.style.fontSize = '30pt';
		capital=false;
	}
}

//if it's a point next letter should be BIG
if (letter=='.' || letter=='!' || letter=='?' ) {
		capital=true;
	}
//not adding any style to the spaces

if (letter==' '){
		newText.appendChild(wrap);
	}

	//end IF(capital)

	else {
		wrap.className = 'class'+Math.ceil(Math.random()*10);
		wrap.style.color = Color[Math.ceil(Math.random()*10)];
		newText.appendChild(wrap);
	}
}
}

function rrH1() {

	text = document.getElementById('h1').innerHTML;

	new_h1.innerHTML = '';

	for(i=0; i<text.length; i++) {

		var wrap = document.createElement('span');
		var letter = text.substring(i,i+1);

		wrap.innerHTML = letter;

//not adding any style to the spaces

if (letter==' '){
	new_h1.appendChild(wrap);
}

	else {
		wrap.className = 'class'+Math.ceil(Math.random()*10);
		wrap.style.color = Color[Math.ceil(Math.random()*10)];
		new_h1.appendChild(wrap);
	}
}
}






