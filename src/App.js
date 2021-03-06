import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Task from "./components/Task";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);
  // fetch task
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  // ADD TASK
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...Task, newTask]);
  };
  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // TOGGLE REMINDER\\
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //   test for fun
  // const name = "benben";
  // const x = true;
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "no tasks to show"
      )}
      {/*
      test for fun
      <h1>hello everybody</h1>
      <h1>hello {name}</h1>
      <h2> yo j'ai {3 + 33} ans </h2>
      <h3>hello {x ? "yes" : "no"}</h3>
      <h3>hello {x ? "mon pote" : "connard"}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quisquam
        dolores ducimus ab voluptate dignissimos non exercitationem distinctio
        numquam, facere, minima suscipit assumenda officiis? Officiis omnis
        repellat nobis unde minus.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea,
        consectetur! Eos a quos, unde ratione quia vel. Nulla pariatur
        architecto nam excepturi vel ut magni soluta, quia tenetur eos adipisci.
        Ea optio debitis incidunt temporibus impedit vel illum atque modi.
        Obcaecati aspernatur fugit dolore ipsum, explicabo quae dolor quam error
        officia nisi voluptas nesciunt reiciendis pariatur enim ratione tenetur
        dignissimos. Maxime mollitia ad omnis. Ipsam voluptatem modi ipsum odio
        repellendus eligendi, ratione sequi tenetur vitae velit, sint labore eum
        commodi, itaque consequuntur unde magni eos vero facilis tempore?
        Pariatur, id?
      </p>
      <img
        src="https://www.micromania.fr/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-masterCatalog_Micromania/default/dwce267cd9/images/high-res/3180153_scrmax.jpg?sw=760&sh=760&sm=fit"
        alt="sponge bob"
      />
      <img
        src="https://casoar.org/wp-content/uploads/2020/10/Bob-leponge.png"
        alt="sponge bob"
      />
      <img
        src="https://www.francetvinfo.fr/pictures/zY7OXw2jlZXZ1ILSep1wxBUiC7Q/752x423/2019/04/11/bobeponge.jpg"
        alt="sponge bob"
      /> */}
    </div>
  );
}

export default App;
