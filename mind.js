let billAmount = document.getElementById('bill');
let tip = document.getElementById('tip');
let display = document.getElementById('result');
// console.log(billAmount);
let result = 0;
function calculate(){
    result = billAmount.value * tip.value / 100;
    let no =  billAmount.value;
    display.innerHTML = parseInt(result) + parseInt(no);
}
