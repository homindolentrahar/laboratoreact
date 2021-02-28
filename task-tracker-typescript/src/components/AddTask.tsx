import { FormEvent, useState } from "react";
import { TasksInterface } from "../types/interfaces";

type AddTaskProps = {
  onAdd: (task: TasksInterface) => void;
};

const AddTask = ({ onAdd }: AddTaskProps) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    const id = Math.floor(Math.random() * 1000) + 1;
    onAdd({ id, text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
