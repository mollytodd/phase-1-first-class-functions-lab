const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // anonymous function assigned to variable, then the assigned
  //function takes one argument (driver), and an array containing
  //names of the scuber drivers. and returns a new array by splicing the
  //first two drivers from the original array. 

  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };

  console.log(returnLastTwoDrivers);  

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
  console.log(selectingDrivers);

  // this is the way to add the two functions as the first and last elements and allows us
  const createFareMultiplier = function(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  };
  
// this returns a function that multiplies by the multiplier passed in
 
const fareDoubler = function(fare) {
    return fare * 2;
  };
// takes in a fare and returns a function that multiplies by 2

const fareTripler = function(fare) {
    return fare * 3;
      };
// same as faredoubler but multiples by 3



const selectDifferentDrivers = function(drivers, selectingDrivers) {
    return selectingDrivers(drivers);
  };

  // i needed help with this last one 