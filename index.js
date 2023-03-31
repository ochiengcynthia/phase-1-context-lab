function createEmployeeRecord(arr){
    return {
        firstName:arr[0],
        familyName:arr[1],
        title:arr[2],
        payPerHour:arr[3],
        timeInEvents:[],
        timeOutEvents:[]
    };
}
function createEmployeeRecords(arr){
    let arrobj=[]
    for(let record of arr) {
     arrobj.push(createEmployeeRecord(record))
    }
    return arrobj
}
function createTimeInEvent(time) {
    let newtime=time.split(' ')
    let obj={type:"TimeIn", hour:parseInt(newtime[1]), date:newtime[0]}
    this.timeInEvents.push(obj)
    return this
}
function createTimeOutEvent(time) {
    let newtime=time.split(' ')
    let obj={type:"TimeOut", hour:parseInt(newtime[1]), date:newtime[0]}
    this.timeOutEvents.push(obj)
    return this
}
function hoursWorkedOnDate(date){
    let timeinobj=this.timeInEvents.find(dateobj=>dateobj.date===date).hour
    let timeoutobj=this.timeOutEvents.find(dateobj=>dateobj.date===date).hour
    return (timeoutobj-timeinobj)/100
}
function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date)*this.payPerHour
}
function findEmployeeByFirstName(arr, str){
    let found= arr.find(rcds=>rcds.firstName===str)
    return found
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) 
    return payable}
    

function allPayrollFor(arr){
    const allWages= arr.map(function(employee){
        return allWagesFor.call(employee);
    });
    const totalWages= allWages.reduce(function(acc, wage){
        return acc + wage;
    }, 0);
    const payrollBurden= totalWages * 0.0765;
    return totalWages+ payrollBurden;
}
function calculatePayroll(arr){
    let wagebill=allWagesFor.call(this,...arr).reduce((a,v)=>a+=v)
    return wagebill
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */