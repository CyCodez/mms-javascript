// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// arr.reverse();
// arr.push(100,200,300,400,500);
// arr.unshift(1000,900,800,700,600);
// arr.pop
// arr.
// console.log(arr);


// let person = {
//     name: "Mr Cyrus",
//     age: "1000",
//     favourite_sport:["Football", "Cricket", "Basketball"],
// }
// console.log(person.name);
// console.log(person.favourite_sport[1]);
// console.log(person.favourite_sport[0])

// function Add_Number(a, b){
//     return a + b;
// }

// console.log(Add_Number(5, 10));


// function Add(a,b,c,d,e,f){
//     return (a+b+c)-(d*e/f);
// }
// console.log(Add(1,2,3,4,5,6));

// function sport(params, params2){
//   console.log("Real mandrid legend is " + params+ " " + params2);
// }
// console.log(sport("Cristian", "Ronaldo"));


//THis a function expression 
let footballAgent = function (params){
    return params
}
console.log(footballAgent("Cristiano Ronaldo is the best footballer in the world"));

//anonymousFunction functuon does not have a name
// let anonymousFunction = function();
console.log()

// let first = 5
// let second = 6

// console.log(first > second)

let password = "1234"

console.log(password >= 50)
console.log(password !== 1234)

let macbook = function(laptop){
    console.log("One of the best laptop to use is  " + laptop);
}

console.log(macbook("Macbook "));
console.log(macbook("dell"));
console.log(macbook("Hp"));

let days = "Monday"

// if (days === "Monday"){
//     console.log("Today is Monday");
// }else if (days === "Tuesday"){
//     console.log("Today is Tuesday");
// }else if (days === "Wednesday"){
//     console.log("Today is Wednesday");
// }else if (days === "Thursday"){
//     console.log("Today is Thursday");
// }else if (days === "Friday"){
//     console.log("Today is Friday");
// }else if (days === "Saturday"){
//     console.log("Today is Saturday");
// }else if (days === "Sunday"){
//     console.log("Today is Sunday");
// }else{
//     console.log("days not found");
// }

switch(days){
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Day not found");
}

let score 

if(score <= 49){
    console.log("Failed");
}else if(score >= 50 && score <= 59){
    console.log("pass");
}else if(score >= 60 && score <= 69){
    console.log("Good");
}else if(score >= 70 && score <= 79){
    console.log("Excellent");
}

let color = "pink"

// switch(color){
//     case "red":
//         console.log("Stop immediately");
//         break;
//     case "yellow":
//         console.log("Get ready to go");
//         break;
//     case "green":
//         console.log("Go ahead");
//         break;
//     default:
//         console.log("Color not found");
// }
if(color === "red"){
    console.log("Stop immediately");
}
if(color === "yellow"){
    console.log("Get ready to go");
}
if(color === "green"){
    console.log("Go ahead");
}

let age = 18;
switch(true){
    case (age >= 18):
        console.log("Ok");
        break;
    case (age <= 18):
        console.log("Not okay");
        break;
    default:
        console.log("Age not found");
}
// let arr = [1,2,3,4,5,6,7,8,9,10];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

let fruits = ["Apple", "Banana", "Mango", "Pineapple", "Orange", "Grapes", "Watermelon", "Strawberry", "Blueberry"];
// for(let i = fruits.length - 1; i >= 0; i--){
//     console.log(fruits[i]);
// }

fruits.map((item,index) => {
console.log(item, index)
})

function myFunction(){
    let name = "Cyrus";
    console.log(name);
}

