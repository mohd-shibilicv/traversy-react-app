import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";
import Counter from "./components/EditTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks();
  }, [])

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json()
    return data;
  }

  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await response.json()
    return data;
  }

  const addTask = async (task) => {
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await response.json()

    setTasks([...tasks, data])
    setShowAddTask(false)
  }

  const editTask = async (id, updatedTask) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });
  
    const data = await response.json();
  
    setTasks(tasks.map((task) => (task.id === id ? { ...task, ...data } : task)));
  };

  const editTaskButton = (id) => {
    // Prompt the user for the updated task details
    const updatedTask = prompt('Enter the updated task details');
    if (!updatedTask) {
      return
    }
    const updatedDay = prompt('Enter the updated date');
    if (updatedTask) {
      editTask(id, { text: updatedTask, day: updatedDay });
    }
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await response.json()
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  };

  return (
    <Router>
      <ToastContainer />
      <div className="container border border-gray-500 p-2 rounded-lg">
        <Header onAddText={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} />
      </div>
      <Routes>
        <Route path="/" exact Component={(props) => (
          <>
            {showAddTask && (
              <div className="container border flex justify-center border-gray-500 p-2 rounded-lg my-5">
                <AddTask onAdd={addTask} />
              </div>
            )}
            <div className="container border border-gray-500 mt-5 p-3 rounded-lg">
              {tasks.length === 0 ? (
                <h1 className="text-md font-semibold">No Tasks were added yet</h1>
              ) : (
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} onEdit={editTaskButton} />
              )}
            </div>
          </>
        )} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <Counter />
    </Router>
  );
}

export default App;