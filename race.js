let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
// const registeredLate = true;
let runnersAge=132;
// if adult registered early
if (runnersAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

// Step 5: Determine the race time based on the runner's age and registration status
if (runnersAge > 18 && registeredEarly) {
  console.log(`Race will start at 9:30 AM for race number ${raceNumber}.`);
} else if (runnersAge > 18 && !registeredEarly) {
  console.log(`Race will start at 11:00 AM for race number ${raceNumber}.`);
} else if (runnersAge < 18) {
  console.log(`Race will start at 12:30 PM for race number ${raceNumber}.`);
} else if (runnersAge === 18) {
  console.log(`Please see the registration desk for further instructions, race number ${raceNumber}.`);
}
   //see update