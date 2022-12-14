import {Players, Tournaments} from './systemClasses.js';

const imgSource = "./images/favicon.ico"

// Render the Main Menu for the application

function showMainMenu () {
    const menuElements = document.getElementById("menu");
    menuElements.innerHTML = "";
}

// Class for the main menu.
export default class MainMenu {
    
// create the team roster button that call to the teamUtils module to populate the team roster 
    createTeamRosterButton() {
        const teamRosterBtn = document.createElement("button")
        teamRosterBtn.textContent ="Team Roster"
        teamRosterBtn.addEventListener('click', () => {
            let menu = new Players('menu');
            menu.showTeamRoster();
        });
        teamRosterBtn.addEventListener('touchend', (ev) => {
            ev.preventDefault();
            let menu = new Players('menu');
            menu.showTeamRoster();
        });
        return teamRosterBtn;
    }

// create the tournament button that calls to the tournamentUtils module to populate the tournament roster
    createTournamentButton() {
        const tournamentRosterBtn = document.createElement("button")
        tournamentRosterBtn.textContent = "Tournament Roster"
        tournamentRosterBtn.addEventListener('click', () => {;
            let menu = new Tournaments('menu');
            menu.showTournamentRoster();
        })
        tournamentRosterBtn.addEventListener('touchend', (ev) => {
            ev.preventDefault();
            let menu = new Tournaments('menu');
            menu.showTournamentRoster();
        })
        return tournamentRosterBtn;
    }

// creates the main menu with the two buttons
    showMenu() {
        showMainMenu();
        menu.appendChild(this.createTeamRosterButton());
        menu.appendChild(this.createTournamentButton());
    }
}