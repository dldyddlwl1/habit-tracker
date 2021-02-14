import React from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

function Habits(props) {
  const handleAdd = (name) => {
    props.onAdd(name);
  };

  return (
    <div>
      <HabitAddForm onAdd={handleAdd} />
      <ul>
        {props.habits.map((e) => (
          <Habit
            key={e.id}
            habit={e}
            onIncrement={props.onIncrement}
            onDecrement={props.onDecrement}
            onDelete={props.onDelete}
          />
        ))}
      </ul>
      <button className="habit-reset" onClick={props.onReset}>
        Reset
      </button>
    </div>
  );
}

export default Habits;
