let teamRoster = [ ]


fetch ('./data/teamRoster.json')
    .then(res => res.json())
    .then (data => {
       teamRoster= data
       console.log (teamRoster);
    });

const editForm = document.getElementById