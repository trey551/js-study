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

// function Person(name, age){
//     this.name = name;
//     this.age = age;

//     this.getName = function () {
//         return this.name;
//     }

//     this.setAge = function (age) {
//         if (age >= 0) {
//             this.age = age;
//         } else {
//             console.log("Invalid value; age should be positive!");
//         }
//     }
// }

// var person1 = new Person("Vasya", 16);
// var person2 = new Person("Petya", 30);

// person2.age = -20;

// person2.setAge(-20);

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

function Auto(mark, autoClass, year, mileage, autoColor) {
    this.getMark = function(){
        return this.mark
    }
    this.getAutoClass = function(){
        return this.autoClass
    }
    this.getYear = function(){
        return this.year
    }
    this.getMileage = function(){
        return this.mileage
    }
    this.getAutoColor = function(){
        return this.autoColor
    }
    this.setMark = function(mark){
        for(var i = 0; i < config.permittedModels.length; i++){
            if(mark == config.permittedModels[i]){
                this.mark = mark;
                return false;
            }
        }
        console.log('This model is not in the list');
    }
    this.setMileage = function(mileage){
        if(mileage >= 0){
            this.mileage = mileage;
        }else{
            console.log('Error! The mileage must bu positive');
        }
    }
}

var bmw = new Auto(config.permittedModels[0], config.permittedClass[0], 1990, 120000, 'red');
var opel = new Auto(config.permittedModels[1], config.permittedClass[1], 2000, 59999, 'green');
var lada = new Auto(config.permittedModels[2], config.permittedClass[2], 2013, 1000, 'gold');

lada.setMark('qq');
lada.setMileage(-44);


// Написать класс для геометрический фигур
// продумать какие параметры логично передать в конструктор
// написать методы для определиня площади и периметра, геттеры/сеттеры




// function figures(figName, figHeight, figWidth){
//     this.getName = function(){
//         return this.figName;
//     }
//     this.getHeight = function(){
//         return this.figHeight;
//     }
//     this.getWidth = function(){
//         return this.figWidth;
//     }
//     this.getPerimetr = function(){
//         return this.figPerimetr;
//     }
//     this.getArea = function(){
//         return this.figArea;
//     }
//     this.setPerimetr(figHeight, figWidth){
//         this.figPerimetr = (figHeight + figWidth) * 2;
//     }
//     this.setArea(figHeight, figWidth){
//         this.setArea = figHeight * figWidth;
//     }
// }

// var square = new figures('square', 20, 20);
// var rectangle = new figures('rectangle' 20, 40);

