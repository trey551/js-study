var numbers = [];
var sum = 0;

// var i = 0;

// for(i = 0; i < 100; i++){
// 	numbers[i] = i;
// }
// for(i = 0; i < 100; i++){
// 	sum = sum + i;
// }
// for(i = 3; i < 100; i+=3){
// 	numbers[i] = -numbers[i]
// }
// for(i = 4; i < 100; i+=4){
// 	numbers[i] = 0;
// }

for(var i = 0; i < 100; i++){
	numbers[i] = i;
	sum = sum + i;
	if(i % 3 == 0){
		numbers[i] = -i;
	}
	if(i % 4 == 0){
		numbers[i] = 0;
	}
}


console.log(numbers);
console.log(sum);




//сделать массив числами от 0 до 100, 
//вторым циклом считаем сумму этих чисел, 
//третим циклом каждое третt число делаем отрицательным
//в четв цикле каждое четв число сделать нулем



