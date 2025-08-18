import { useState, useEffect } from 'react';
import axios from 'axios';
import './AddTasks.css';

function AddTasks({ onAdd }) {

    const [error, setError] = useState('');
    const [task, setTask] = useState('');

    function handleAdd () {
      if (!task.trim()) return;
        const newTask = {texte: task}
        axios.post('http://localhost:3000/todo', newTask)
          .then(res => {
            setTask('');
            window.location.reload();
          })
          .catch ((err) => {
            setError(err.message)
          })
    }

    return(
        <>
        <div className='add-container'>
          <h2>Add a task</h2>
            <input placeholder='Task to add...' value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
        </div>
        </>
    )
}

export default AddTasks;