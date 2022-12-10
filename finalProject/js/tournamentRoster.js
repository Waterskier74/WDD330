import MainMenu from './mainMenu';
const requestURL = 'https://Waterskier74.github.io/wdd330/finalProject/data/tournamentRoster.json'
let tournamentRoster = []

let data = JSON.parse(localStorage.getItem("tournamentRoster"))
if (data === null) {
    tournamentRoster = fetchBlankTournamentRoster();
}else{
    tournamentRoster = data
}

export default class Tournaments {
    constructor(listId) {
        this._listId = listId
    }
}