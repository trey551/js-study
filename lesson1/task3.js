var arr = [22, 3, 67, 78, 23, 20, 78];

function arrValue(arr, flag){
	var min = arr[0];
	var max = min;
	for (i = 0; i < arr.length; ++i) {
		if (arr[i] > max){
			max = arr[i];
		}
		if (arr[i] < min){
			min = arr[i];
		}
	}
	if(flag){
		result = max;
	}else{
		result = min;
	}
	return result;
}

console.log(arrValue(arr, true));





// Написать функцию, принимает массив и булевый флаг,
// в зависимости от флага находит
// либо минимальное либо максимальное значение в массиве и возвращает его.
// НО если максимальное или минимальное значение
// в массиве встречается 2а или более раз ворвращает null