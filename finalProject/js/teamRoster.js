import MainMenu from './mainMenu.js'
const requestURL = 'https://Waterskier74.github.io/wdd330/finalProject/data/teamRoster.json'
let teamRoster = [ ];


fetch (requestURL)
    .then(res => res.json())
    .then (data => {
       teamRoster= data
       console.log (teamRoster);
    });

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
        <h2>player Name</h2>
        <input id="name" value=${player.name}>
        <div>
            <h3>Player Number</h3>
            <input type=number" id="number" value="${player.number}">
        </div>
        <div>
            <h3>Games Played</h3>
            <input type="number" id="gamesPlayed" value=${player.gamesPlayed}>
        </div>
        <div>
            <h3>Service Attempts</h3>
            <input type="number" id="serviceAttempts" value=${player.serviceAttempts}>
        </div>
        <div>
            <h3>Aces</h3>
            <input type="number" id="aces" value=${player.aces}>
        </div>
        <div>
            <h3>Service Errors</h3>
            <input type="number" id="serviceErrors" value=${player.serviceErrors}>
        </div>
        <div>
            <h3>Points</h3>
            <input type="number" id="points" value=${player.points}>
        </div>
        <div>
            <h3>Attempts</h3>
            <input type="number" id="attempts" value=${player.attempts}>
        </div>
        <div>
            <h3>Kills</h3>
            <input type="number" id="kills" value=${player.kills}>
        </div>
        <div>
            <h3>Errors</h3>
            <input type="number" id="errors" value=${player.errors}>
        </div>
        <div>
            <h3>Service Receptions</h3>
            <input type="number" id="serviceReceptions" value=${player.serviceReceptions}>
        </div>
        <div>
            <h3>Service Reception Errors</h3>
            <input type="number" id="serviceReceptionErrors" value=${player.serviceReceptionErrors}>
        </div>
        <div>
            <h3>Block Solo</h3>
            <input type="number" id="blockSolo" value=${player.blockSolo}>
        </div>
        <div>
            <h3>Block Assists</h3>
            <input type="number" id="blockAssist" value=${player.blockAssist}>
        </div>
        <div>
            <h3>Block Errors</h3>
            <input type="number" id="blockErrors" value=${player.blockErrors}>
        </div>
        <div>
            <h3>Ball Handling Attempts</h3>
            <input type="number" id="ballHandlingAttempts" value=${player.ballHandlingAttempts}>
        </div>
        <div>
            <h3>Assists</h3>
            <input type="number" id="assists" value=${player.assists}>
        </div>
        <div>
            <h3>Ball Handing Errors</h3>
            <input type="number" id="ballHandlingErrors" value=${player.ballHandlingErrors}>
        </div>
        <div>
            <h3>Digs</h3>
            <input type="number" id="digs" value=${player.digs}>
        </div>
        <div>
            <h3>Dig Errors</h3>
            <input type="number" id="digErrors" value=${player.digErrors}>
        </div>
        `
    console.log(player);
}


export default class Players {
    constructor(listId) {
        this._listId = listId
    }

    getAllPlayers() {
        return teamRoster;
    }

    getPlayerByName(playerName) {
        return this.getAllPlayers().find(player => player.name === playerName);;
    }

    createBackButton() {
        const backBtn = document.createElement("button");
        backBtn.textContent = "< back to Main Menu";
        backBtn.addEventListener('touchend', () => {
            let menu = new MainMenu('menu')
            menu.showMenu(); });
        return backBtn;
    }

    createCloseButton() {
        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Return to Team Roster";
        closeBtn.addEventListener('touchend', () => {this.showTeamRoster(); });
        return closeBtn;
    }

    createEditPlayerButton() {
        const editStatsBtn = document.createElement("button");
        editStatsBtn.textContent = "Edit Player";
        editStatsBtn.addEventListener('touchend', () => {this.editPlayerStats(); });
        return editStatsBtn;
    }

    editPlayerStats(index) {
        const playerIndex = index;
        const data = {
            name: document.getElementById('name').value,
            number: parseInt(document.getElementById('number').value),
            gamesPlayed: parseInt(document.getElementById('gamesPlayed').value),
            serviceAttempts: parseInt(document.getElementById('serviceAttempts').value),
            aces: parseInt(document.getElementById("aces").value),
            serviceErrors: parseInt(document.getElementById("serviceErrors").value),
            points: parseInt(document.getElementById("points").value),
            attempts: parseInt(document.getElementById("attempts").value),
            kills: parseInt(document.getElementById("kills").value),
            errors: parseInt(document.getElementById("errors").value),
            serviceReceptions: parseInt(document.getElementById("serviceReceptions").value),
            serviceReceptionErrors: parseInt(document.getElementById("serviceReceptionErrors").value),
            blockSolo: parseInt(document.getElementById("blockSolo").value),
            blockAssist: parseInt(document.getElementById("blockAssist").value),
            blockErrors: parseInt(document.getElementById("blockErrors").value),
            ballHandlingAttempts: parseInt(document.getElementById("ballHandlingAttempts").value),
            assists: parseInt(document.getElementById("assists").value),
            ballHandlingErrors: parseInt(document.getElementById("ballHandlingErrors").value),
            digs: parseInt(document.getElementById("digs").value),
            digErrors: parseInt(document.getElementById("digErrors").value)
        }
        let confirmEdit = confirm("Do you want edit this player?")
        if (confirmEdit) {
            teamRoster.splice(playerIndex, 1, data);
            writeFile('./data/teamRoster.json', JSON.stringify(teamRoster, null, 2), err =>{
                if (err) {
                    console.log(err);
                }else{
                    console.log('File successfully written')
                }
            })
            
            alert("Edit has been completed.")
        } else {
            alert("Edit has been cancelled.")
        }
    }

    showPlayerStats (item) {
        let playerName = item.querySelector('h2').innerText;
        let player = this.getPlayerByName(playerName);
        let playerIndex = this.getAllPlayers().indexOf(player);
        console.log(playerIndex);
        if (player !== null) {
            const list = document.getElementById(this._listId)
            list.innerHTML = "";
            renderPlayerStats(player, this._listId);
            list.appendChild(this.createEditPlayerButton(playerIndex));
            list.appendChild(this.createCloseButton());
        }
    }

    showTeamRoster() {
        showTeamRoster(this._listId);
        const menu = document.getElementById("menu")
        const listItems = Array.from(document.getElementById(this._listId).querySelectorAll('li'));
        listItems.forEach(item => {
            item.addEventListener('touchend', () => { this.showPlayerStats(item) })
        })
        menu.appendChild(this.createBackButton());
    }
}