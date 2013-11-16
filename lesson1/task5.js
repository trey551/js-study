var arr1 = [5, 6];
var arr2 = [5, 6];

function maxSumm(){
	var summ = [];
	for(var i = 0; i < arguments.length; i++){
		summ.push(arguments[i]);
	}
	function summArrs(){
		var summArr1 = 0;
		var summArr2 = 0;
		for(var i = 0; i < summ.length; i++){
			if(i % 2 != 0){
				summArr1 = summArr1 + summ[i];
			}
			if(i % 2 == 0){
				summArr2 = summArr2 + summ[i];
			}
		}
		return summArr2;
		if(summArr1 > summArr2){
			return summArr1;
		}else if(summArr1 < summArr2){
			return summArr2;
		}else{
			
			return 'equal';
		}
	}
	return summArrs();
}

console.log(maxSumm(arr1, arr2));


// На вход функции подается 2а массива, 
// определить в каком массиве сумма элементов больше, 
// большее значение вернуть, если значения равны вернуть сроку "equal". 
// Для подсчета суммы написать отдельуню функцию, избежать копипасты кода



// запилить фишку, кол-во входных массивов может быть любым. Прочитать про массив arguments. он поможет в реализации
