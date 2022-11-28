import mainMenu from './mainMenu.js'


//const teamRosterURL = 'https://ricklarrabee.github.io/wdd330/finalProject/data/'
const teamRoster = [
    {
        name: "Sho Larrabee",
        number: 3,
        gamesPlayed: 3,
        serviceAttempts: 3, 
        aces: 3,
        serviceErrors: 3,
        points: 3,
        attempts: 3,
        kills: 3,
        errors: 3,
        serviceReceptions: 3,
        serviceReceptionErrors: 3,
        blockSolo: 3,
        blockAssist: 3,
        blockErrors: 3,
        ballHandlingAttempts: 3,
        assists: 3,
        ballHandlingErrors: 3,
        digs: 3,
        digErrors: 3
    }
]

//function showTeamRoster(listId) {
//    const teamRosterElement = document.getElementById(listId);
//    teamRosterElement.innerHTML = "";
//    renderTeamRoster (teamRoster, teamRosterElement);
//}

function showTeamRoster(listId) {
    const menuItems = document.getElementById(listId);
    menuItems.innerHTML = "";
    renderTeamRoster(teamRoster, menuItems);
}

function renderTeamRoster (players, parent) {
    players.forEach(player => {
        parent.appendChild(renderOnePlayer(player));
    });
}

function renderOnePlayer(player) {
    const item = document.createElement("li");
    item.innerHTML = `<h2>${player.name}</h2>
            <div>
                <h3>Player Number</h3>
                <p>${player.number}</p>
            </div>`;

    return item;
}

function renderPlayerStats(player, listId) {
    document.getElementById(listId).innerHTML = `
    <li>
        <h2>${player.name}</h2>
        <div>
            <h3>Player Number</h3>
            <p>${player.number}</p>
        </div>
        <div>
            <h3>Games Played</h3>
            <p>${player.gamesPlayed}</p>
        </div>
        <div>
            <h3>Service Attempts</h3>
            <p>${player.serviceAttempts}</p>
        </div>
        <div>
            <h3>Aces</h3>
            <p>${player.aces}</p>
        </div>
        <div>
            <h3>Service Errors</h3>
            <p>${player.serviceErrors}</p>
        </div>
        <div>
            <h3>Points</h3>
            <p>${player.points}</p>
        </div>
        <div>
            <h3>Attempts</h3>
            <p>${player.attempts}</p>
        </div>
        <div>
            <h3>Kills</h3>
            <p>${player.kills}</p>
        </div>
        <div>
            <h3>Errors</h3>
            <p>${player.errors}</p>
        </div>
        <div>
            <h3>Service Receptions</h3>
            <p>${player.serviceReceptions}</p>
        </div>
        <div>
            <h3>Service Reception Errors</h3>
            <p>${player.serviceReceptionErrors}</p>
        </div>
        <div>
            <h3>Block Solo</h3>
            <p>${player.blockSolo}</p>
        </div>
        <div>
            <h3>Block Assists</h3>
            <p>${player.blockAssist}</p>
        </div>
        <div>
            <h3>Block Errors</h3>
            <p>${player.blockErrors}</p>
        </div>
        <div>
            <h3>Ball Handling Attempts</h3>
            <p>${player.ballHandlingAttempts}</p>
        </div>
        <div>
            <h3>Assists</h3>
            <p>${player.assists}</p>
        </div>
        <div>
            <h3>Ball Handing Errors</h3>
            <p>${player.ballHandlingErrors}</p>
        </div>
        <div>
            <h3>Digs</h3>
            <p>${player.digs}</p>
        </div>
        <div>
            <h3>Dig Errors</h3>
            <p>${player.digErrors}</p>
        </div>
        `
}

export default class Players {
    constructor(listId) {
        this._listId = listId
    }

    getAllPlayers() {
        return teamRoster;
    }

    getPlayerByName(playerName) {
        return this.getAllPlayers().find(player => player.name === playerName);
    }

    createBackButton() {
        const backBtn = document.createElement("button");
        backBtn.textContent = "< back to Main Menu";
        backBtn.addEventListener('touched', () => {mainMenu.showMenu(); });
        return backBtn;
    }

    createCloseButton() {
        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Return to Team Roster";
        closeBtn.addEventListener('touched', () => {this.showTeamRoster(); });
        return closeBtn;
    }

    createEditStatsButton() {
        const editStatsBtn = document.createElement("button");
        editStatsBtn.textContent = "Edit Player Stats";
        editStatsBtn.addEventListener('touched', () => {});
    }

    showPlayerStats (item) {
        let playerName = item.querySelector('h2').innerText;
        let player = this.getPlayerByName(playerName);
        if (player !== null) {
            const list = document.getElementById(this._listId)
            list.innerHTML = "";
            renderPlayerStats(player, this._listId);
            list.appendChild(this.closeBtn);
        }
    }

    showTeamRoster() {
        showTeamRoster(this._listId);
        const listItems = Array.from(document.getElementById(this._listId).querySelectorAll('li'));
        listItems.forEach(item => {
            item.addEventListener('touchend', () => { this.showPlayerStats(item) })
        })
        
    }
}