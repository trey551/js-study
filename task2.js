var arr = [31, 41, 59, 5, 26, 41, 58, 21];
var number = 5;
var numIndex;

for(var i = 0; i < arr.length; i++){
	if(arr[i] == number){
		numIndex = i;
	}
}

console.log(numIndex);

//определить индекс number в массиве