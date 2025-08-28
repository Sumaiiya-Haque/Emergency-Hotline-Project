// ----4 no requirements
//   let copyCount = document.getElementById("copy-btn");
//   let count = 0;

  
//   let copyIcons = document.querySelectorAll(".copy-card-count");

//   for (let i = 0; i < copyIcons.length; i++) {
//     copyIcons[i].onclick = function() {
//       count++;
//       copyCount.innerText = count;
//     }
// }

let copyCount = document.getElementById("copy-count");
let count3 = parseInt(copyCount.innerText) || 0;

let copyIcons = document.querySelectorAll(".copy-card-btn");

for (let i = 0; i < copyIcons.length; i++) {
  copyIcons[i].onclick = function() {
    count3++;
    copyCount.innerText = count3;
  }
}