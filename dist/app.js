
 let model =  document.getElementById("success-model");
 let mainModel =  document.getElementById("main-model");

document.getElementById("myForm").addEventListener("submit", (e)=>{
    e.preventDefault();
    const userInput = document.getElementById("userEmail");
    const errorMsg = document.getElementById("error-msg");
     const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //  emailRegExp.test(userInput.value);
     if (emailRegExp.test(userInput.value) == true && userInput.value !== '') {
      userInput.classList.remove("error")
        errorMsg.classList.add("hidden");
        model.classList.remove("hidden");
        mainModel.classList.add("hidden");
        userInput.value = ''
      
           } else {
            errorMsg.classList.remove("hidden");
            userInput.classList.add("error");
            
     }
})
document.getElementById("close-btn").addEventListener("click",()=>{
   model.classList.add("hidden");
   mainModel.classList.remove("hidden");
});
