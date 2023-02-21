
const wrapper = document.querySelector('.wrapper')
const day = document.querySelector('.day')
const hour = document.querySelector('.hour')
const minut = document.querySelector('.minut')
const second = document.querySelector('.second')

// let newTime = new Date("aprel 3, 2023 10:00:00").getTime()
// let now = new Date ().getTime()
// let time  = newTime - now

function sayHello(){
        let newTime = new Date("aprel 3, 2023 10:00:00").getTime()
        let now = new Date ().getTime()
        let time  = newTime - now

        let dayss = Math.floor(time/(1000 * 60 * 60* 24))
        let hourss = Math.floor(time%(1000 * 60 * 60* 24)/(1000 * 60 * 60))
        let minutss = Math.floor(time%(1000 * 60 * 60)/(1000 * 60 ))
        let secondss = Math.floor(time%(1000 * 60 )/1000 )

        if(minutss < 10){
            minutss = '0' + minutss
        }
        if(secondss< 10){
            secondss = '0' + secondss
        }

        day.textContent = dayss
        hour.textContent = hourss
        minut.textContent = minutss
        second.textContent = secondss
}
sayHello()

setInterval(sayHello,1000)




// let newTime = new Date("aprel 3, 2023 10:00:00").getTime()
// let now = new Date ().getTime()
// let time  = newTime - now

// let dayss = Math.floor(time/(1000 * 60 * 60* 24))
// let hourss = Math.floor(time%(1000 * 60 * 60* 24)/(1000 * 60 * 60))
// let minutss = Math.floor(time%(1000 * 60 * 60)/(1000 * 60 ))
// let secondss = Math.floor(time%(1000 * 60 )/1000 )

// setInterval(() =>{
//     day.textContent = dayss
//     hour.textContent = hourss
//     minut.textContent = minutss
//     second.textContent = secondss

// },1000)

