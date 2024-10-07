function viewSobre(){
    document.querySelector('.container-sobre').scrollIntoView({behavior: 'smooth'})
}

function showNav(){
    var navButton = document.querySelector('#menu-button');
    var navMenu = document.querySelector('#nav-menu');
    if (navMenu.classList.contains('show')){
        navMenu.classList.remove('show')
        navButton.src = 'imgs/icons8-menu.svg'
        console.log('Close')
    }else{
        navMenu.classList.add('show')
        navButton.src = 'imgs/icons8-close.svg'
        console.log('show')
    }
}