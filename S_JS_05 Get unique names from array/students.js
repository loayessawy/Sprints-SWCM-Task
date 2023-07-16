tasksArray = [
  ["Nathalie Nader Nabil", "Task 01", "Option 2"],
  ["Youssef Mohamed Ahmed Mohamed Youssef", "Task 01", "Option 1"],
  ["Salma Nasreldin", "Task 01", "Option 1"],
  ["Engy Mostafa", "Task 01", "Option 1"],
  ["Engy Mostafa", "Task 01", "Option 1"],
  ["Engy ahmed mostafa ", "Task 01", "Option 1"],
  ["Abdelhay Nader Abdelhay Abozayed", "Task 01", "Option 1"],
  ["Abdelrahman Shemies", "Task 01", "Option 1"],
  ["Alaa Ahmed", "Task 01", "Option 2"],
  ["Youssef Fathy Mahmoud", "Task 01", "Option 1"],
  ["Mark Bassem", "Task 01", "Option 1"],
  ["Anas Ahmed", "Task 01", "Option 1"],
  ["Adham Hesham", "Task 01", "Option 1"],
  ["Mohamed Ahmed Fahmi", "Task 01", "Option 1"],
  ["rola wafi", "Task 01", "Option 1"],
  ["Moataz Youssef", "Task 01", "Option 2"],
  ["Ahmad Salama", "Task 01", "Option 1"],
  ["Mohamed Ahmed Fahmi", "Task 01", "Option 1"],
  ["Ahmad Salama Abdelaziz", "Task 01", "Option 2"],
  ["Kareem Ramzi El-Tahlawi", "Task 01", "Option 1"],
  ["Alaa Ahmed", "Task 01", "Option 2"],
  ["rola wafi", "Task 01", "Option 2"],
  ["Mohamed Fahmi", "Task 01", "Option 1"],
  ["Mohamed Fahmi", "Task 01", "Option 2"],
  ["Alaa Ahmed", "Task 01", "Option 2"],
  ["Abdelrahman Shemies", "Task 01", "Option 1"],
  ["Nathalie Nader", "Task 01", "Option 1"],
  ["Mariam Ahmed", "Task 01", "Option 1"],
];

///get Unique names from the array of array using

// let newArray = new Map(tasksArray)

// console.log(newArray.keys(), newArray.size)

const uniqueNameFromArray = (tasksArray) => {
  let newTasks = tasksArray.map(task => {
      return task[0];
  });
  let uniqueTask = new Set(newTasks);
  uniqueTask.forEach(task => {
      console.log(task)
  });
}

uniqueNameFromArray(tasksArray);

// var data = [[-1,-1,2],[-1,0,1],[-1,-1,2],[-1,0,1],[-1,-1,2],[-1,0,1],[-1,0,1]]

// var hashMap = {}

// data.forEach(function(arr){
//   // If your subArrays can be in any order, you can use .sort to have consistant order
//   hashMap[arr.join("|")] = arr;
// });

// var result = Object.keys(hashMap).map(function(k){
//   return hashMap[k]
// })

// console.log(result)

// let hamo = new Map(tasksArray.entries())
// for (const [x] of tasksArray) {

//   console.log(x);
// }


