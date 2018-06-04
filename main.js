/*var person = {
	name: "Jan Nowak",
	age: 30,
	isMarried: false,
	sayHello: function() {
		console.log("Hi, my name is " + this.name);
    }
};

person.sayHello();
*/
//Funkcja konstruująca (klasa):
/*
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.sayHello = function() {
		console.log("Hi, my name is " + this.name);
    };
};

//Przykład użycia "klasy" do stworzenia nowych obiektów:

var person1 = new Person("Jan Nowak", 35)
var person2 = new Person("Adam", 32)
var person3 = new Person("Ewa", 18)

person2.sayHello()
*/
//Przykładowy prototyp wygląda tak:

/*    console.log("This phone's model is called " + this.model + ".");
};

iPhone6.logModel();
*/
/*
function Smartphone(brand, model) {
	this.brand = brand;
	this.model = model;
	this.logModel = function() {
		console.log(this.model);
	}
}

iPhone6.logModel();

function Car(color, brand) { //construction functions are capitalized!
	this.color = color; //creating a new object, we can specify its initial value using the color property
	this.brand = brand || 'ford'; //if no brand is given at this point, the default value is 'ford'
}
*/

function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
var iPhone6S = new Phone("Apple", 2250, "silver");
var SamsungGalaxyS6 = new Phone("Samsung", 1800, "black");
var myPhoneHammer = new Phone("MyPhone", 1200, "red");

myPhoneHammer.printInfo();

