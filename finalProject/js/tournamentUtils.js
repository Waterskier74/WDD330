const requestTournamentURL = 'https://Waterskier74.github.io/wdd330/finalProject/data/tournamentRoster.json';
let tournamentRoster = [];

export function returnTournamentRoster () {
    let tournamentRoster = []
    let tournamentData = JSON.parse(localStorage.getItem("tournamentRoster"));
    if (tournamentData === null) {
        tournamentRoster = fetchBlankRoster(requestTournamentURL);
    }else{
        tournamentRoster = tournamentData;
    };
    return tournamentRoster;
};

function fetchBlankRoster (requestURL) {
    let blankRoster = []
    fetch (requestURL)
    .then(res => res.json())
    .then (data => {
        blankRoster = data
    })
    .catch(error => {
        console.error('Something went wrong.');
        console.error(error);
    })
    return blankRoster;
}

export function showTournamentRoster(listId) {
    const menuItems = document.getElementById(listId);
    menuItems.innerHTML = "";
    renderTournamentRoster(tournamentRoster, menuItems);
}

export function renderTournamentRoster (tournamentRoster, parent) {
    tournamentRoster.forEach(tournament => {
        parent.appendChild(renderOneTournament(tournament));
    });
}

export function renderOneTournament(tournament) {
    const item = document.createElement("li");
    item.innerHTML = `<h2>${tournament.tournamentName}</h2>
            <div>
                <h3>Tournament Location/h3>
                <p>${tournament.location}</p>
            </div>`;

    return item;
}

export function renderBlankTournament () {
    document.getElementById('menu').innerHTML = `
    <li>
        <h2>Tournament Name</h2>
        <input id="tournamentName" value="Enter Tournament Name">
        <div>
            <h3>Tournament Location</h3>
            <input id="location" value="Enter Tournament Location">
        </div>
    `
}

export function renderTournamentStats(tournament, tournamentId) {
    document.getElementById(tournamentId).innerHTML = `
    <li>
        <h2>player Name</h2>
        <input id="tournamentName" value=${tournament.tournamentName}>
        <div>
            <h3>Player Number</h3>
            <input id="location" value="${tournament.location}">
        </div>
    `
}

export function addTournament() {
    const newData = {
        tournamentName: document.getElementById('tournamentName').value,
        location: document.getElementById('location').value,

    }
    let confirmAdd = confirm("Do you want add this player?")
    if (confirmAdd) {
        tournamentRoster = returnTournamentRoster();
        tournamentRoster.push(newData);
        localStorage.setItem("tournamentRoster", JSON.stringify(tournamentRoster));
        alert("Tournament has been added.")
    } else {
        alert("Save has been cancelled.")
    }
}