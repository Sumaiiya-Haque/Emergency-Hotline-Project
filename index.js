 
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





let callBtns = document.querySelectorAll(".call-icon");

// coin decrese function
 let callHistory = []

function handleCoins(){
  let coinCountEl = document.getElementById("coin-count");
let count2 = parseInt(coinCountEl.innerText) || 0;
if (count2 < 20) {
      alert("⚠️ Running Out of Coins");
      return false
     }
      else {
       coinCountEl.innerText = count2 -20;
       return true  
     }
   }
  






document.getElementById('call-btn1').addEventListener('click',function(){
if (handleCoins()){
 alert("📞 Calling National Emergency Service 999...")
}

const data = {
    name:'জাতীয় জরুরি সেবা',
    num: 999,
    date: new Date().toLocaleTimeString()
}
callHistory.push(data)



 const callHistoryContainer = document.getElementById('call-history-container')
   callHistoryContainer.innerText =''
    for (let data of callHistory){
const div = document.createElement('div')
div.innerHTML =`
<divid='div1' class=" min-h-[100px] mt-5 mx-5 flex justify-between items-center px-5  shadow bg-green-50">
  <div>
  <h1 class="font-medium">${data.name}</h1>
  <h2 class="font-medium">${data.num}</h2>
</div>
<div>
  <p class="font-medium">${data.date}</p>
</div>
</div>
`
callHistoryContainer.appendChild(div)
    } 
      

})



document.getElementById('call-btn2').addEventListener('click',function(){
if(handleCoins()){
alert('Calling Police 999...')
}

const data = {
    name:'পুলিশ',
    num: 999,
    date: new Date().toLocaleTimeString()
}
callHistory.push(data)
 const callHistoryContainer = document.getElementById('call-history-container')
   callHistoryContainer.innerText =''
    for (let data of callHistory){
const div = document.createElement('div')
div.innerHTML =`
<div class=" min-h-[100px] mt-5 mx-5 px-5 flex justify-between items-center  shadow bg-green-50">
  <div>
  <h1 class="font-medium">${data.name}</h1>
  <h2 class="font-medium">${data.num}</h2>
</div>
<div>
  <p class="font-medium">${data.date}</p>
</div>
</div>
`
callHistoryContainer.appendChild(div)
    } 
})


// clear history button3
document.getElementById('call-btn3').addEventListener('click',function(){
if(handleCoins()){
alert('Calling Fire Service 999...')
}
const data = {
    name:'ফায়ার সার্ভিস',
    num: 999,
    date: new Date().toLocaleTimeString()
}
callHistory.push(data)

 const callHistoryContainer = document.getElementById('call-history-container')
   callHistoryContainer.innerText =''
    for (let data of callHistory){
const div = document.createElement('div')
div.innerHTML =`
<div class=" min-h-[100px] mt-5 mx-5 flex justify-between items-center px-5 shadow bg-green-50">
  <div>
  <h1 class="font-medium">${data.name}</h1>
  <h2 class="font-medium">${data.num}</h2>
</div>
<div>
  <p class="font-medium">${data.date}</p>
</div>
</div>
`
callHistoryContainer.appendChild(div)
    } 
})

document.getElementById('call-btn4').addEventListener('click',function(){
if(handleCoins()){
alert('Calling Ambulence 1994-999999...')
}
const data = {
    name:'অ্যাম্বুলেন্স',
    num: '1994-999999',
    date: new Date().toLocaleTimeString()
}
callHistory.push(data)

 const callHistoryContainer = document.getElementById('call-history-container')
   callHistoryContainer.innerText =''
    for (let data of callHistory){
const div = document.createElement('div')
div.innerHTML =`
<div class=" min-h-[100px] mt-5 mx-5 flex justify-between items-center px-5 shadow bg-green-50">
  <div>
  <h1 class="font-medium">${data.name}</h1>
  <h2 class="font-medium">${data.num}</h2>
</div>
<div>
  <p class="font-medium">${data.date}</p>
</div>
</div>
`
callHistoryContainer.appendChild(div)
    } 
})

document.getElementById('call-btn5').addEventListener('click',function(){
if(handleCoins()){
alert('Calling Women & Child Helpline 109...')
}
const data = {
    name:'নারী ও শিশু সহায়তা',
    num: 109,
    date: new Date().toLocaleTimeString()
}
callHistory.push(data)

 const callHistoryContainer = document.getElementById('call-history-container')
   callHistoryContainer.innerText =''
    for (let data of callHistory){
const div = document.createElement('div')
div.innerHTML =`
<div class=" min-h-[100px] mt-5 mx-5 flex justify-between items-center px-5 shadow bg-green-50">
  <div>
  <h1 class="font-medium">${data.name}</h1>
  <h2 class="font-medium">${data.num}</h2>
</div>
<div>
  <p class="font-medium">${data.date}</p>
</div>
</div>
`
callHistoryContainer.appendChild(div)
    } 
})

document.getElementById('call-btn6').addEventListener('click',function(){
if(handleCoins()){
alert('Calling Calling Anti Corruption 106...')
}

const data = {
    name:'দুদক',
    num: 106,
    date: new Date().toLocaleTimeString()
}
callHistory.push(data)

 const callHistoryContainer = document.getElementById('call-history-container')
   callHistoryContainer.innerText =''
    for (let data of callHistory){
const div = document.createElement('div')
div.innerHTML =`
<div class=" min-h-[100px] mt-5 mx-5 px-5 flex justify-between items-center  shadow bg-green-50">
  <div>
  <h1 class="font-medium">${data.name}</h1>
  <h2 class="font-medium">${data.num}</h2>
</div>
<div>
  <p class="font-medium">${data.date}</p>
</div>
</div>
`
callHistoryContainer.appendChild(div)
    } 
})

// clear call history


document.getElementById("clear-history-btn").addEventListener("click", function() {
  
  let callList = document.getElementById("call-history-container");
  callList.innerHTML = "";
  callHistory = [];
});





// copy btn1

  document.getElementById("copy-btn1").addEventListener("click", function() { 
    let text = document.getElementById("national-emergency-hotline").innerText; 
    navigator.clipboard.writeText(text).then(() => {
      alert("✅ Copied: " + text); 
    })  
  });

  // copy btn2

 document.getElementById("copy-btn2").addEventListener("click", function() { 
    let text = document.getElementById("national-emergency-hotline").innerText; 
    navigator.clipboard.writeText(text).then(() => {
      alert("✅ Copied: " + text); 
    })  
  });


   // copy btn3

 document.getElementById("copy-btn3").addEventListener("click", function() { 
    let text = document.getElementById("fire-service").innerText; 
    navigator.clipboard.writeText(text).then(() => {
      alert("✅ Copied:" + text); 
    })  
  });

   // copy btn4

 document.getElementById("copy-btn4").addEventListener("click", function() { 
    let text = document.getElementById("ambulence").innerText; 
    navigator.clipboard.writeText(text).then(() => {
      alert("✅ Copied: " + text); 
    })  
  });

   // copy btn5

 document.getElementById("copy-btn5").addEventListener("click", function() { 
    let text = document.getElementById("women-child-helpline").innerText; 
    navigator.clipboard.writeText(text).then(() => {
      alert("✅ Copied: " + text); 
    })  
  });

   // copy btn

 document.getElementById("copy-btn6").addEventListener("click", function() { 
    let text = document.getElementById("anti-corruption").innerText; 
    navigator.clipboard.writeText(text).then(() => {
      alert("✅ Copied Anti- Corruption Hotline Number: " + text); 
    })  
  });
    
// copy count

let copyCount = document.getElementById("copy-count");
let count3 = parseInt(copyCount.innerText) || 0;

let copyIcons = document.querySelectorAll(".copy-card-btn");

for (let i = 0; i < copyIcons.length; i++) {
  copyIcons[i].onclick = function() {
    count3++;
    copyCount.innerText = count3;
  }
}

