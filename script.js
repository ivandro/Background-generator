// Create an object and an array which we will use in our
// facebook exercise. 

// 1. Create an object that has properties "username" and 
//"password". Fill those values in with strings.
var userInfo = {
	username: "Bigivel",
	password: "fhqfhq23"
};


// 2. Create an array which contains the object you have
// made above and name the array "database".
var database = [userInfo];

// 3. Create an array called "newsfeed" which contains
// 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Ivandro",
		timeline: "today"
	},
	{
		username: "Ruben",
		timeline: "tomorrow"
	},
	{
		username: "Denilson",
		timeline: "yesterday"
	}
];


var user = {
	name: "John",
	age: 34,
	hobby: "Soccer",
	isMarried: false
};

var list = ["John", 34, "Soccer", false];

// Exercise 6
// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.
array.shift();

// 2. Sort the array in order.
array.sort();

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");

// 4. Remove "Apples" from the array.
array.shift();

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();

//you should have at the end:
["Kiwi", "Oranges", "Blueberries"]

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
console.log(array2[1][1][0]);




var listOfAnimals = ["tiger", "cat", "bear", "bird"];

var functionList = [function apple() {console.log("apple");},
	function orange() {console.log("orange");},
	function strawberry() {console.log("strawberry");}];









//checkDriverAge();

var checkDriverAge2 = function() {
	var age = prompt("What is your age?");

	if(Number(age) < 18) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if(Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}else if(Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	}

}


function checkDriverAge(age) {
	if(Number(age) < 18) {
		console.log("Sorry, you are too young to drive this car. Powering off");
	} else if(Number(age) === 18) {
		console.log("Congratulations on your first year of driving. Enjoy the ride!");
	}else if(Number(age) > 18) {
		console.log("Powering On. Enjoy the ride!");
	}
}