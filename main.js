let raceNumber = Math.floor(Math.random() * 1000);
const early = false;
const age = 18;
if (early && age > 18) {
  raceNumber += 1000;
}

if (early && age > 18) {
  console.log( `The race will start at 9:30, race number will be: ${raceNumber}.`);
}

else if (!early && age > 18){
   console.log( `The race will start at 11:00, race number will be: ${raceNumber}.`);
}

else if ( age < 18){
   console.log( `The race will start at 12:30, race number will be: ${raceNumber}.`);
}
else {
  console.log(`Please, kindly approach the registration desk, thanks!.`)
}