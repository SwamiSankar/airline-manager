import fetch from "node-fetch";

let existing_slots = []; // Results will go here
let nowHour = new Date().getHours(); // Get current hour of the day

// Loop from current hour number to 23
for (let i = nowHour; i < 24; i++) {
  existing_slots.push(i + "00"); // Put loop counter into array with "00" next to it
}

console.log(existing_slots);

function convert_json(result_json, input_slots) {
  result_json.output_slots = input_slots;
  return result_json;
}

let result_json = {
  id: 1,
};

let url = "http://localhost:3000/available_slots";

// function fetch_slots() {
//   return fetch(url)
//     .then((result) => {
//       return result.json();
//     })
//     .then((slots) => {
//       return slots;
//     });
// }

// let available_slots = [];

// fetch_slots().then((result) => {
//   console.log(result);
// });

const fetch_slots = async () => {
  let response = await fetch(url);
  let data = await response.json();
  data = JSON.stringify(data);
  data = JSON.parse(data);
  return data;
};

let available_slots = await fetch_slots();

console.log(available_slots);
//console.log(Array.isArray(available_slots)); True

let final_slots = existing_slots.filter((slot) =>
  available_slots.includes(slot)
);

console.log(final_slots);

result_json = convert_json(result_json, final_slots);

console.log(result_json);

const post_url = "http://localhost:3000/display_slots/";

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(result_json),
};

fetch(post_url, options)
  .then((data) => {
    if (!data.ok) {
      throw Error(data.status);
    }
    return data.json();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => console.log(e));
