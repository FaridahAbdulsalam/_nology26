// reference data types/ collection data types/ complex data types

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
    vacType = "[Beach Getaway]"
  }else if(vacationType === "city"){
    vacType = "[City Break]"
  } else if(vacationType === "nature"){
    vacType = "[Nature Retreat]"
  }else {
    vacType = `[${vacationType}]`
  }
  return `${vacType}  ${locationName} (${budget})`
};


// Step 3: Use .map() to create your formattedBrochure array here
const formattedBrochure = holidayDestinations.map(formatDestination)


// Step 4: console.log your formattedBrochure array
console.log(formattedBrochure);

/* "['[Beach Getaway] Maldives (1200)','[City Break] Tokyo (800)','[Nature Retreat] Swiss Alps (1500)','[Beach Getaway] Bali (900)','[City Break] New York (1100)']"*/


