var arr1 = [10, 40, 33];
var arr2 = [5, 6];

function maxSumm(arr1, arr2){
	var summ1 = 0;
	for(var i = 0; i < arr1.length; i++){
		summ1 = summ1 + arr1[i];
	}
	return summ1;
}

console.log(maxSumm(arr1, arr2));


// На вход функции подается 2а массива, 
// определить в каком массиве сумма элементов больше, 
// большее значение вернуть, если значения равны вернуть сроку "equal". 
// Для подсчета суммы написать отдельуню функцию, избежать копипасты кода