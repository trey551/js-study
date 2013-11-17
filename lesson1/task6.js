// var arr = [4, 74, 847, 4, 8];

// function selSort(arr){
// 	var result =[];

// 	for(var i = 0; i < arr.length; i++){
// 		var min =  arr[i];
// 		var indexMin = i;
// 		for(var j = 0; j < arr.length; j++){
// 			if(arr[j] < min || min === undefined){
// 				min = arr[j];
// 				indexMin = j;
// 			}
// 		}
// 		result.push(min);
// 		delete arr[indexMin];
// 	}
// 	return result;
// }

// console.log(selSort(arr));

//inefficient method


var arr = [4, 454, 23, 4, 78, 51];

function sortArr(arr){
	for(var i = 0; i < arr.length; i++){
		var min = i;
		for(var j = i; j < arr.length; j++){
			if(arr[j] < arr[min]){
				min = j;
			}
		}
		var exch = arr[i];
		arr[i] = arr[min];
		arr[min] = exch;
	}
	return arr;
}
console.log(sortArr(arr));

//effective method
