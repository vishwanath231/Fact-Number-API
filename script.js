


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
   
  const baseURL = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/";
  fetch(baseURL + number,{
    headers:{
      'x-requested-with': 'text/plain'
    }})
    .then(response => response.text())
    .then(text => factDiv.innerHTML = text)
    .catch(e=>console.log(e));
}
