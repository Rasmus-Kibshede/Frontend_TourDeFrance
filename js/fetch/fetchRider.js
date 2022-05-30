const riderMap = new Map();
const shirtMap = new Map();

async function fetchRider() {

  const url = "http://localhost:8080/riders";

  await fetch(url)
    .then(res => res.json())
    .then(data => data.forEach(rider => {
      rider.rider_birthday = format(new Date(rider.rider_birthday.split("T")[0]));
      riderMap.set(rider.rider_id, rider);
    }));
}

async function fetchShirtRiders() {
  return await fetch("http://localhost:8080/shirts/riders")
    .then(res => res.json());
}


async function restFetch(dbTableName, id, method, object) {

  let url = "";

  const fetchOptions = {
    method: method,
    headers: {
      "Content-type": "application/json"
    },
    body: ""
  };

  switch (method) {
    case "DELETE":
      url = "http://localhost:8080/" + dbTableName + "/" + id;
      break
    case "PUT":
    case "POST":
      url = "http://localhost:8080/" + dbTableName;
      fetchOptions.body = JSON.stringify(object);
      break
  }

  await fetch(url, fetchOptions).catch(() => alert(dbTableName + " fecth error on " + method));
}


// formater til dato
function format(inputDate) {
  let date, month, year;

  date = inputDate.getDate();
  month = inputDate.getMonth() + 1;
  year = inputDate.getFullYear();

  date = date
    .toString()
    .padStart(2, '0');

  month = month
    .toString()
    .padStart(2, '0');

  return `${date}-${month}-${year}`;
}

function formatDate(string) {
  const dateArray = string.split('-');

  const dateFormat = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0];
  return dateFormat;
}
