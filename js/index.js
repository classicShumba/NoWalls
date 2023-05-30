const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body')
const menuItems = document.querySelectorAll('.menu-item')
const logo = document.querySelector('.logo')
const subTitle = document.querySelector('.sub-title')
const noLogo = document.querySelector('.nowalls-logo')
const service = document.querySelector('#services')
const mediaQuery = window.matchMedia('(min-width: 768px)')
const servTitle = document.querySelector('.service-title')
const servBtns = document.querySelectorAll('.serv-btn')
console.log(hamburger, menu, menuItems, logo, subTitle, noLogo, service, servBtns);

hamburger.addEventListener("click", () => {
    console.log('burger clicked')
    menu.classList.toggle('menu-open')
    hamburger.classList.toggle('burger-active')
})


body.addEventListener('click', (e) =>{
    clickedEl = e.target
    console.log(clickedEl)
    if(!clickedEl.classList.contains('hamburger') && !clickedEl.classList.contains('burger')){
        hamburger.classList.remove('burger-active')
        menu.classList.remove('menu-open')
    }
    if(clickedEl.classList.contains('logo')){
        window.location = ('index.html')
        console.log(window.location)
    }

    if (hamburger.classList.contains('burger-active')){
        logo.style.background = 'var(--accent-brown)';
        console.log('burger active')
    } else {
        logo.style.background = 'transparent';
    }
})

if(menuItems.length){
    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', ()=>{
            menuItems.forEach((menuItem) =>{
                menuItem.classList.remove('active-link');
            })
            menuItem.classList.add('active-link');
        });
    })
}

function handleTabChange(e){
    if(e.matches){
        console.log('Media Query Above 768px!')
        menu.classList.remove('menu-open')
        logo.style.background = 'transparent';
        subTitle.innerHTML = `we’re <span class="brown">Nowalls</span> Pan Africa.`
        servTitle.innerHTML = `Our Services To <br> Deliver Amazing Products`
    } else if (hamburger.classList.contains('burger-active')){
        console.log("Media Query Below 768px!")
        menu.classList.add('menu-open')
        logo.style.background = 'var(--accent-brown)';
    } else {
        subTitle.innerHTML = `we’re <span class="brown">Nowalls</span> <br> Pan Africa.`
        
    }
}
mediaQuery.addListener(handleTabChange)

handleTabChange(mediaQuery)

if(servBtns.length){
    servBtns.forEach((servBtn) => {
        servBtn.addEventListener('click', () =>{
            servBtns.forEach((servBtn) => {
                servBtn.classList.remove('active-serv-btn')
            });
            servBtn.classList.add('active-serv-btn')
        })
    })
}






