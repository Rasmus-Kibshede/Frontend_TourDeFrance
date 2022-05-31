function createRiderTable(data, table) {

  data.forEach(rider => {

    let rowCount = riderTable.rows.length;
    let row = riderTable.insertRow(rowCount);
    let colCount = 0;
    let cell;

    cell = row.insertCell(colCount++);
    cell.textContent = rider.rider_id;

    cell = row.insertCell(colCount++);
    const rider_firstname = createInput("input", rider.rider_firstname, "text");
    cell.appendChild(rider_firstname);

    cell = row.insertCell(colCount++);
    const rider_middlename = createInput("input", rider.rider_middlename, "text");
    cell.appendChild(rider_middlename);

    cell = row.insertCell(colCount++);
    const rider_lastname = createInput("input", rider.rider_lastname, "text");
    cell.appendChild(rider_lastname);


    cell = row.insertCell(colCount++);
    const rider_country = createInput("input", rider.rider_country, "text");
    cell.appendChild(rider_country);


    cell = row.insertCell(colCount++);
    const rider_weight = createInput("input", rider.rider_weight, "number");
    cell.appendChild(rider_weight);


    cell = row.insertCell(colCount++);
    const rider_height = createInput("input", rider.rider_height, "number");
    cell.appendChild(rider_height);


    cell = row.insertCell(colCount++);
    const rider_birthday = document.createElement("input");
    rider_birthday.setAttribute("type", "date");
    rider_birthday.valueAsDate = new Date(formatDate(rider.rider_birthday));
    cell.appendChild(rider_birthday);


    cell = row.insertCell(colCount++);
    const rider_leader = createInput("input", rider.rider_leader, "checkbox");
    rider_leader.checked = rider.rider_leader;
    cell.appendChild(rider_leader);

    cell = row.insertCell(colCount++);
    const rider_time = createInput("input", rider.rider_time, "number");
    rider_time.step = "0.1";
    cell.appendChild(rider_time);

    cell = row.insertCell(colCount++);
    const rider_mountain_point = createInput("input", rider.rider_mountain_point, "number");
    cell.appendChild(rider_mountain_point);


    cell = row.insertCell(colCount++);
    const rider_sprint_point = createInput("input", rider.rider_sprint_point, "number");
    cell.appendChild(rider_sprint_point);

    cell = row.insertCell(colCount++);
    const teamDropDown = createSelect("teamDropDown", "teamDropDown");

    teamMap.forEach(team => {
      teamDropDown.appendChild(createOption(team.team_name, team.team_id));

      team.riders.forEach(teamRider => {
        if (teamRider.rider_id === rider.rider_id) {
          teamDropDown.value = team.team_id;
        }
      });
    });
    cell.appendChild(teamDropDown);

    cell = row.insertCell(colCount++);
    const updateBtn = document.createElement("button");
    updateBtn.appendChild(createI("fa-solid fa-pen-to-square"));
    updateBtn.onclick = async function () {

      rider.rider_firstname = rider_firstname.value;
      rider.rider_middlename = rider_middlename.value;
      rider.rider_lastname = rider_lastname.value;
      rider.rider_country = rider_country.value;
      rider.rider_weight = rider_weight.value;

      rider.rider_height = rider_height.value;
      rider.rider_weight = rider_weight.value;
      rider.rider_birthday = rider_birthday.value;
      rider.rider_time = rider_time.value;
      rider.rider_mountain_point = rider_mountain_point.value;
      rider.rider_sprint_point = rider_sprint_point.value;

      rider.team = teamMap.get(parseInt(teamDropDown.options[teamDropDown.selectedIndex].value));
      delete rider.team.riders;

      updateRider(rider);
    };
    cell.appendChild(updateBtn);

    cell = row.insertCell(colCount++);
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(createI("fa-solid fa-trash-can"));
    deleteBtn.onclick = async function () {
      deleteRow(row, rider);
    };
    cell.appendChild(deleteBtn);
  });
}

async function updateRider(rider) {
  await restFetch("rider", rider.rider_id, "POST", rider);
}

async function deleteRow(row, rider) {
  await restFetch("rider", rider.rider_id, "DELETE", rider);
  riderTable.deleteRow(row.rowIndex);
}





