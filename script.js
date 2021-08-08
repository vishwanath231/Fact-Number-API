


const form = document.querySelector('form');
const number = document.querySelector('.number__input');
const factDiv = document.getElementById('fact');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    factDiv.innerHTML = `<span style="text-align:center">Wait a little bit ⏳</span>`;
    
    getNumber(number.value);

    number.value = '';

})

function getNumber(number){
    
    const BaseURL =`http://numbersapi.com/`;

    fetch(BaseURL + number)
    .then(res => res.text())
    .then(data => {
        factDiv.innerHTML = data;
    });
    
}