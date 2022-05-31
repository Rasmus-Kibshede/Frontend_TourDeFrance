function clearTable(table) {
  const rowCount = table.getElementsByTagName("tr").length;

  for (let i = 1; i < rowCount; i++) {
    table.deleteRow(1);
  }
}

//TODO Replace to another js file
function displayRiderTable(rider, table) {

  let rowCount = table.rows.length;
  let row = table.insertRow(rowCount);
  let colCount = 0;
  let cell;

  cell = row.insertCell(colCount++);
  cell.textContent = rider.rider_id;

  cell = row.insertCell(colCount++);
  cell.textContent = rider.rider_firstname;

  cell = row.insertCell(colCount++);
  cell.textContent = rider.rider_middlename;

  cell = row.insertCell(colCount++);
  cell.textContent = rider.rider_lastname;

  cell = row.insertCell(colCount++);
  cell.textContent = rider.rider_country;

  cell = row.insertCell(colCount++);
  cell.textContent = rider.rider_weight;

  cell = row.insertCell(colCount++);
  cell.textContent = rider.rider_height;

  cell = row.insertCell(colCount++);
  cell.textContent = format(new Date(rider.rider_birthday));

  cell = row.insertCell(colCount++);
  cell.textContent = rider.rider_leader;

  cell = row.insertCell(colCount++);
  cell.textContent = rider.rider_time;

  cell = row.insertCell(colCount++);
  cell.textContent = rider.rider_mountain_point;

  cell = row.insertCell(colCount++);
  cell.textContent = rider.rider_sprint_point;

  cell = row.insertCell(colCount++);

  teamMap.forEach(team => {

    team.riders.forEach(teamRider => {
      if (teamRider.rider_id === rider.rider_id) {
        cell.textContent = team.team_name;
      }
    });
  });
}


function displayTeamTable(teamMap, table) {

  teamMap.forEach(team => {
    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);
    let colCount = 0;
    let cell;

    /*cell = row.insertCell(colCount++);
    cell.textContent = team.team_id;*/

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
}

