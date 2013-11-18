var arr = [343, 3, 45, 65, 6, 57, 8, 321];

function bubleSort(arr){
	for(var i = 0; i < arr.length; i++){
		for (var j = i; j < arr.length; j++) {
			if(arr[i] > arr[j]){
				var exch = arr[j];
				arr[j] = arr[i];
				arr[i] = exch;
			}
		};
	}
	return arr;
}

console.log(bubleSort(arr));