// Variables
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const clear = document.querySelector('.clear')
const delet = document.querySelector('.delete')
const equals = document.querySelector('.equals')
const exit = document.querySelector('.exit')
const btns = document.querySelectorAll('.button')
const theme = document.querySelector('.theme')
const body = document.querySelector('body')

let screen1Input = []
let screen2Input = []


window.addEventListener('load', ()=>{
    screen1.innerHTML=screen1Input.join('')
    screen2.innerHTML=screen2Input.join('')
})

btns.forEach(item=> item.addEventListener('click', ()=>{
    if (screen2Input.join('')) {
        screen1Input = screen2Input
        screen1Input.push(item.value)
        screen1.innerHTML=screen1Input.join('')
    } else {
        screen1Input.push(item.value)
        screen1.innerHTML=screen1Input.join('')
    }
}))

clear.addEventListener('click', ()=>{
    screen1Input = []
    screen2Input = []
    screen1.innerHTML=screen1Input.join('')
    screen2.innerHTML=screen2Input.join('')
})

delet.addEventListener('click', ()=>{
    screen1Input.pop()
    screen1.innerHTML=screen1Input.join('')
    screen2.innerHTML = screen1Input.join('')?eval(screen1Input.join('')): ''
    // if (screen1Input.join('')) {
    //     if (screen1Input[screen1Input.length - 1] == '+') {
    //         console.log(screen1Input)
    //         screen1Input.pop()
    //         screen2.innerHTML = eval(screen1Input.join(''))
    //     }
    // } else {
    //    screen2.innerHTML = '' 
    // }
})

equals.addEventListener('click', ()=>{
    screen2.innerHTML = eval(screen1Input.join(''))
    screen2Input=[screen2.innerHTML]
})

exit.addEventListener('click', ()=>{
    window.close()
})

window.addEventListener('keydown', (e)=>{
    let symbols = ['+', '-', '/', '*', '%', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
    if(symbols.includes(e.key)){
        if (screen2Input.join('')) {
        screen1Input = screen2Input
        screen1Input.push(e.key)
        screen1.innerHTML=screen1Input.join('')
    } else {
        screen1Input.push(e.key)
        screen1.innerHTML=screen1Input.join('')
    }
    } else if(e.key == 'Backspace'){
        screen1Input.pop()
        screen1.innerHTML=screen1Input.join('')
        screen2.innerHTML = screen1Input.join('')?eval(screen1Input.join('')): ''
    } else if(e.key == 'Enter'){
        screen2.innerHTML = eval(screen1Input.join(''))
        screen2Input=[screen2.innerHTML]
    } else if(e.key == 'Escape'){
        screen1Input = []
        screen2Input = []
        screen1.innerHTML=screen1Input.join('')
        screen2.innerHTML=screen2Input.join('')
    }
    // console.log(e)
})

theme.addEventListener('click', ()=>{
    body.classList.toggle('light')
    theme.innerHTML = body.classList.contains('light')? '🌙' : '🔆'
})

function random_bg_color(){
    let hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

    function populate (a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14)
            let y = hex[x]
            a+=y
        }
        return a
    }
    function ang(){
        let angs = ['0deg', '45deg', '90deg', '135deg', '180deg', '225deg', '270deg', '315deg']
        let z = Math.round(Math.random() * 7)
        let w = angs[z]
        return w
    } 

    let color1 = populate('#')
    let color2  = populate('#')
    let angle = ang()

    let gradient = 'linear-gradient('+ angle + ',' + color1 + ',' + color2 + ')'
    document.querySelector('body').style.background = gradient
}

random_bg_color()