manager();

async function manager() {
  await fetchRider();
  await fetchTeam();

  const riderTable = document.querySelector("#riderTable");
  await createRiderTable(riderMap, riderTable);
}
