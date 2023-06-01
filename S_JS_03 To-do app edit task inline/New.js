let taskName = document.getElementById('taskName');
let priority = document.getElementById('priority');
let subBtn = document.getElementById('subBtn');
let tableContainer = document.getElementById('tableContainer');
let deleteBtn = document.getElementById('deleteBtn');
let inputTaskVaild = document.getElementById('inputTaskVaild');
let webStatus = "new";
let currentIndex;

// let taskName=document.getElementById("taskName");
console.log(taskName, priority, subBtn)

let taskList = [];


const displayProducts = () => {
    let insertTable = '';
    for (let i = 0; i < taskList.length; i++) {
        insertTable += `
    <tr>
    <th class="text-center">${i + 1}</th>
    <td class="text-center">${taskList[i].taskName}</td>
    <td class="text-center">${taskList[i].priority}</td>
    <td class="text-center"><button onclick="deleteItem(${i})" id="deleteBtn"class="btn btn-danger">Delete</button></td>
    <td class="text-center"><button onclick="updateTask(${i})" id="updateBtn"class="btn btn-warning">Update</button></td>
  </tr>
  `;
    }
    tableContainer.innerHTML = insertTable;
}
displayProducts()

subBtn.addEventListener('click', function test() {

    console.log("Current Array ", taskList)

    createNew(taskName);
    clearInputs();


})

const deleteItem = (i) => {
    taskList.splice(i, 1)
    displayProducts()


}

function createNew(taskName) {

    let newTask = {
        taskName: taskName.value, priority: priority.value
    }

    if (taskName.value == "") {
        inputTaskVaild.innerHTML = 'Enter the task Name';

        return;
    }
    else if (priority.value == "") {
        inputTaskVaild.innerHTML = 'Please enter periorty value';
        return;
    }
    else if (priority.value < 0) {
        inputTaskVaild.innerHTML = 'periorty must be greater than 0';
        return;
    }
    else { inputTaskVaild.innerHTML = '';


        if (webStatus === "new") {
           
            taskList.push(newTask);
            
        }
        else {

            taskList[currentIndex] = newTask;
            document.getElementById(`subBtn`).innerHTML = "Submit"
            webStatus = "new";

        }
        displayProducts()

    }
}





function clearInputs() {
    taskName.value = '';
    priority.value = '';

}
const arrangePriority = () => {
    taskList.sort((a, b) => a.priority - b.priority)
    displayProducts()

}


const updateTask = (i) => {

    taskName.value = taskList[i].taskName
    priority.value = taskList[i].priority
    document.getElementById(`subBtn`).innerHTML = "Done"
    webStatus = "update"
    currentIndex = i;

    console.log(i)

}