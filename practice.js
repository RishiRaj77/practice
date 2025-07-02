/*This function finds the maximum value in an array.
function findmax(arr){
    if(arr.length===0){
         return undefined;
    }

let max = arr[0];

for(let i =1; i< arr.length; i++){
    if(arr[i]>max){
        max= arr[i];
    }
}
return max;
}

console.log(findmax([1,3,5,6]));
*/

/*This function filters employees with a salary greater than a specified minimum salary.

function highEarn(emp,minsal){
    return emp.filter(function(e){
        return e.salary > minsal;
    });
}
var emp =[
    {name: "John", salary: 50000},
    {name: "Jane", salary: 60000},
    {name: "Doe", salary: 70000},
    {name: "Smith", salary: 40000}
];
console.log(highEarn(emp, 55000));
*/

/* This function calculates the total sales from an array of sales figures.

function totalsales(sales){
    var total = 0;
    for(let i=0; i<sales.length; i++){
        total = total + sales[i];
    }
    return total;
}
var sales = [100, 200, 300, 400, 500];
console.log(totalsales(sales));
*/

/*This code defines an object representing a student and logs the student's grade to the console.

let students ={
    name: "John",
    age: 20,
    grade: "A",
}

console.log(students.grade); 
*/

/*This function calculates the grade based on marks.
const calculateGrade = (marks)=>{
    if(marks >=90){
        return "A";
    }else if(marks >=80){
        return "B";
    }else{
        return "C";
    }
}
console.log(calculateGrade(85));
*/

/*This function increases each mark in an array by 10 and returns the updated array.
const increasemarks =function(marks){
    for(let i=0; i<marks.length; i++){
    marks[i] = marks[i]+10;
}
return marks;
}

var marks = [50, 60, 70, 80];
console.log(increasemarks(marks))
*/

/*This function filters students who have marks greater than or equal to 50.

const students = function(marks) {
    return marks.filter(function(mark) {
        return mark >= 50;
    });

};
var marks = [45, 55, 65, 35, 75];
console.log(students(marks));
*/

/*
const students = function(marks) {
    return marks.map(function(mark) {
        if (mark >= 50) {
            return "a";
        }else {
            return "b";
        }
    });
}
var marks = [45, 55, 65, 35, 75];
console.log(students(marks));
*/

/*// This function filters students who have marks greater than 75.
const students = function(marks){
    return marks.filter(function(mark){
        return mark > 75;
    });
}
 var marks = [45, 55, 65, 35, 75, 80, 90];
console.log(students(marks));
*/

/*This code calculates the total marks of all students in an array using the reduce method.

var marks = [45, 55, 65, 35, 75, 80, 90];
const students = marks.reduce(function(sum,currentMarks){
    return sum + currentMarks;
    
},0);

console.log(students);
*/
/*
const findtopper = function(students) {
    return students.reduce(function(topper, current) {
        if (current.marks > topper.marks) {
            return current;
        } else {
            return topper;
        }
    });
}
var students = [
    {name: "John", marks: 85},
    {name: "Jane", marks: 90},
    {name: "Doe", marks: 78}
];
console.log(findtopper(students));
*/
const topper = function(marks){
    return marks.filter(function(mark){
        return student.marks > 85;
    });
}
var student = [
    {name: "John", marks: 85},
    {name: "Jane", marks: 90},
    {name: "Doe", marks: 78}
];

console.log(topper(student));
