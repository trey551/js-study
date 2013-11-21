//var person1 = {
//    name: "Vasya",
//    age: 16
//}
//
//var person2 = {
//    name: "Petya",
//    age: 30
//}

//class person

function Person(name, age){
    this.name = name;
    this.age = age;

    this.getName = function () {
        return this.name;
    }

    this.setAge = function (age) {
        if (age >= 0) {
            this.age = age;
        } else {
            console.log("Invalid value; age should be positive!");
        }
    }
}

var person1 = new Person("Vasya", 16);
var person2 = new Person("Petya", 30);

person2.age = -20;

person2.setAge(-20);

// Написать класс автомобилей

// Марка
// Класс авто
// Год выпуска
// Пробег
// Цвет



// getters/setters для каждого свойства
//+ валидация
// пробег строго положительный, доступные марки авто хранятся в массиве ['bmw', 'opel', 'lada'];
// Классы задаются тоже натсроечным массивом ["A", "B", "S"];

var config = {
    permittedModels: ['bmw', 'opel', 'lada'],
    permittedClass: ["A", "B", "S"]
}

function Auto(mark, autoClass) {


}

// Написать класс для геометрический фигур
// продумать какие параметры логично передать в конструктор
// написать методы для определиня площади и периметра, геттеры/сеттеры




