const form = document.querySelector(".form");
const radioInputs = document.querySelectorAll(".radio-input");
const thanYouCard = document.querySelector(".thank-you-container");
const ratingCard = document.querySelector(".rating-container");
const ratingNum = document.querySelector("#rating-number");
// console.log(ratingNum);
let ratingVal;

console.log(radioInputs);

radioInputs.forEach((input) =>{
    input.addEventListener("change", (e) =>{
        ratingVal = e.target.value;
    });
});
form.addEventListener("submit", e =>{
    e.preventDefault();
    if(!ratingVal){
        alert("Rating Card Says: \n \n Please Rate Us😊😊")
    }
    else{
        ratingCard.style.display ="none";
        thanYouCard.style.display ="block";
        
        ratingNum.innerText =`You selected ${ratingVal} out of 5`
    }
    
})