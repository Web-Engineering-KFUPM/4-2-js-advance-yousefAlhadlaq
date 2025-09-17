/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
let Students={
      firstName:"Yousef",
      lastName:"Alhadlaq", 
      gpa:4.0,
      get fullName(){
         return `${this.firstName} ${this.lastName}`;
      },
      set updateGpa(newGpa){
         if(newGpa>=0.0 && newGpa<=4.0){
            this.gpa=newGpa;
         }else{
            console.log("Invalid GPA");
         }
      }
};
console.log(Students.fullName);
Students.updateGpa=3.5;
console.log(Students.gpa);
Students.updateGpa=5.0; // Invalid GPA
console.log(Students.gpa); // 3.5


// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
let courseMap={
   "SWE206":"Introduction to Software Engineering",
   "MATH101":"Calculus I",
   "PHYS101":"Physics I",}
for(let courseCode in courseMap){
   console.log(`${courseCode} : ${courseMap[courseCode]}`);
}

// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/

let myString="Hello, World!";
console.log(`String: ${myString}`);
console.log(`Length: ${myString.length}`);
console.log(`Character at index 0: ${myString.charAt(0)}`);
console.log(`Character at index 7: ${myString.charAt(7)}`);
console.log(`Character at last index: ${myString.charAt(myString.length - 1)}`);
// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/
let currentDate=new Date();
let day=currentDate.getDate();
let month=currentDate.getMonth(); // 0-11
let year=currentDate.getFullYear();
console.log(`Current Date: ${currentDate}`);
console.log(`Year: ${year}`);
console.log(`Day: ${day}`);
console.log(`Month: ${month + 1}`); // Adding 1 to display month in 1-12 format



// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
let numbersArrays=[21, 7, 99, 10, 5, 1, 8, 55, 66, 34];
let minNumber=Math.min(...numbersArrays);
let maxNumber=Math.max(...numbersArrays);
console.log(`Numbers: ${numbersArrays}`);
console.log(`Minimum Number: ${minNumber}`);
console.log(`Maximum Number: ${maxNumber}`);

// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/


function findMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Array must be non-empty.");
  }
  return Math.max(...arr);
}
try {
   let emptyArray = [3,1,5,7,9];
   let max = findMax(emptyArray);
   console.log(`Maximum value: ${max}`);
} catch (e) {
  // Handle or log the error here
  console.log(`Error: ${e.message}`);
} finally {
  // This block always runs
  console.log("Execution completed.");
}

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/
const words = ["ban", "babble", "make", "flab"];
let pattern=/ab/;
words.forEach(word=>{
   if(pattern.test(word)){
      console.log(`${word} matches!`);
   }
});

// End of Advance JavaScript Lab — good luck!
