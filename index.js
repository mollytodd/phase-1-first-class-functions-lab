let drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(2, 4);
};
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
console.log(selectingDrivers);


function multiplier(num1) {
  return num1;
}

function createFareMultiplier(multiplier) {
  return function (fare) {
    return multiplier * fare;
  };
}

// Testing the createFareMultiplier function
const fareMultiplierByFour = createFareMultiplier(4);
console.log(fareMultiplierByFour(9));

const fareDoubler = createFareMultiplier(2)

console.log(fareDoubler);

const fareTripler = createFareMultiplier(3);
console.log(fareTripler);


//const lastTwoDrivers = returnLastTwoDrivers(drivers);

//function selectDifferentDrivers(drivers, lastTwoDrivers){
 // return ( lastTwoDrivers )
//}
//console.log(selectDifferentDrivers(drivers, lastTwoDrivers));

//const lastTwoDrivers = returnLastTwoDrivers(drivers);
//const firstTwoDrivers = returnFirstTwoDrivers(drivers);

//function selectDifferentDrivers(arrayOfDrivers, remainingDriversFunction) 
//{
  //if (selectDifferentDrivers === lastTwoDrivers) 
  //  return (drivers + lastTwoDrivers);
  //else if (selectDifferentDrivers === firstTwoDrivers)
 //     return (drivers + firstTwoDrivers);
//}
//console.log(selectDifferentDrivers(drivers,lastTwoDrivers));
//console.log(selectDifferentDrivers(drivers,firstTwoDrivers));

const lastTwoDrivers = returnLastTwoDrivers(drivers);
const firstTwoDrivers = returnFirstTwoDrivers(drivers);

function selectDifferentDrivers(arrayOfDrivers, remainingDriversFunction) {
  if (remainingDriversFunction === returnLastTwoDrivers) {
    return lastTwoDrivers;
  } else if (remainingDriversFunction === returnFirstTwoDrivers) {
    return firstTwoDrivers;
  }
}

console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));