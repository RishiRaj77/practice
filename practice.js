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

/* This function filters students who have marks greater than 80.
function filterTopStudents(students) {
  return students.filter(function(student) {
    return student.marks > 80;
  });
}
var students = [
  { name: "John", marks: 85 },
  { name: "Jane", marks: 90 },
  { name: "Doe", marks: 78 }
];
console.log(filterTopStudents(students));
*/

/* This function calculates the total marks of all students in an array.

const totalmarks = function(students){
    var total = 0;
    for(let i=0; i<students.length; i++){
        total += students[i].marks;
    }
    return total;
} 
var students = [
    {name: "John", marks: 85},
    {name: "Jane", marks: 90},
    {name: "Doe", marks: 78}
];
console.log(totalmarks(students));
*/

// This code demonstrates array and object destructuring in JavaScript.
/*
const number = [1, 2, 3, 4, 5];

const [a,b,c,d,e] = number;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
/*

/*This code demonstrates object destructuring in JavaScript.

const student ={
    name: "John",
    age: 20,
    grade: "A"
}

const {name,age,grade} = student;
console.log(name); // John
console.log(age); // 20
console.log(grade); // A
*/

/* 
class employees{
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

displayEmployeeInfo(emp) {
    console.log(`Name: ${emp.name},
                 Age: ${emp.age},
                 Salary: ${emp.salary}`);
}
}

const emp1 = new employees("John", 30, 50000);
const emp2 = new employees("Jane", 25, 60000);
emp1.displayEmployeeInfo(emp1);
emp2.displayEmployeeInfo(emp2);
*/

/*// This code demonstrates the use of promises in JavaScript.
const mypromise = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected.");
    }
});
mypromise.then(function(data){
    console.log(data); // Output: Promise resolved successfully!
})
*/

/*// This code demonstrates the use of async/await to fetch data from an API.
async function fetchPost() {
    try{
        console.log("fetching data...");
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error("Error fetching data:", error);
    }
    
}
fetchPost();
*/

/*
function getdata(dataID,getnextdata){
    setTimeout(()=>{
        console.log("data",dataID);
        if(getnextdata){
            getnextdata();
        }
    },2000);
}
getdata(1 ,()=>{
    console.log("Data 1 fetched successfully!");
    getdata(2,()=>{
        console.log("Data 2 fetched successfully!");
        getdata(3, ()=>{
            console.log("Data 3 fetched successfully!");
            getdata(4,()=>{
                console.log("Data 4 fetched successfully!");
                getdata(5,()=>{
                    console.log("All data fetched successfully!");
                });
            });
        })
    });
});
*/
/*
function getdata(dataID,getnextdata){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("data",dataID);
        resolve("success");
        if(getnextdata){
            getnextdata();
        }
    },5000);

    });
}
getdata(1,()=>{
    getdata(2);
});
*/
/*
const getPromise = ()=>{
    return new Promise((resolve, reject) => {
    console.log("Promise is pending...");
    resolve("Promise is resolved successfully!");
    
});
}

let promise = getPromise();
promise.then((resolve)=>{
    console.log(resolve);
});

promise.catch((error)=>{
    console.log("error", error);
});
*/

function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Async function resolved!");
        }, 2000);
    });
}
console.log("fetching data 1...");
let promise = asyncFunction();
promise.then((resolve)=>{
    console.log(resolve); // Output: Async function resolved!
})

