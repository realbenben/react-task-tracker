import { useState } from "react";
const AddTask = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="add Task" />
      </div>
      <div className="form-control form-control-check">
        <label>Day & Time</label>
        <input type="text" placeholder="add day & time" />
      </div>
      <div className="form-control">
        <label>Reminder</label>
        <input type="checkbox" />
      </div>
      <input type="submit" value="save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
