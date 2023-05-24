// Your code here
function createEmployeeRecord(array){
    const obj = {
firstName: [0],
familyName: array[1],
title: [2],
payPerHour: [3],
timeInEvents: [],
timeOutEvents: []
    }
    return obj;
}

function createEmployeeRecords(twoRows){
    let anArray = [];
    twoRows.array.forEach(element => {
        anArray.push(createEmployeeRecords(element))
    });
    return anArray;
}

function createTimeInEvent(employee, dateStamp){
   let [date, hour] = dateStamp.split("");
   employee.timeInEvents.push({
    type: 'timeIn',
    hour: parseInt(hour, 10),
    date,
   })
   return employee;
}

function createTimeOutEvent(employee, dateStamp){
    let [date, hour] = dateStamp.split("");
    employee.createTimeOutEvent.push({
        type: 'timeOut',
        hour: parseInt(hour, 10),
        date,
    })
    return employee;
}

function hoursWorkedOnDate(employee, soughtDate){
    let inEvent = employee.timeInEvents.find(function(e){
        e.date === soughtDate;
    })
    let outEvent = employee.timeOutEvents.find(function(e){
        e.date === soughtDate;
    })
    return(outEvent.hour - inEvent.hour)/100;
}