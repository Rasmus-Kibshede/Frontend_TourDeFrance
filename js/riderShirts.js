const yellow_shirt_table = document.querySelector("#yellow_shirt_table");
const mountain_shirt_table = document.querySelector("#mountain_shirt_table");
const green_shirt_table = document.querySelector("#green_shirt_table");
const white_shirt_table = document.querySelector("#white_shirt_table");


fillShirtDivs();

async function fillShirtDivs() {
  await fetchTeam();
  const shirts = await fetchShirtRiders();

  displayRiderTable(shirts.yellowShirt, yellow_shirt_table);
  displayRiderTable(shirts.mountainShirt, mountain_shirt_table);
  displayRiderTable(shirts.greenShirt, green_shirt_table);
  displayRiderTable(shirts.whiteShirt, white_shirt_table);
}


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



