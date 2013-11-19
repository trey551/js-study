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




//Функция на вход получает массив таких вот объектов, а на выход ты должен
//отсортировать их бабл сортом по возрасту, также должен поддерживаться параметр, 
//сортировать по возрастанию или убыванию.


var citizen1 = {
    name:'Vasya',
    age:25
}
var citizen2 = {
    name:'Petya',
    age:20
}





var citizen = {
    name:'Vasya',
    age:25,
    name:'Petya',
    age:20
}