const signup = document.querySelector("#signup");
signup.addEventListener("submit", (event) => {
  event.preventDefault();
  const fullname = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const error = document.querySelector("#error");

  if (!fullname || !password) {
    error.textContent = "All fields must be filled";
    return;
  }

  const saveUser = JSON.parse(localStorage.getItem("User")) 
if(!saveUser){
  error.textContent = "No account found, please sign up first";
  return;
}

if(fullname===saveUser.fullname && password === saveUser.password){
  error.textContent = `Welcome ${saveUser.fullname}`;
   signup.reset();
   window.location.href = "index.html";
    error.textContent = "Login successful";
}else{
  error.textContent = "incorrect details";
  return;
}

 
});
 