// Code your solution in this file!
const drivers = (['Antonia', 'Nuru', 'Amari', 'Mo']);

function returnFirstTwoDrivers(drivers){
    const twoDrivers = drivers.slice(0,2)
    return twoDrivers
}

function returnLastTwoDrivers(drivers){
    const lastTwoDrivers = drivers.slice(-2)
    return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 
function createFareMultiplier(multiplier){
return ((fare) => {return fare * multiplier});
}

function fareDoubler(fare){
return fare*2
}

function fareTripler(fare){
    return fare*3
    }

function selectDifferentDrivers(arrayOfDrivers, functionThe){    
    return functionThe(arrayOfDrivers);
}
