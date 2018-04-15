//VARS
var loopInterval = 100;


//FUNCTIONS

function setup() {//first initialization setup
    loop();


} window.onload = setup();


function loop() {
	setInterval(function(){//game loop

    	
        console.log("loop");
    }, loopInterval); //loop speed
}
//Bits
function bBit0() {
	var bit = document.getElementById("0");
	if(bit0 == 0) {
		bit.style.background = '#42a327'
		bit0 = 1;

	}else{
		bit.style.background = '#b52b2b'
		bit0 = 0;
	}
}
function bBit1() {
	var bit = document.getElementById("1");
	if(bit1 == 0) {
		bit.style.background = '#42a327'
		bit1 = 1;

	}else{
		bit.style.background = '#b52b2b'
		bit1 = 0;
	}
}
function bBit2() {
	var bit = document.getElementById("2");
	if(bit2 == 0) {
		bit.style.background = '#42a327'
		bit2 = 1;

	}else{
		bit.style.background = '#b52b2b'
		bit2 = 0;
	}
}
function bBit3() {
	var bit = document.getElementById("3");
	if(bit3 == 0) {
		bit.style.background = '#42a327'
		bit3 = 1;

	}else{
		bit.style.background = '#b52b2b'
		bit0 = 3;
	}
}
function bBit4() {
	var bit = document.getElementById("4");
	if(bit4 == 0) {
		bit.style.background = '#42a327'
		bit4 = 1;

	}else{
		bit.style.background = '#b52b2b'
		bit4 = 0;
	}
}
function bBit5() {
	var bit = document.getElementById("5");
	if(bit5 == 0) {
		bit.style.background = '#42a327'
		bit5 = 1;

	}else{
		bit.style.background = '#b52b2b'
		bit5 = 0;
	}
}
function bBit6() {
	var bit = document.getElementById("6");
	if(bit6 == 0) {
		bit.style.background = '#42a327'
		bit6 = 1;

	}else{
		bit.style.background = '#b52b2b'
		bit6 = 0;
	}
}
function bBit7() {
	var bit = document.getElementById("7");
	if(bit7 == 0) {
		bit.style.background = '#42a327'
		bit7 = 1;

	}else{
		bit.style.background = '#b52b2b'
		bit7 = 0;
	}
}

function compileResult() {
	result = 0;
	if(bit0 == 1) {
		result = result + bitEq0;
	}
	if(bit1 == 1) {
		result = result + bitEq1;
	}
	if(bit2 == 1) {
		result = result + bitEq2;
	}
	if(bit3 == 1) {
		result = result + bitEq3;
	}
	if(bit4 == 1) {
		result = result + bitEq4;
	}
	 if(bit5 == 1) {
		result = result + bitEq5;
	}
	if(bit6 == 1) {
		result = result + bitEq6;
	}
	if(bit7 == 1) {
		result = result + bitEq7;
	}

	document.getElementById('result').innerHTML = 'Result: ' + result;
	compileBinary();
} 

function compileBinary() {
	binaryResult = binaryResult + bit0;
	binaryResult = binaryResult + bit1;
	binaryResult = binaryResult + bit2;
	binaryResult = binaryResult + bit3;
	binaryResult = binaryResult + bit4;
	binaryResult = binaryResult + bit5;
	binaryResult = binaryResult + bit6;
	binaryResult = binaryResult + bit7;
	document.getElementById('bitResult').innerHTML = 'Binary: ' + binaryResult;
}