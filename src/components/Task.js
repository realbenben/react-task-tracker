import { FaTimes } from "react-icons/fa";
const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>
        {task.text} <FaTimes />
      </h3>
      <h5>{task.day}</h5>
    </div>
  );
};

export default Task;
