const fs = require("fs");
// we are importing file system from node modules
const filePath = "D:Backend Practise/todo/tasks.json";

const loadTask = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    // this dataBuffer is an object it is not a regular string
    // readFileSync : The program stops and waits for the file to finish reading before moving to the next line.
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveTask = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
  const tasks = loadTask();
  tasks.push({ task });
  saveTask(tasks);
  console.log("Task added ", task);
};

const listTasks = () => {
    const tasks = loadTask();
    tasks.forEach((task,index) => {
        console.log(`${index+1} - ${task.task}`);
    });
}

const removeTask = (index) => {
    index = index - 1;
    const tasks = loadTask();
    tasks.splice(index,1);
    saveTask(tasks);
}


// this process is the "NODE" thing which is coming to us, it is not javascript
const command = process.argv[2]; // "add" or "list" or "remove"
const argument = process.argv[3]; // "buy milk" or "any other task"

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command not found !!");
}
