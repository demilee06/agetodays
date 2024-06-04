let input = document.querySelector('input')
let button = document.querySelector('button')
let result = document.querySelector('[data-ans]')

button.addEventListener('click',()=>{
    result.innerHTML = parseInt(input.value*365)
})