const requestTeamURL = 'https://Waterskier74.github.io/wdd330/finalProject/data/teamRoster.json';
let teamRoster = [];

export function returnTeamRoster () {
    let teamRoster = []
    let teamData = JSON.parse(localStorage.getItem("teamRoster"));
    if (teamData === null) {
        teamRoster = fetchBlankRoster(requestTeamURL);
    }else{
        teamRoster = teamData;
    };
    return teamRoster;
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

export function showTeamRoster(listId) {
    const menuItems = document.getElementById(listId);
    menuItems.innerHTML = "";
    renderTeamRoster(teamRoster, menuItems);
}

export function renderTeamRoster (players, parent) {
    players.forEach(player => {
        parent.appendChild(renderOnePlayer(player));
    });
}

export function renderOnePlayer(player) {
    const item = document.createElement("li");
    item.innerHTML = `<h2>${player.name}</h2>
            <div>
                <h3>Player Number</h3>
                <p>${player.number}</p>
            </div>`;

    return item;
}

export function renderBlankPlayer() {
    document.getElementById('menu').innerHTML = `
    <li>
        <h2>player Name</h2>
        <input id="name" value="Enter Player Name">
        <div>
            <h3>Player Number</h3>
            <input type=number" id="number" value=0>
        </div>
        <div>
            <h3>Games Played</h3>
            <input type="number" id="gamesPlayed" value=0>
        </div>
        <div>
            <h3>Service Attempts</h3>
            <input type="number" id="serviceAttempts" value=0>
        </div>
        <div>
            <h3>Aces</h3>
            <input type="number" id="aces" value=0>
        </div>
        <div>
            <h3>Service Errors</h3>
            <input type="number" id="serviceErrors" value=0>
        </div>
        <div>
            <h3>Points</h3>
            <input type="number" id="points" value=0>
        </div>
        <div>
            <h3>Attempts</h3>
            <input type="number" id="attempts" value=0>
        </div>
        <div>
            <h3>Kills</h3>
            <input type="number" id="kills" value=0>
        </div>
        <div>
            <h3>Errors</h3>
            <input type="number" id="errors" value=0>
        </div>
        <div>
            <h3>Service Receptions</h3>
            <input type="number" id="serviceReceptions" value=0>
        </div>
        <div>
            <h3>Service Reception Errors</h3>
            <input type="number" id="serviceReceptionErrors" value=0>
        </div>
        <div>
            <h3>Block Solo</h3>
            <input type="number" id="blockSolo" value=0>
        </div>
        <div>
            <h3>Block Assists</h3>
            <input type="number" id="blockAssist" value=0>
        </div>
        <div>
            <h3>Block Errors</h3>
            <input type="number" id="blockErrors" value=0>
        </div>
        <div>
            <h3>Ball Handling Attempts</h3>
            <input type="number" id="ballHandlingAttempts" value=0>
        </div>
        <div>
            <h3>Assists</h3>
            <input type="number" id="assists" value=0>
        </div>
        <div>
            <h3>Ball Handing Errors</h3>
            <input type="number" id="ballHandlingErrors" value=0>
        </div>
        <div>
            <h3>Digs</h3>
            <input type="number" id="digs" value=0>
        </div>
        <div>
            <h3>Dig Errors</h3>
            <input type="number" id="digErrors" value=0>
        </div>
    `
}

export function renderPlayerStats(player, listId) {
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

export function addPlayer() {
    const newData = {
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
    let confirmAdd = confirm("Do you want add this player?")
    if (confirmAdd) {
        teamRoster = returnTeamRoster();
        teamRoster.push(newData);
        localStorage.setItem("teamRoster", JSON.stringify(teamRoster));
        alert("Player has been added.")
    } else {
        alert("Edit has been cancelled.")
    }
}

export function editPlayerStats(index) {
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
        teamRoster = returnTeamRoster();
        teamRoster.splice(playerIndex, 1, data);
        localStorage.setItem("teamRoster", JSON.stringify(teamRoster));
        alert("Edit has been completed.");
    } else {
        alert("Edit has been cancelled.");
    }
}

export function deletePlayer(index) {
    const playerIndex = index
    let confirmDelete = confirm("Are you sure you want to delete this player?")
    if (confirmDelete) {
        teamRoster = returnTeamRoster();
        teamRoster.splice(playerIndex, 1);
        localStorage.setItem("teamRoster", JSON.stringify(teamRoster));
        alert("Player has been deleted.");
    }else{
        alert("Delete has been cancelled.");
    }

}