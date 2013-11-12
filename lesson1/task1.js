// var numbers = [];
// var sum = 0;

// for(var i = 0; i < 100; i++){
// 	numbers[i] = i;
// 	sum = sum + i;
// 	if(i % 3 == 0){
// 		numbers[i] = -i;
// 	}
// 	if(i % 4 == 0){
// 		numbers[i] = 0;
// 	}
// }


// console.log(numbers);
// console.log(sum);


function numArr(start, end, makeZero){
	var numbers = [];
	for(var i = start; i < end; i++){
		if(i % 2 != 0 || makeZero == true && i % 2 == 0){
			numbers[i] = i;
		}else{
			numbers[i] = 0;
		}
	}
	return numbers;
}

var result = numArr(0, 50 , false);

console.log(result);




//сделать массив числами от 0 до 100, 
//вторым циклом считаем сумму этих чисел, 
//третим циклом каждое третье число делаем отрицательным
//в четв цикле каждое четв число сделать нулем


//написать функцию, которая принимает диапазон значений start end
//makeEvenNumbersZero boolean flag делать ли четные числа нулями.
//return array этих вот чисел.