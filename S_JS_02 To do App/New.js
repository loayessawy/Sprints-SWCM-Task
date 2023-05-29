let taskName = document.getElementById('taskName');
let piriorty = document.getElementById('piriorty');
let subBtn = document.getElementById('subBtn');
let tableContainer = document.getElementById('tableContainer');
let deleteBtn = document.getElementById('deleteBtn');
let inputTaskVaild = document.getElementById('inputTaskVaild');

// let taskName=document.getElementById("taskName");
console.log(taskName, piriorty, subBtn)

let taskList = [];


const displayProducts = () => {
    let insertTable = '';
    for (let i = 0; i < taskList.length; i++) {
        insertTable += `
    <tr>
    <th class="text-center">${i + 1}</th>
    <td class="text-center">${taskList[i].taskName}</td>
    <td class="text-center">${taskList[i].piriorty}</td>
    <td class="text-center"><button onclick="deleteItem(${i})" id="deleteBtn"class="btn btn-danger">Delete</button></td>
  </tr>
  `;
    }
    tableContainer.innerHTML = insertTable;
}
displayProducts()

subBtn.addEventListener('click', function test() {

    console.log("Current Array ", taskList)

    createNew(taskName);
    clearDate();


})

const deleteItem = (i) => {
    taskList.splice(i, 1)
    displayProducts()

}

function createNew(taskName) {
    if (taskName.value == "") {
        inputTaskVaild.innerHTML='Enter the task Name';
        
        return;
    }
    else if (piriorty.value == "")
    {
        inputTaskVaild.innerHTML='Please enter periorty value';
        return;
    }
    else if (piriorty.value < 0)
    {
        inputTaskVaild.innerHTML='periorty must be greater than 0';
        return;
    }
        else {
            inputTaskVaild.innerHTML='';
    
    let newTask = {
        taskName: taskName.value, piriorty: piriorty.value
    }
   
    taskList.push(newTask);
    displayProducts()

}
}






function clearDate() {
    taskName.value = '';
    piriorty.value = '';
    
}


