// function getpin() {
//     const pin = generatePin() ;
//     const pinString = pin + '';
//     if (pinString.length ===4) {
//         return pin;
//     }else{
        
//        return getpin()
//     }
// }


// function generatePin() {
//     const random = Math.round(Math.random()*10000)
//     return random
// }

// document.getElementById("generatePin").addEventListener("click", function(){
//   const pin = getpin()
//   const inputValue = document.getElementById("inputValue")
//   inputValue.value = pin
// })

// document.getElementById("calculator").addEventListener("click", function(event){
//     const number = event.target.innerText;
//     if (isNaN(number)) {
       
//     }else{
//         const inputValue = document.getElementById("inputvalue");
//        let perviousvalue = inputValue.value 
//          inputValue.value = perviousvalue + number;
//     }
        
    
// })

// document.getElementById("submit").addEventListener("click", function(){
//     const inputvalue = document.getElementById("inputValue")
//     const inputtex= inputvalue.value
//     const inputValue = document.getElementById("inputvalue");
//     let perviousvalue = inputValue.value 
//     if (inputtex== inputValue.value) {
//         alert("correct")
//     }else{
//         alert("wrong")
//     }
// })
function pin() {
    const random = Math.round(Math.random()*10000)
    return random;
}

function getpin () {
    const random = pin();
    const pinStr= random + "";
    if(pinStr.length ===4){
        return random;
    }else{
        return getpin()
    }
}




document.getElementById("generatePin").addEventListener('click', function(){
    const getPin = getpin()
    const  input =document.getElementById("inputValue")
    input.value = getPin;
    const inputvalue = input.value;
    console.log(inputvalue)
});

document.getElementById("calculator").addEventListener('click',function(event){
    const number= event.target.innerText
   if(isNaN(number)){
      
   }else{
    const perviousnumber = number;
       const calo = document.getElementById("calinput")
       const calovalue = calo.value;
       calo.value =calovalue + perviousnumber
   }
})
document.getElementById("submit").addEventListener('click', () => {
    const  input =document.getElementById("inputValue")
    const inputValue =input.value;
   
    const calo = document.getElementById("calinput")
    const calovalue = calo.value;
    if (inputValue ===calovalue) {
        alert("correct")
    }else{
        alert("wrong")
    }
   
})