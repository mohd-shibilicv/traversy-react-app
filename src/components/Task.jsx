import { FaTimes } from "react-icons/fa";
import { Button } from 'flowbite-react';
import { FaRegEdit } from "react-icons/fa";


const Task = ({ task, onDelete, onToggle, onEdit }) => {
  return (
    <>
      <div className={`p-2 rounded-lg text-gray-900 ${task.reminder && "bg-gray-200 scale-95"} m-2 border border-gray-900`} onDoubleClick={() => onToggle(task.id)}>
        <span className={`${task.reminder && "line-through"}`}>{task.text} </span>
        <div className={`absolute -mt-${task.day ? 3 : 5}`}>
            <span className="justify-end text-gray-900 hover:text-red-700 cursor-pointer" onClick={() => onDelete(task.id)}>
            < FaTimes />
            </span>
        </div>
        <span className="block text-xs">{task.day}</span>
        <div className="flex justify-end ">
          { !task.reminder && (
          <Button className={`absolute -mt-${task.day ? 8 : 7}`} color="dark" onClick={() => onEdit(task.id)}>
            <span className="cursor-pointer">
              <FaRegEdit />
            </span>
          </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Task;
