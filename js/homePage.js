manager();

const riderTableIndexPage = document.querySelector("#riderTableIndexPage");

async function manager() {
  await fetchRider("riders");
  await fetchTeam();


  displayTeamTable(teamMap, document.querySelector("#tableTeam"));
}
