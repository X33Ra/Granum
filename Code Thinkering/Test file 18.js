// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  
  taskTitles.push(title);
  taskComplete.push(false);
  taskDescriptions.push(description);

  return task;
};
// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
const completeTask = function(taskIndex) {
  taskComplete[taskIndex] = true;
};

// Print the state of a task to the console in a nice readable way
const logTaskState = function(taskIndex) {
  const title = taskTitles[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
};

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

completeTask(1); // Mark the task at index 1 as complete

task2.logState(); // Do Laundry has been completed

logTaskState(0); // Clean Cat Litter has been completed
logTaskState(1); // Do Laundry has been completed
