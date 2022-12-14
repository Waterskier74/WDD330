import MainMenu from './mainMenu.js';
import * as teamUtils from './teamUtils.js';
import * as tournamentUtils from './tournamentUtils.js';

//This module contains the main two classes that control the whole application.

let teamRoster = teamUtils.returnTeamRoster();
let tournamentRoster = tournamentUtils.returnTournamentRoster();

function showTeamRoster(playerId) {
    teamRoster = teamUtils.returnTeamRoster();
    const menuItems = document.getElementById(playerId);
    menuItems.innerHTML = "";
    teamUtils.renderTeamRoster(teamRoster, menuItems);
}

function showTournamentRoster(tournamentId) {
    tournamentRoster = tournamentUtils.returnTournamentRoster();
    const tournamentItems = document.getElementById(tournamentId);
    tournamentItems.innerHTML = "";
    tournamentUtils.renderTournamentRoster(tournamentRoster, tournamentItems); 
}

// the Players class controls the team roster portion of the application.
export class Players {
    constructor(playerId) {
        this._playerId = playerId
    }

// return the players array to be used in the application.    
    getAllPlayers() {
        return teamRoster;
    }

    getPlayerByName(playerName) {
        return this.getAllPlayers().find(player => player.name === playerName);
    }

// this is the back button on used to return the main menu from the team roster
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

// This is the close button to close the stats view and return to the team list
    createCloseButton() {
        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Return to Team Roster";
        closeBtn.addEventListener('click', () => {
            this.showTeamRoster(); });
        closeBtn.addEventListener('touchend', (ev) => {
            ev.preventDefault();
            this.showTeamRoster();
        });
        return closeBtn;
    }

// This is the edit button to save and edits to a Players stats
    createEditPlayerButton(playerIndex) {
        const editStatsBtn = document.createElement("button");
        editStatsBtn.textContent = "Edit Player";
        editStatsBtn.addEventListener('click', () => {
            teamUtils.editPlayerStats(playerIndex); });
        editStatsBtn.addEventListener('touchend', (ev) => {
            ev.preventDefault();
            teamUtils.editPlayerStats(playerIndex);
        })
        return editStatsBtn;
    }

// This is the add button used to add a new player
    createAddPlayerButton() {
        const addPlayerBtn = document.createElement("button");
        addPlayerBtn.textContent = "Add Player"
        addPlayerBtn.addEventListener('click', () => {
            this.showNewPlayer();
        });
        addPlayerBtn.addEventListener('touchend', (ev) => {
            ev.preventDefault();
            this.showNewPlayer();
        });
        return addPlayerBtn;
    }

// the save button used when creating a new player
    createSavePlayerButton () {
        const savePlayerBtn = document.createElement("button");
        savePlayerBtn.textContent = "Save Player"
        savePlayerBtn.addEventListener ('click', () => {
            teamUtils.addPlayer();
            this.showTeamRoster();
        });
        savePlayerBtn.addEventListener('touchend', (ev) => {
            ev.preventDefault();
            teamUtils.addPlayer();
            this.showTeamRoster();
        })
        return savePlayerBtn;
    }

// The delete button used to delete a player
    createDeletePlayerButton (playerIndex) {
        const deletePlayerBtn = document.createElement("button");
        deletePlayerBtn.textContent = "Delete Player"
        deletePlayerBtn.addEventListener('click', () =>{
            teamUtils.deletePlayer(playerIndex);
            this.showTeamRoster()
        });
        deletePlayerBtn.addEventListener('touchend', (ev) =>{
            ev.preventDefault();
            teamUtils.deletePlayer(playerIndex);
            this.showTeamRoster();
        })
        return deletePlayerBtn;
    }

// This creates the player stats view using functions from the teamUtils module
    showPlayerStats (item) {
        let playerName = item.querySelector('h2').innerText;
        let player = this.getPlayerByName(playerName);
        let playerIndex = this.getAllPlayers().indexOf(player);
        if (player !== null) {
            const list = document.getElementById(this._playerId)
            list.innerHTML = "";
            teamUtils.renderPlayerStats(player, this._playerId);
            list.appendChild(this.createEditPlayerButton(playerIndex));
            list.appendChild(this.createDeletePlayerButton(playerIndex));
            list.appendChild(this.createCloseButton());
        }
    }

// creates the team roster view with the use of functions in the teamUtils module
    showTeamRoster() {
        showTeamRoster(this._playerId);
        const menu = document.getElementById("menu");
        const listItems = Array.from(document.getElementById(this._playerId).querySelectorAll('li'));
        listItems.forEach(item => {
            item.addEventListener('click', () => { 
                this.showPlayerStats(item) })
            item.addEventListener('touchend', (ev) => {
                ev.preventDefault();
                this.showPlayerStats(item);
            })
        })
        menu.appendChild(this.createAddPlayerButton());
        menu.appendChild(this.createBackButton());
    }

// creates the new player view with the use of functions from the team utils module
    showNewPlayer() {
        const menu = document.getElementById("menu");
        teamUtils.renderBlankPlayer();
        menu.appendChild(this.createSavePlayerButton());
        menu.appendChild(this.createCloseButton());
    }
}

// the Tournament class controls the tournament section of the application
export class Tournaments {
    constructor(tournamentId) {
        this._tournamentId = tournamentId
    }

// creates the tournament array    
    getAllTournaments() {
        return tournamentRoster;
    }

    getTournamentByName(tournamentName) {
        return this.getAllTournaments().find(tournament => tournament.tournamentName === tournamentName);
    }

// create a close button
    createCloseButton() {
        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Return to Tournament Roster";
        closeBtn.addEventListener('click', () => {
            this.showTournamentRoster(); });
        closeBtn.addEventListener('touchend', (ev) => {
            ev.preventDefault();
            this.showTournamentRoster();
        });
        return closeBtn;
    }

    createTournamentBackButton() {
       const tournamentBackBtn = document.createElement("button");
        tournamentBackBtn.textContent = "< back to Main Menu";
        tournamentBackBtn.addEventListener('click', () => {
            let menu = new MainMenu('menu')
            menu.showMenu(); });
        tournamentBackBtn.addEventListener('touchend', (ev) => {
            ev.preventDefault();
            let menu = new MainMenu('menu')
            menu.showMenu();
        });
        return tournamentBackBtn;
    }

    createAddTournamentButton() {
        const addTournamentBtn = document.createElement("button");
        addTournamentBtn.textContent = "Add Tournament"
        addTournamentBtn.addEventListener('click', () => {
            this.showNewTournament();
        });
        addTournamentBtn.addEventListener('touchend', (ev) => {
            ev.preventDefault();
            this.showNewTournament();
        });
        return addTournamentBtn;
    }

    createSaveTournamentButton () {
        const saveTournamentBtn = document.createElement("button");
        saveTournamentBtn.textContent = "Save Tournament"
        saveTournamentBtn.addEventListener ('click', () => {
            tournamentUtils.addTournament();
            this.showTournamentRoster();
        });
        saveTournamentBtn.addEventListener('touchend', (ev) => {
            ev.preventDefault();
            tournamentUtils.addTournament();
            this.showTournamentRoster();
        })
        return saveTournamentBtn;
    }

    createDeleteTournamentButton (tournamentIndex) {
        const deleteTournamentBtn = document.createElement("button");
        deleteTournamentBtn.textContent = "Delete Tournament"
        deleteTournamentBtn.addEventListener('click', () =>{
            tournamentUtils.deleteTournament(tournamentIndex);
            this.showTournamentRoster()
        });
        deleteTournamentBtn.addEventListener('touchend', (ev) =>{
            ev.preventDefault();
            tournamentUtils.deleteTournament(tournamentIndex);
            this.showTournamentRoster();
        })
        return deleteTournamentBtn;
    }

    createEditTournamentButton(playerIndex) {
        const editTournamentBtn = document.createElement("button");
        editTournamentBtn.textContent = "Edit Tournament";
        editTournamentBtn.addEventListener('click', () => {
            tournamentUtils.editTournamentStats(playerIndex); });
        editTournamentBtn.addEventListener('touchend', (ev) => {
            ev.preventDefault();
            tournamentUtils.editTournamentStats(playerIndex);
        })
        return editTournamentBtn;
    }

    showTournamentStats (item) {
        let tournamentName = item.querySelector('h2').innerText;
        let tournament = this.getTournamentByName(tournamentName);
        let tournamentIndex = this.getAllTournaments().indexOf(tournament);
        if (tournament !== null) {
            const list = document.getElementById(this._tournamentId)
            list.innerHTML = "";
            tournamentUtils.renderTournamentStats(tournament, this._tournamentId);
            list.appendChild(this.createEditTournamentButton(tournamentIndex));
            list.appendChild(this.createDeleteTournamentButton(tournamentIndex));
            list.appendChild(this.createCloseButton());
        }
    }    

    showTournamentRoster() {
        showTournamentRoster(this._tournamentId);
        const menu = document.getElementById("menu");
        const tournamentItems = Array.from(document.getElementById(this._tournamentId).querySelectorAll('li'));
        tournamentItems.forEach(item => {
            item.addEventListener('click', () => { 
                this.showTournamentStats(item) 
            })
            item.addEventListener('touchend', (ev) => {
                ev.preventDefault();
                this.showTournamentStats(item);
            })
        })
        menu.appendChild(this.createAddTournamentButton());
        menu.appendChild(this.createTournamentBackButton());
    }

    showNewTournament() {
        const menu = document.getElementById("menu");
        tournamentUtils.renderBlankTournament();
        menu.appendChild(this.createSaveTournamentButton());
        menu.appendChild(this.createCloseButton());
    }

    
}