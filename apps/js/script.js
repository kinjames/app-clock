const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const changeBtn = document.getElementById('change');

// Quote Functions
changeBtn.addEventListener('click', update);
window.addEventListener('DOMContentLoaded', ()=>{
    update();
})

async function fetchApi(){
    let response = await fetch('https://api.quotable.io/random')
    let data = await response.json()
    return data;
}

async function update(){
    const data = await fetchApi();

    quoteEl.textContent = data.content;
    authorEl.textContent = data.author;

    if (data.length > 200){
        quoteEl.style.fontSize= "14px"
    } 

    if(data.author == ""){
        authorEl.textContent = "Unknown"
    }
}


//Time Api 
const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');
const timeText = document.querySelector('.time-text');
const ampmText = document.querySelector('.amPm');
const zoneText = document.querySelector('.zone');
const btn = document.querySelector('.cta');
const quoteContainer = document.querySelector('.quote-container');
const footerContainer = document.querySelector('.footer');
const bodyEl = document.querySelector('.body');

const aft = document.getElementById('aft');



function updateClock() {
    const newDate = new Date();

    let hourNum = newDate.getHours();
    let minsNum = newDate.getMinutes();

    if (hourNum >= 5 && hourNum <= 11) {
        aft.textContent = "morning";
        ampmText.textContent = 'am'
      } else if (hourNum >= 12 && hourNum <= 17) {
        aft.textContent= 'afternoon';
        moon.classList.add('hide')
      } 
      else {
        aft.textContent = 'evening';
        moon.classList.remove('hide');
        sun.classList.add('hide');
        ampmText.textContent = 'pm'
      }
    
    
    
    if (hourNum > 12){
        hourNum = hourNum - 12;
    } else if (minsNum < 10){
        minsNum = "0" + minsNum
    }
    
    timeText.textContent = `${hourNum}:${minsNum}`;

    setTimeout(() => {
        updateClock()
    }, 1000)
}

updateClock();






