/*
1. Each employee array should become an instance of an object (probably called something like Person).
2. This will also mean that you need to adjust the rest of the logic to accept properties rather than array index.
3. The original employees array that was used to store each person does not need to be converted to an object. Meaning that you can put your new Person objects inside of an array.
4. Once you are complete, post to GitHub and submit via this app.
*/

var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];
// this array does not need to be converted to an object

function Person (empName, empNumber, salary, rating) {
	this.empName = empName;
	this.empNumber = empNumber;
	this.salary = salary;
	this.rating = rating;
}

var employeesObjects = [];

function arrayToObjects (listArray) {
	for (var i = 0; i < listArray.length; i++) {
		employeesObjects[i] = new Person(listArray[i][0],
			listArray[i][1], listArray[i][2], listArray[i][3]);
	}  //function that takes list of employees, creates array "employeesObjects"
}
arrayToObjects(employees);   //calling the function
//console.log(employeesObjects);

var empComp = [];  //declare empty array to hold employee compensation info
var sti = 0;			 // declare global variable sti (STI)

employeesObjects.forEach(function(emp) {
	calculateComp(emp);
});
function calculateComp(peon) {
		switch (peon.rating) {
			case 0:
			case 1:
			case 2: sti = 0;
			break;
			case 3: sti = 0.04;
			break;
			case 4: sti = 0.06;
			break;
			case 5: sti = 0.10;
			break;
			}
		if (peon.empNumber.length == 4) {
			sti += 0.05;
		}
		if (peon.salary > 65000) {
			sti -= 0.01;
		}
		if (sti > 0.13) {
			sti = 0.13;
		}
	var empSTI = {};
	empSTI.name = peon.empName;
	empSTI.sti = sti;
	empSTI.newSalary = parseInt(peon.salary) + (peon.salary * sti);
	empSTI.bonus = Math.round(peon.salary * sti);
	empComp.push(empSTI);
}

console.log(empComp);
