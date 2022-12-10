import MainMenu from './mainMenu';

const requestURL = 'https://Waterskier74.github.io/wdd330/finalProject/data/tournamentRoster.json'
let tournamentRoster = []

let data = JSON.parse(localStorage.getItem("tournamentRoster"))
if (data === null) {
    tournamentRoster = fetchBlankTournamentRoster();
}else{
    tournamentRoster = data
}

function fetchBlankTournamentRoster () {
    let blankTournamentRoster = []
    fetch (requestURL)
    .then(res => res.json())
    .then (data => {
        blankTournamentRoster = data
    })
    .catch(error => {
        console.error('Something went wrong.');
        console.error(error);
    })
    return blankTournamentRoster;
}

function showTournamentRoster(listId) {
    const menuItems = document.getElementById(listId);
    menuItems.innerHTML = "";
    renderTournamentRoster(tournamentRoster, menuItems);
}

function renderTournamentRoster (tournaments, parent) {
    tournaments.forEach(tournament => {
        parent.appendChild(renderOneTournament(tournament));
    });

}

function renderOneTournament(tournament) {
    const item = document.createElement("li");
    item.innerHTML = `<h2>${tournament.tournamentName}</h2>
            <div>
                <h3>Location</h3>
                <p>${tournament.location}</p>
            </div>`;

    return item;
}

export default class Tournaments {
    constructor(listId) {
        this._listId = listId
    }

    getAllTournaments() {
        return tournamentRoster;
    }

    createBackButton() {
        const backBtn = document.createElement("button");
        backBtn.textContent = "< back to Main Menu";
        backBtn.addEventListener('click', () => {
            let menu = new MainMenu('menu')
            menu.showMenu(); });
        backBtn.addEventListener('touchend', (ev) => {
            ev.preventDefault();
            let menu = new MainMenu('menu')
            menu.showMenu();
        });
        return backBtn;
    }

    showTournamentRoster() {
        showTournamentRoster(this._listId);
        const menu = document.getElementById("menu");
        const listItems = Array.from(document.getElementById(this._listId).querySelectorAll('li'));
        listItems.forEach(item => {
            item.addEventListener('click', () => { 
//                this.showTournamentStats(item) 
            })
            item.addEventListener('touchend', (ev) => {
                ev.preventDefault();
 //               this.showTournamentStats(item);
            })
        })
//       menu.appendChild(this.createAddPlayerButton());
        menu.appendChild(this.createBackButton());
    }
}
