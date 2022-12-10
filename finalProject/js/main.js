import MainMenu from './mainMenu.js'
//import Players from './teamRoster.js'

//on load generate main menu
window.addEventListener("load", () => {
    let menu = new MainMenu('menu')
    menu.showMenu();
    //let menu = new MenuItems('menu')
    //menu.showTeamRoster();
})

