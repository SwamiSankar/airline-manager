//import chance from "chance";

const RandExp = require("randexp");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
let Chance = require("chance");
let chance = new Chance();

const flight_slot = () => {
  const available_slots = ["1300", "1800", "2100"];
  let slot =
    available_slots[Math.floor(Math.random() * available_slots.length)];
  return slot;
};

const food_preference = () => {
  const available_preferences = ["veg", "non-veg", "no preference"];
  let preference =
    available_preferences[
      Math.floor(Math.random() * available_preferences.length)
    ];
  return preference;
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const seat_number = () => {
  let seat = new RandExp("^[A-H][1-6]").gen();
  if (seat.charAt(0) == seat.charAt(0).toLowerCase()) {
    seat = capitalizeFirstLetter(seat);
  }
  return seat;
};

pax_array = [];
for (let i = 0; i < 30; i++) {
  let pax_json = {
    id: i + 1,
    name: chance.name(),
    age: chance.age(),
    slot: flight_slot(),
    seat: seat_number(),
    preference: food_preference(),
    ancillary: Math.random() <= 0.5,
  };

  pax_array.push(pax_json);
}

let result_json = JSON.stringify(pax_array);

console.log(result_json);

const post_url = " http://localhost:3000/passenger_list/";

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: result_json,
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
