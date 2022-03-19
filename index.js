import { Drug, Pharmacy } from "./pharmacy";

import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 15, 20),
  new Drug("Magic Pill", 15, 40),
  new Drug("Dafalgan", 15, 40)
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  let value = trial.updateBenefitValue();
  log.push(value);
}

/* eslint-disable no-console */
fs.writeFile("output.txt", JSON.stringify(log), err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
