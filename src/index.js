import footballPlayerNames from "./footballer-names.json" assert { type: "json" };
import uniqueRandomArray from "unique-random-array";

console.log(footballPlayerNames);

export let footballerNames = {
  all: footballPlayerNames,
  random: uniqueRandomArray(footballPlayerNames),
};

function foobar() {
  return "foobar";
}
