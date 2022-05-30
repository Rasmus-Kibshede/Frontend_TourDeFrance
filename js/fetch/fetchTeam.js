const teamMap = new Map();

async function fetchTeam() {

  const url = "http://localhost:8080/teams";

  await fetch(url)
    .then(res => res.json())
    .then(data => data.forEach(team => {
      teamMap.set(team.team_id, team);
    }));
}
