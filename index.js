 
// ----4 no requirements

let heartCount = document.getElementById("heart-count");
let count = parseInt(heartCount.innerText) || 0;

let heartIcons = document.querySelectorAll(".heart-icon");

for (let i = 0; i < heartIcons.length; i++) {
  heartIcons[i].onclick = function() {
    count++;
    heartCount.innerText = count;
  }
}


// -------------5 no reusable function

// document.getElementById('call-btn1').addEventListener('click',function(e){
// e.preventDefault(e)

// let coinCount = parseInt(document.getElementById("coin-count"));
//   let count2 = 0
//   let coinIcon = document.querySelectorAll(".call-icon");

//   for (let i = 0; i < coinIcon.length; i++) {
//     coinIcon[i].onclick = function() {
//       count2 = count2 - 20;
//       coinCount.innerText = count2;
//     }
// }

// if(count2 <20 ){
//   alert('Running Out of Coins')
// }
// else{
//  alert('📞Calling National Emergency Service 999...')
// }
// }
// )




let callBtns = document.querySelectorAll(".call-icon");


// for (let i = 0; i < callBtns.length; i++) {
//   callBtns[i].addEventListener("click", function(e) {
//     e.preventDefault();

//     // if (count2 < 20) {
//     //   alert("⚠️ Running Out of Coins");
//     //  }
//     //   else {
//     //    coinCountEl.innerText = count2 -20;
//     //   //  alert("📞 Calling National Emergency Service 999...");
      
//     //  }
//    });
// }


// coin decrese function

function handleCoins(){
  let coinCountEl = document.getElementById("coin-count");
let count2 = parseInt(coinCountEl.innerText) || 0;
   if (count2 < 20) {
      alert("⚠️ Running Out of Coins");
     }
      else {
       coinCountEl.innerText = count2 -20;
      //  alert("📞 Calling National Emergency Service 999...");
      
     }
}

function getAlertId(alert){
  document.getElementById('call-btn1').addEventListener('click',function(){
return alert
})
}



document.getElementById('call-btn1').addEventListener('click',function(){
handleCoins()
     
 alert("📞 Calling National Emergency Service 999...")
})



document.getElementById('call-btn2').addEventListener('click',function(){
handleCoins()
alert('Calling Police 999...')
})

document.getElementById('call-btn3').addEventListener('click',function(){
handleCoins()
alert('Calling Fire Service 999...')
})

document.getElementById('call-btn4').addEventListener('click',function(){
handleCoins()
alert('Calling Ambulence 1994-999999...')
})

document.getElementById('call-btn5').addEventListener('click',function(){
handleCoins()
alert('Calling Women & Child Helpline 109...')
})

document.getElementById('call-btn6').addEventListener('click',function(){
handleCoins()
alert('Calling Calling Anti Corruption 106...')
})

document.getElementById('call-btn7').addEventListener('click',function(){
handleCoins()
alert('Calling Electricity Outrage 16216...')
})

document.getElementById('call-btn8').addEventListener('click',function(){
handleCoins()
alert('Calling Brac 16445...')


})

document.getElementById('call-btn9').addEventListener('click',function(e){
handleCoins()
alert('Calling Bangladesh Railway 163...')
})



    


