"use strict";

/* 

Coding challenge # 01
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass/height ** 2 OR mass / (height * height) (mass in kg and height in meter).

Your tasks: 
1. Store Mark's and John's mass and height in variables 
2. Calculate both their BMIs using the formula (you can even implement both versions) 
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John. 

Test data:
•	Data 1: Marks weights 78 kg and are 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
•	Data 2: Marks weights 95 kg and are 1.88 m tall. John weighs 85 kg and is 1.76 m tall. 

GOOD LUCK

*/

let Mark_mass = 78;
let John_mass = 92;

let Mark_height = 1.69;
let John_height = 1.95;

let JohnBMI = John_mass / John_height ** 2;
const MarkBMI = Mark_mass / Mark_height ** 2;

console.log(JohnBMI, MarkBMI);

const markHigherBMI = MarkBMI > JohnBMI;
console.log(markHigherBMI);

const JohnHigherBMI = JohnBMI > MarkBMI;
console.log(JohnHigherBMI);
