import React, { useState } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

function App(props) {
  const [habits, setHabits] = useState([
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Running", count: 0 },
    { id: 3, name: "Coding", count: 0 },
  ]);

  const handleIncrement = (habit) => {
    const habits_copy = habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    setHabits(habits_copy);
  };

  const handleDecrement = (habit) => {
    const habits_copy = habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    setHabits(habits_copy);
  };

  const handleDelete = (habit) => {
    const habits_copy = habits.filter((item) => item.id !== habit.id);
    setHabits(habits_copy);
  };

  const handleAdd = (name) => {
    const habits_copy = [...habits, { id: Date.now(), name, count: 0 }];
    setHabits(habits_copy);
  };

  const handleReset = () => {
    const habits_copy = habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    setHabits(habits_copy);
  };
  return (
    <>
      <Navbar total_count={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
}

export default App;

// class App extends React.Component {
//   state = {
//     habits: [
//       { id: 1, name: "Reading", count: 0 },
//       { id: 2, name: "Running", count: 0 },
//       { id: 3, name: "Coding", count: 0 },
//     ],
//   };

//   handleIncrement = (habit) => {
//     const habits = this.state.habits.map((item) => {
//       if (item.id === habit.id) {
//         return { ...habit, count: habit.count + 1 };
//       }
//       return item;
//     });
//     this.setState({ habits: habits });
//   };

//   handleDecrement = (habit) => {
//     const habits = this.state.habits.map((item) => {
//       if (item.id === habit.id) {
//         const count = habit.count - 1;
//         return { ...habit, count: count < 0 ? 0 : count };
//       }
//       return item;
//     });
//     this.setState({ habits: habits });
//   };

//   handleDelete = (habit) => {
//     const habits = this.state.habits.filter((item) => item.id !== habit.id);
//     this.setState({ habits: habits });
//   };

//   handleAdd = (name) => {
//     const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
//     this.setState({ habits });
//   };

//   handleReset = () => {
//     const habits = this.state.habits.map((habit) => {
//       if (habit.count !== 0) {
//         return { ...habit, count: 0 };
//       }
//       return habit;
//     });
//     this.setState({ habits });
//   };

//   render() {
//     return (
//       <>
//         <Navbar total_count={this.state.habits.filter((item) => item.count > 0).length} />
//         <Habits
//           habits={this.state.habits}
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//           onDelete={this.handleDelete}
//           onAdd={this.handleAdd}
//           onReset={this.handleReset}
//         />
//       </>
//     );
//   }
// }
