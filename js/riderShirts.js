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

