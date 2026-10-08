let myVar;
myVar = "Apple";

myVar = "Orange";

let num;
num = 5555;
num = 7777;

let arr =[1,2,3,4,5,6,7,8,9,10];
// console.log(arr[1])
// console.log(arr[3]);
// console.log(arr[5]);
// console.log(arr[7]);

console.log(arr.push(11,12,13,14,15,16,17,18,19,20));
console.log(arr.shift())
console.log(arr.shift());
console.log(arr)
console.log(arr.unshift(200));
console.log(arr.unshift(100));
console.log(arr)




const signup = document.querySelector("#signup")
signup.addEventListener("submit", (event)=>{
    event.preventDefault()
   const fullname = document.querySelector("#username").value; 
   const email = document.querySelector("#email").value;
   const password = document.querySelector("#password").value;
    const password2 = document.querySelector("#password2").value;
    const error = document.querySelector("#error");
    error.textContent = "";
    error.style.color = "red";
    error.style.fontSize = "20px";

   if(!fullname || !email || !password || !password2){
    error.textContent = "All fields must be filled";
    error.style.color = "red";
    return;
   }
if(password !== password2){
    error.textContent = "Passwords do not match";
    error.style.color = "purple";
    return
}
   if(password.length < 5){
    error.textContent = "Password must be at least 5 characters long";
    return;
   }
   
const user = {
    fullname: fullname,
    email: email,
    password: password,
    password2: password2
}

localStorage.setItem("User", JSON.stringify(user))

   alert("Account created successfully")
   signup.reset()
   window.location.href = "login.html"
}
)
