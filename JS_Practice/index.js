const petName = "Nala";
const petType = "cub";
const petAge = 3;

let happinessLevel = 10;
let hungerLevel = 10;
let energyLevel = 10;

const feed = () => {
    if(hungerLevel <= 10) {
        return `${petName} is not hungry right now.`;
    }else{
        hungerLevel -= 20;
        energyLevel += 10;
        return `You fed ${petName}. Hunger level is now ${hungerLevel}.`;
    }
}

const play = () => {
    if(energyLevel <= 20) {
        return `${petName} is too tired to play.`;
    }else {
        happinessLevel += 15;
        energyLevel -= 20;
        hungerLevel += 10;
        return `You played with ${petName}. Happiness level is now ${happinessLevel}.`;
    }
}

const sleep = () => {
    energyLevel += 30;
    hungerLevel += 10;
    return `${petName} took a nap. Energy level is now ${energyLevel}.`;
}

const checkPetStatus = () => {
    return `${petName} is a ${petAge}-year-old ${petType}. Happiness: ${happinessLevel}, Hunger: ${hungerLevel}, Energy: ${energyLevel}.`;
}

// const checkLevels = () => {
//     if(happinessLevel >= 50 || energyLevel >= 40 || hungerLevel <= 10) {
//         return `${petName} is very happy!`;
//     } else if(happinessLevel <= 30 && energyLevel <= 20 && hungerLevel >= 20) { 
//         return `${petName} is good.`;
//     } else if(hungerLevel >= 30) {
//         return `${petName} is hungry.`;
//     }else {
//         return `${petName} is doing okay.`;
//     }
// }

const checkLevels = () => {
    return `Happiness: ${happinessLevel}, Hunger: ${hungerLevel}, Energy: ${energyLevel}.`;
}


console.log(checkPetStatus());
console.log(feed());
console.log(checkLevels());
console.log(play());
console.log(checkLevels());
console.log(sleep());
console.log(checkLevels());
console.log(play());
console.log(checkLevels());
console.log(feed());
console.log(checkPetStatus());