// https://www.omnicalculator.com/conversion/g-to-oz

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ozRadio = document.getElementById('ozRadio');
const gRadio = document.getElementById('gRadio');

let oz;
let g = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

ozRadio.addEventListener('click', function() {
  variable1.textContent = 'g';
  g = v1;
  result.textContent = '';
});

gRadio.addEventListener('click', function() {
  variable1.textContent = 'oz';
  oz = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ozRadio.checked)
    result.textContent = `oz = ${computeoz().toFixed(5)}`;

  else if(gRadio.checked)
    result.textContent = `g = ${computeg().toFixed(5)}`;
})

// calculation

function computeoz() {
  return Number(g.value) / 28.35;
}

function computeg() {
  return Number(oz.value) * 28.35;
}