let taskName = document.getElementById('taskName');
let priority = document.getElementById('priority');
let subBtn = document.getElementById('subBtn');
let tableContainer = document.getElementById('tableContainer');
let deleteBtn = document.getElementById('deleteBtn');
let inputTaskVaild = document.getElementById('inputTaskVaild');
let webStatus = "new";
let currentIndex;
let clickCounter="1";


// let taskName=document.getElementById("taskName");
console.log(taskName, priority, subBtn)

let taskList = [];

const displayRow = (i) => {
    if (taskList[i].status === "new") {
        return `
<tr id="row-${i}">
<th class="text-center">${i + 1}</th>
<td class="text-center">${taskList[i].taskName}</td>
<td class="text-center">${taskList[i].priority}</td>
<td class="text-center">${taskList[i].status}</td>
<td class="text-center"><button onclick="deleteItem(${i})" id="deleteBtn"class="btn btn-danger">Delete</button></td>
<td class="text-center"><button onclick="updateTask(${i})" id="updateBtn"class="btn btn-warning">Update</button></td>
</tr>
`;
    }

    else {
        return `
<tr id="row-${i}">
<th class="text-center">${i + 1}</th>
<td class="text-center"><input type="text" placeholder="Enter your task name" value="${taskList[i].tmpData?.name ?? taskList[i].taskName}" id="taskName-${i}" class=" form-control mx-3 "></td>
<td class="text-center"><input type="number" placeholder="priority" value="${taskList[i].tmpData?.priority ?? taskList[i].priority}" id="priority-${i}" class=" form-control mx-3 "></td>
<td class="text-center">${taskList[i].status}</td>
<td class="text-center"><button onclick="deleteItem(${i})" id="deleteBtn"class="btn btn-danger">Delete</button></td>
<td class="text-center"><button onclick="saveTask(${i})" id="saveBtn"class="btn btn-warning">Save</button></td>
</tr>
`;
    }
}

const displayProducts = () => {
    let insertTable = '';
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].status === "update") {
            taskList[i].tmpData = {
                name: document.getElementById(`taskName-${i}`).value,
                priority: document.getElementById(`priority-${i}`).value
            }
        }
        insertTable += displayRow(i);
        taskList[i].tmpData = null;
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
        taskName: taskName.value, priority: priority.value, status: 'new'
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
    else {
        inputTaskVaild.innerHTML = '';
        taskList.push(newTask);
    }
    displayProducts()
}

function clearInputs() {
    taskName.value = '';
    priority.value = '';
}

const arrangePriority = () => {
    if (clickCounter ==="1") {
        newTasktList = taskList.slice();
        taskList.sort((a, b) => a.priority - b.priority) 
        clickCounter ="2";
    }
    else if (clickCounter ==="2"){taskList.sort((a, b) => b.priority - a.priority)
        document.getElementById('arrow-arrenge').style.display = 'none';
        s
        clickCounter ="3";
    }
    else if (clickCounter ==="3"){
        document.getElementById('arrow-arrenge').style.display = 'inline';
        // document.getElementById('arrangeBtn').textContent = "Arrenge";
        taskList=newTasktList;
        clickCounter ="1";
    }
    displayProducts()
}

const updateTask = (i) => {
    taskList[i].status = 'update';
    // document.getElementById("saveAllBtn").style.display = "block"
    currentIndex = i;
    document.getElementById(`row-${i}`).outerHTML = displayRow(i);
    //displayProducts()
}

const saveTask = (i) => {
    taskList[i].taskName = document.getElementById(`taskName-${i}`).value;
    taskList[i].priority = document.getElementById(`priority-${i}`).value;
    taskList[i].status = 'new';
    displayProducts()
}

const saveAllEdits = (i) => {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].status === 'update') {
            taskList[i].taskName = document.getElementById(`taskName-${i}`).value;
            taskList[i].priority = document.getElementById(`priority-${i}`).value;
            console.log("Hello")
            document.getElementById("saveAllBtn").style.display = "none"
            taskList[i].status = 'new';
        }
    }
    displayProducts()
}

