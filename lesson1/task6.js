var arr = [4, 74, 847, 4, 8];

function selSort(arr){
	var result =[];

	for(var i = 0; i < arr.length; i++){
		var min =  arr[i];
		var indexMin = i;
		for(var j = 0; j < arr.length; j++){
			if(arr[j] < min || min === undefined){
				min = arr[j];
				indexMin = j;
			}
		}
		result.push(min);
		delete arr[indexMin];
	}
	return result;
}

console.log(selSort(arr));