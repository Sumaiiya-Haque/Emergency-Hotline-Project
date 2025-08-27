 
// ----4 no requirements
  let heartCount = document.getElementById("heart-count");
  let count = 0;

  
  let heartIcons = document.querySelectorAll(".heart-icon");

  for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].onclick = function() {
      count++;
      heartCount.innerText = count;
    }
}

// -------------5 no reusable function

document.getElementById('call-btn1').addEventListener('click',function(e){
e.preventDefault(e)
alert('Calling National Emergency Service 999...')
let coinCount = document.getElementById("coin-btn");
  let count2 = 100
  let coinIcon = document.querySelectorAll(".call-icon");

  for (let i = 0; i < coinIcon.length; i++) {
    coinIcon[i].onclick = function() {
      count2 = count2 - 20;
      coinCount.innerText = count2;
    }
}
}
)

// coin decrese








document.getElementById('call-btn2').addEventListener('click',function(e){
e.preventDefault(e)
alert('Calling Police 999...')
})

document.getElementById('call-btn3').addEventListener('click',function(e){
e.preventDefault(e)
alert('Calling Fire Service 999...')
})

document.getElementById('call-btn4').addEventListener('click',function(e){
e.preventDefault(e)
alert('Calling Ambulence 1994-999999...')
})

document.getElementById('call-btn5').addEventListener('click',function(e){
e.preventDefault(e)
alert('Calling Women & Child Helpline 109...')
})

document.getElementById('call-btn6').addEventListener('click',function(e){
e.preventDefault(e)
alert('Calling Calling Anti Corruption 106...')
})

document.getElementById('call-btn7').addEventListener('click',function(e){
e.preventDefault(e)
alert('Calling Electricity Outrage 16216...')
})

document.getElementById('call-btn8').addEventListener('click',function(e){
e.preventDefault(e)
alert('Calling Brac 16445...')


})

document.getElementById('call-btn9').addEventListener('click',function(e){
e.preventDefault(e)
alert('Calling Bangladesh Railway 163...')
})



    


