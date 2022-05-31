const createTeamForm = document.querySelector("#createTeamForm");
createTeamForm.addEventListener("submit", createTeam);

async function createTeam(event) {

  event.preventDefault();

  const form = event.currentTarget;
  const url = form.action;

  const formData = new FormData(form);

  const team = Object.fromEntries(formData.entries());

  restFetch("team", team.team_id, "POST", team);
}
