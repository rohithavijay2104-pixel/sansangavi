//spread operator
//let
let studentcount = 10;
studentcount = 11;

console.log("student count:",studentcount);

//const
const collegename = "VETIAS";

console.log("college Name:",collegename);

//Template literals
let studentname="rohithavijay";

console.log(`welcome ${studentname} to ${collegename}`);

//object
const student = {
    name: "rohithavijay",
    age: 20,
    department: "ai&ds"
};
console.log(student);

//destructuring
const {name,age,department} = student;

console.log("Name:",name);
console.log("Age:",age);
console.log("department:",department);

//arrow function
const displaystudent = () => {
    console.log (`student Name: ${name}`);
};
displaystudent();

//arrays
const students  =[
    "ROHITHAVIJAY",
    "PRIYA",
    "AFIYA"
];

console.log(students);

//spread operator
const updatedstudents =[
    ...students,
    "sangavi"
];

console.log(updatedstudents);

// // rest operator
function maximummarks(...marks){

    let max = Math.max(...marks);

    return max;
}


console.group("maximum marks:",maximummarks(89,90,100));