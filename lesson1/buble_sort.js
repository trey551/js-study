// var arr = [343, 3, 45, 65, 6, 57, 8, 321];

// function bubleSort(arr){
// 	for(var i = 0; i < arr.length; i++){
// 		for (var j = i; j < arr.length; j++) {
// 			if(arr[i] > arr[j]){
// 				var exch = arr[j];
// 				arr[j] = arr[i];
// 				arr[i] = exch;
// 			}
// 		};
// 	}
// 	return arr;
// }

// console.log(bubleSort(arr));




//Функция на вход получает массив таких вот объектов, а на выход ты должен
//отсортировать их бабл сортом по возрасту, также должен поддерживаться параметр, 
//сортировать по возрастанию или убыванию.

var people = [
	{
	    name:'Vasya',
	    age:25
	},
	{
	    name:'Petya',
	    age:20
	},
	{
	    name:'Kolya',
	    age:18
	},
	{
	    name:'Vitya',
	    age:36
	},
];


function ageSort(people){

	for(var i = 0; i < people.length; i++){
		for(var j = i; j < people.length; j++){
			if(people[i].age > people[j].age){
				var exch = people[j];
				people[j] = people[i];
				people[i] = exch;
			}
		}
	}

	return people;
}

console.log(ageSort(people));