manager();

const riderTableIndexPage = document.querySelector("#riderTableIndexPage");

async function manager() {
  await fetchRider("riders");
  await fetchTeam();


  displayTeamTable(teamMap, document.querySelector("#tableTeam"));
}


/*function displayTeamTable(teamMap, table) {

  teamMap.forEach(team => {
    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);
    let colCount = 0;
    let cell;

    cell = row.insertCell(colCount++);
    cell.textContent = team.team_id;

    cell = row.insertCell(colCount++);
    cell.textContent = team.team_name;

    cell = row.insertCell(colCount++);
    const viewRiders = document.createElement("button");
    viewRiders.className = "button";
    viewRiders.appendChild(createI("fa-solid fa-eye fa-2xl"));
    viewRiders.onclick = async function () {

      clearTable(riderTableIndexPage);
      riderTableIndexPage.style.display = "table";
      team.riders.forEach(rider => {
        displayRiderTable(rider, riderTableIndexPage);
      });


    };
    cell.appendChild(viewRiders);
  });
}*/
>>>>>>> origin/main
