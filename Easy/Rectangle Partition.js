/*jshint esversion:6*/
var inputs = readline().split(' ');
const w = parseInt(inputs[0]);
const h = parseInt(inputs[1]);
const countX = parseInt(inputs[2]);
const countY = parseInt(inputs[3]);
var inputs = readline().split(' ');
let xMeasurments = [0];
let yMeasurments = [0];

for (let i = 0; i < countX; i++) {
    const x = parseInt(inputs[i]);
    xMeasurments.push(x);
}
xMeasurments.push(w);
var inputs = readline().split(' ');
for (let i = 0; i < countY; i++) {
    const y = parseInt(inputs[i]);
    yMeasurments.push(y);
}
yMeasurments.push(h);

function allPossibleSquares(arr) {
	let result = [];
	for(; arr.length !== 1;) {
		for(let k = arr.length - 2; k >= 0; --k) {
			result.push(arr[arr.length - 1] - arr[k]);
		}
		arr.pop();
	}
	return result;
}

const ySquares = allPossibleSquares(yMeasurments);
const xSquares = allPossibleSquares(xMeasurments);
let answerList = [];
ySquares.map((elem) => {
	for(let value of xSquares) {
		if(elem == value) {
			answerList.push(elem);
		}
	}
});

console.log(answerList.length);
