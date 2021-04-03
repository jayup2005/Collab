const menu=document.querySelector(".menu-button")
const closed=document.querySelector(".close-button")
const mobile_navigation=document.querySelector(".mobile-navigation")

menu.addEventListener('click' , ()=>{


    mobile_navigation.classList.add('open')
})

closed.addEventListener('click' , ()=>{


    mobile_navigation.classList.remove('open')
})