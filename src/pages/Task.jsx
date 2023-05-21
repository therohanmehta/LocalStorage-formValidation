import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import {TextField,Button} from '@mui/material';
import styles from './Task.module.css'
import uuid from 'uuid'
export default function Task(){
  const navigate=useNavigate()
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: newTask }
      ]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, updatedText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: updatedText } : task
      )
    );
  };
  return(
    <> 
     <nav>
     <li onClick={()=>{navigate('/')}}>Home</li>
    <li onClick={()=>{navigate('/task')}}>Task</li>
    <li onClick={()=>{navigate('/contact')}}>Contact</li>
  </nav>
  {/* <br/>
  <div>

   <TextField label='Enter Task' onChange={(e)=>{setNewTask(e.target.value)}}/>
   <Button onClick={()=>{setTask([{id: Date.now(),task:newTask},...task])}}>Enter </Button>
  </div>

    All task

    {task.map((ele)=>(<div key={ele.id} className='taskDiv'><span>{ele.task}</span> <button onClick={(ele.id)=>{}}> X</button> <button onClick={handleEdit(ele.id)}>Edit</button>   </div>   ))} */}
    <div className={styles.taskPage}>
      <h1>Task List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
        className={styles.taskInput}
      />
      <Button onClick={addTask} className={styles.addButton}>
        Add Task
      </Button>
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.taskItem}>
            {task.text}
            <Button
              onClick={() => deleteTask(task.id)}
              className={styles.deleteButton}
            >
              Delete
            </Button>
            <Button
              onClick={() =>
                updateTask(
                  task.id,
                  prompt("Enter the updated task:", task.text)
                )
              }
              className={styles.updateButton}
            >
              Update
            </Button>
          </li>
        ))}
      </ul>
    </div>
  
    </>
  )
}