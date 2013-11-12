var arr = [31, 41, 59, 5, 26, 41, 58, 21];
// var number = 5;
// var numIndex;

// for(var i = 0; i < arr.length; i++){
// 	if(arr[i] == number){
// 		numIndex = i;
// 	}
// }

// console.log(numIndex);

function findNum(arr, number){
	var result = null;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] == number){
			result = i;
			break;
		}
	}
	return result;
}

var numIndex = findNum(arr, 55);
console.log(numIndex);

//определить индекс number в массиве



//задание с поиском индекса, завернуть в функицю, которую удобно использовать.
//продумать параментры которые ей понадобятся.
//и если элемент не найдет возвращать null
//написасть саму функцию и несколько примеров её использования