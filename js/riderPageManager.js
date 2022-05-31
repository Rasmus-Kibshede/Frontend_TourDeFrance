let clickCount = 0;
const riderTime = document.querySelector("#riderTime");

manager();

async function manager() {

  if (clickCount === 0) {
    await fetchRider("riders");
    clickCount = 1;
  } else {
    await fetchRider("sort/riders");
    clickCount = 0;
  }

  await fetchTeam();

  await tables();
}

async function tables() {
  const riderTable = document.querySelector("#riderTable");
  clearTable(riderTable);
  await createRiderTable(riderMap, riderTable);
}

riderTime.addEventListener("click", manager);
