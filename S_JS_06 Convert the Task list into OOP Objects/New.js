let taskName = document.getElementById('taskName');
let priority = document.getElementById('priority');
let subBtn = document.getElementById('subBtn');
let tableContainer = document.getElementById('tableContainer');
let deleteBtn = document.getElementById('deleteBtn');
let inputTaskVaild = document.getElementById('inputTaskVaild');
let mainCheckBox = document.getElementById("mainCheckTask")
let webStatus = "new";
let currentIndex;
let clickCounter = "1";
let taskList = [];

class Task {

    constructor(name, priority) {
        this.taskName = name;
        this.priority = priority;
        this.status = "new";
    }
    validate() {
        if (this.taskName == "") {
            return 'Enter the task Name';
        }
        else if (this.priority == "") {
            return 'Please enter periorty value';

        }
        else if (this.priority < 0) {
            return 'periorty must be greater than 0';
        }
        else {
            return "";
        }
    }
    updateName(name) {
        this.taskName = name;
    }
    updatePriorty() {
        this.priority = priority;
    }

}
function activateUpdateStatus(i) {
    console.log("hi", document.getElementById(`taskStatus-${i}`))
    let x = document.getElementById(`taskStatus-${i}`);
    if (x !== "Done") {
      x.innerText = "Done";
    } else{
        x.innerText = "new";
    }
    // this.status = "Done";
    // document.getElementById(`taskStatus-${i}`).innerText = "Done"
}
// let taskName=document.getElementById("taskName");
console.log(taskName, priority, subBtn)

selectAllTasks = () => {
    mainCheckBox = document.querySelectorAll("input[type='checkbox']")
    mainCheckBox.forEach(box => {
        if (box.id == "mainCheckTask") return;
        box.checked = !box.checked;
        console.log("djsa")
    });


}
deleteAllTasks = () => {


    taskList = [];
    displayProducts()


}

const displayRow = (i) => {
    if (taskList[i].status === "new") {
        return `
<tr id="row-${i}">
<td><input type="checkbox" id="checkTask-${i}" class="col" name="checkTask" ></td>
<th class="text-center">${i + 1}</th>
<td class="text-center">${taskList[i].taskName}</td>
<td class="text-center">${taskList[i].priority}</td>
<td class="text-center" id="taskStatus-${i}" onclick="activateUpdateStatus(${i})">${taskList[i].status}</td>
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
<td class="text-center" id="taskStatus-${i}" onclick="activateUpdateStatus(${i})">${taskList[i].status}</td>
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

    let task1 = new Task(taskName.value, priority.value);
    inputTaskVaild.innerHTML = task1.validate();
    if (inputTaskVaild.innerHTML === "") {
        taskList.push(task1);
    }

    displayProducts()
}

function clearInputs() {
    taskName.value = '';
    priority.value = '';
}

const arrangePriority = () => {
    if (clickCounter === "1") {
        newTasktList = taskList.slice();
        taskList.sort((a, b) => a.priority - b.priority)
        clickCounter = "2";
    }
    else if (clickCounter === "2") {
        taskList.sort((a, b) => b.priority - a.priority)
        document.getElementById('arrow-arrenge').style.display = 'none';

        clickCounter = "3";
    }
    else if (clickCounter === "3") {
        document.getElementById('arrow-arrenge').style.display = 'inline';
        // document.getElementById('arrangeBtn').textContent = "Arrenge";
        taskList = newTasktList;
        clickCounter = "1";
    }
    displayProducts()
}

const updateTask = (i) => {
    taskList[i].status = 'update';

    currentIndex = i;
    document.getElementById(`row-${i}`).outerHTML = displayRow(i);

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

