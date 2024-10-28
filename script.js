const calculate = document.querySelector('.calculate');
const height_2 = document.querySelector('.height_2');
const weight_2 = document.querySelector('.weight_2');
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height_2 = parseFloat(document.querySelector('.height_2').value);
    const weight_2 = parseFloat(document.querySelector('.weight_2').value);
    
    const bmi = (weight_2/(height_2*height_2)).toFixed(2);
    console.log(bmi);

    const value = document.querySelector('.value');
    value.innerHTML = bmi;
});
