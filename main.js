// Assignment 1 Asynchrounous // 
// Question # 1
// function fetchGreeting(){
//     setTimeout(()=>{
//             console.log("HELLO");
//      }, 2000)
// }
// fetchGreeting()
// Question # 2
// function simulateTask(){
//     console.log("Task Started");
//     setTimeout(() => {
//         console.log("Task Complete");
//     }, 1000);
// }
// simulateTask()
// Question # 3
// function fetchData (){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data fetch successfully!")
//         }, 1000);
//     })
// }
// fetchData().then((fetchData)=>{fetchData})
//// Question # 4
// function fetchWithError() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let a = true
//             if (a) {
//                 resolve("Data fetched successfully!")
//             } else {
//                 reject("Data fetch failed!")
//             }
//         }, 1000);
//     })
// }
// fetchWithError().then((fetchData)=>{console.log(fetchData);}).catch((rej)=>{rej})
// /// Question # 5
function fetchData1() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
function executeSequentially() {
    var processData = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("processData successfully!");
        }, 1000);
    });
    var fetchDatacall = fetchData1().then(function (resolve) { resolve; });
    return processData;
}
executeSequentially().then(function (res) { res; }).catch(function (rej) { rej; });
