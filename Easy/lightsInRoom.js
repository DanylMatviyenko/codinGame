/*jshint esversion: 6*/
const N = parseInt(readline());
const L = parseInt(readline());
let fieldArr = [];
let coords = [];
let zeroLights = 0;
for (let i = 0; i < N; i++) {
    let line = readline().replace(/ /g, '');
    fieldArr[i] = [];
    for(let k = 0; k < line.length; k++) {
    	let sym = line[k];
        if(sym == 'C') {
            sym = L;
            coords.push([i,k]);
        }
        fieldArr[i].push(sym);
    }
}


for(let i = 0; i < coords.length; i++) {
	changeNear(fieldArr,coords[i],fieldArr[coords[i][0]][coords[i][1]]);
}

function changeNear(arr,coord, number) {
		let checkArray = [[coord[0] - 1, coord[1]-1], [coord[0] - 1, coord[1]], [coord[0] - 1, coord[1]+1], [coord[0], coord[1]-1], [coord[0], coord[1]+1], [coord[0] + 1, coord[1]-1], [coord[0]+1, coord[1]], [coord[0] + 1, coord[1]+1],];
		checkArray = checkArray.filter(function(elem) {
			return elem[0] >= 0 && elem[0] < arr.length && elem[1] >= 0 && elem[1] < arr.length;
		});
		for(let near of checkArray) {
			if( arr[near[0]][near[1]] === 'X' || arr[near[0]][near[1]] < number - 1) {
				arr[near[0]][near[1]] = number - 1;
				coords.push(near);
			}
		}
}
for(let str of fieldArr) {
	for (let elem of str) {
		if (elem === 'X' || elem <= 0 ) {
			zeroLights++;
		}
	}
}
console.log(zeroLights);