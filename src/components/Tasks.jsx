import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle, onEdit }) => {
  let reminderCount = 0;
  let totalReminderCount = 0;
  tasks.forEach((task) => {
    totalReminderCount++;
    if (task.reminder) {
      reminderCount++;
    }
  });

  return (
    <>
      <div>{ reminderCount === totalReminderCount ? `Congratulations, All tasks are completed 🥳` : `Tasks completed: ${reminderCount}/${totalReminderCount}`}</div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit}></Task>
      ))}
    </>
  );
};

export default Tasks;
