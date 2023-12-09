const cron = require('node-cron');
const moment = require('moment');

// Function to execute the task
const executeTask = (task) => {
  console.log(`Executing task: ${task.name} at ${moment().format('YYYY-MM-DD HH:mm:ss')}`);
  // Add your task logic here
  // For example: Call an API, run a function, etc.
};

// Function to schedule a task
const scheduleTask = (task) => {
  const { name, time, frequency } = task;

  console.log(`Scheduling task: ${name} at ${time} with frequency ${frequency}`);

  // Use node-cron to schedule the task
  const cronExpression = `${time} */${frequency} * * *`; // Format: 'minute hour day month dayOfWeek'
  
  cron.schedule(cronExpression, () => {
    executeTask(task);
  });
};

// Example tasks
const tasks = [
  { name: 'Task 1', time: '0', frequency: '1' }, // Run every hour at minute 0
  { name: 'Task 2', time: '30', frequency: '2' }, // Run every 2 hours at minute 30
  // Add more tasks as needed
];

// Schedule tasks
tasks.forEach((task) => {
  scheduleTask(task);
});

console.log('Cron jobs scheduled successfully.');
