import MainMenu from './mainMenu.js'

//on load generate main menu
window.addEventListener("load", () => {
    let menu = new MainMenu('menu')
    menu.showMenu();
})

