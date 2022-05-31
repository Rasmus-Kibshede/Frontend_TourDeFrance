createRiderManager();

const teamDropDown = document.querySelector("#teamDropDown");
const createRiderForm = document.querySelector("#createRiderForm");
createRiderForm.addEventListener("submit", createRider);

async function createRiderManager() {
  await fetchTeam();
  await fillTeamDropDown();
}

function fillTeamDropDown() {
  teamDropDown.appendChild(createOption("Team", null));
  teamMap.forEach(team => {
    teamDropDown.appendChild(createOption(team.team_name, team.team_id))
  });
}


async function createRider(event) {

  event.preventDefault();

  const form = event.currentTarget;
  const url = form.action;

  const formData = new FormData(form);

  const rider = Object.fromEntries(formData.entries());

  rider.rider_leader = document.querySelector("#rider_leader").checked;

  rider.team = teamMap.get(parseInt(teamDropDown.options[teamDropDown.selectedIndex].value));
  delete rider.team.riders;

  await restFetch("rider", rider.rider_id, "POST", rider);

  window.location.href = "rider.html";
}
