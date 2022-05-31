manager();

async function manager() {
  await fetchTeam();

  await tables();
}

async function tables() {
  const teamTable = document.querySelector("#teamTable");
  clearTable(teamTable);
  await createTeamTable(teamMap, teamTable);
}
