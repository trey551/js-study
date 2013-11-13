var arr1 = [1, 3, 5, 7];
var arr2 = [2, 4, 6, 8];

function crosingArrs(arr1, arr2){
	var arr3 = [];
	for(var i= 0, a = 0; i < arr1.length || a < arr2.length; i++, a++){
			arr3.push(arr1[i], arr2[a]);
	}
	return arr3;
}

console.log(crosingArrs(arr1, arr2));













// На вход функции подается 2а массива. 
// На выход функция должна отдать один общий массив. 
// Числа в новом массивле идут следующим образом - [a[0, b[0],a[1],b[1],a[2],b[2]..a[n], b[n]]
// TODO: запилить возможность массивов разной длины
