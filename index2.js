
let copyCount = document.getElementById("copy-count");
let count3 = parseInt(copyCount.innerText) || 0;

let copyIcons = document.querySelectorAll(".copy-card-btn");

for (let i = 0; i < copyIcons.length; i++) {
  copyIcons[i].onclick = function() {
    count3++;
    copyCount.innerText = count3;
  }
}