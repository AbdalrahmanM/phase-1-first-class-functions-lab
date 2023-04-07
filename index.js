// Code your solution in this file!
const returnFirstTwoDrivers=(drivers)=>{
    return drivers.slice(0,2);
}
const returnLastTwoDrivers=(drivers)=>{
    return drivers.slice(Math.max(drivers.length-2,0));
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier=function(num){
    return function(num2){
        return num*num2
    }
}
const fareDoubler=function createFareMultiplier(valueDouble){return valueDouble*2};

const fareTripler=function createFareMultiplier (valueTripler){return valueTripler*3;};

const selectDifferentDrivers=(drivers,firstTwoOrLastTwo)=>firstTwoOrLastTwo(drivers);