//Travel Agent Task 

// The starting data
const holidayDestinations = [
  { locationName: "Maldives", vacationType: "beach", budget: 1200 },
  { locationName: "Tokyo", vacationType: "city", budget: 800 },
  { locationName: "Swiss Alps", vacationType: "nature", budget: 1500 },
  { locationName: "Bali", vacationType: "beach", budget: 900 },
  { locationName: "New York", vacationType: "city", budget: 1100 }
];

// Step 1 & 2: Write your formatDestination function here

const formatDestination = ({locationName, vacationType, budget}) => {
  if(vacationType === "beach"){
    return `[Beach Getaway] ${locationName} (${budget})`
  }else if(vacationType === "city"){
    return `[City Break] ${locationName} (${budget})`
  } else {
    return `[Nature Retreat] ${locationName} (${budget})`
  }
};


// Step 3: Use .map() to create your formattedBrochure array here
const formattedBrochure = holidayDestinations.map((destination) => {
  return formatDestination(destination)
});


// Step 4: console.log your formattedBrochure array
console.log(formattedBrochure);

/* "['[Beach Getaway] Maldives (1200)','[City Break] Tokyo (800)','[Nature Retreat] Swiss Alps (1500)','[Beach Getaway] Bali (900)','[City Break] New York (1100)']"*/

// const petName = "Nala";
// const petType = "cub";
// const petAge = 3;

// let happinessLevel = 10;
// let hungerLevel = 10;
// let energyLevel = 10;

// const feed = () => {
//   if (hungerLevel <= 10) {
//     return `${petName} is not hungry right now.`;
//   } else {
//     hungerLevel -= 20;
//     energyLevel += 10;
//     return `You fed ${petName}. Hunger level is now ${hungerLevel}.`;
//   }
// };

// const play = () => {
//   if (energyLevel <= 20) {
//     return `${petName} is too tired to play.`;
//   } else {
//     happinessLevel += 15;
//     energyLevel -= 20;
//     hungerLevel += 10;
//     return `You played with ${petName}. Happiness level is now ${happinessLevel}.`;
//   }
// };

// const sleep = () => {
//   energyLevel += 30;
//   hungerLevel += 10;
//   return `${petName} took a nap. Energy level is now ${energyLevel}.`;
// };

// const checkPetStatus = () => {
//   return `${petName} is a ${petAge}-year-old ${petType}. Happiness: ${happinessLevel}, Hunger: ${hungerLevel}, Energy: ${energyLevel}.`;
// };

// const checkLevels = () => {
//   return `Happiness: ${happinessLevel}, Hunger: ${hungerLevel}, Energy: ${energyLevel}.`;
// };

// console.log(checkPetStatus());
// console.log(feed());
// console.log(checkLevels());
// console.log(play());
// console.log(checkLevels());
// console.log(sleep());
// console.log(checkLevels());
// console.log(play());
// console.log(checkLevels());
// console.log(feed());
// console.log(checkPetStatus());

// // const checkLevels = () => {
// //     if(happinessLevel >= 50 || energyLevel >= 40 || hungerLevel <= 10) {
// //         return `${petName} is very happy!`;
// //     } else if(happinessLevel <= 30 && energyLevel <= 20 && hungerLevel >= 20) {
// //         return `${petName} is good.`;
// //     } else if(hungerLevel >= 30) {
// //         return `${petName} is hungry.`;
// //     }else {
// //         return `${petName} is doing okay.`;
// //     }
// // }

//reference data types/ collection data types/ complex data types

