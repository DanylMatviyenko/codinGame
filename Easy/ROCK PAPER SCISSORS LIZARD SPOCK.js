/*jshint esversion:6*/
const N = parseInt(readline());
let fightersArray = [];
const rools = {
	R: ['L', 'C'],
    P: ['R', 'S'],
    C: ['L', 'P'],
    L: ['S', 'P'],
    S: ['C', 'R'],
};

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    fightersArray.push({
    	number: parseInt(inputs[0]),
    	sign: inputs[1],
    	defeated: []
    });
}
for(; fightersArray.length > 1;) {
	fightersArray.push(fight(fightersArray.shift(), fightersArray.shift()));
}
function fight(first, second) {
	let winner;
	let looser;
	if(first.sign === second.sign) {
		if(first.number < second.number) {
			winner = first;
			looser = second;
		}else {
			winner = second;
			looser = first;
		}
	}else if(rools[first.sign].includes(second.sign)) {
		winner = first;
		looser = second;
	}else {
		winner = second;
		looser = first;

	}

	winner.defeated.push(looser.number);
	return winner;	
}

console.log(fightersArray[0].number);
console.log(fightersArray[0].defeated.join(' '));


