let billAmount = document.getElementById('bill');
let tip = document.getElementById('tip');
let display = document.getElementById('result');
// console.log(billAmount);
let result = 0;
function calculate(){
    result = parseInt(billAmount.value) * parseInt(tip.value) / 100;
    display.innerHTML = parseInt(billAmount.value) + result;
}
