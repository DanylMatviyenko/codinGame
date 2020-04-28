
/*jshint esversion: 6*/

const operation = readline();
const pseudoRandomNumber = parseInt(readline());

const message = readline();

function caesarShift (number, string) {
	let newString = '';
	for(let i = 0; i < string.lrngth; i++) {
		newString += String.fromCharCode(string.charCodeAt(i) + number);
		number = newString.charCodeAt(i) - 65;
	}
}

console.log('message');