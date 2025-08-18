import { useState, useEffect } from 'react';
import axios from 'axios';

function List() {

    const [task, setTask] = useState([]);
    const [error, setError] = useState('');
    const [newTask, setNewTask] = useState('');
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/todo')
          .then((res) => {
            setTask(res.data)
          })
          .catch((err) => {
            setError(err.message)
          })
    }, [])

    const handleDelete = (id) => {
      axios.delete(`http://localhost:3000/todo/${id}`)
      .then((res) => {
        setTask(task.filter(c => c.id !== id))
      })
      .catch((err) => {
        setError(err.message)
      })
    }

    const starEditing = (tasks)=> {
      setEditingId(tasks.id);
      setNewTask(tasks.texte)
      console.log(newTask)
    }

    const handleEdit = (id) => {
      axios.put(`http://localhost:3000/todo/${id}`, {texte: newTask})
      .then(() => {
        setTask(task.map(t => t.id === id ? {...t, texte: newTask} : t))
        setEditingId(null)
      })
      .catch(err => console.error(err))
    }

  return (
    <>
    <h3>To do list</h3>
      <ul>
        {task.map((t) => (
           <li key={t.id}>{t.texte} 
          {editingId === t.id ? (
            <>
            <input value={newTask} onChange={(e) => setNewTask(e.target.value)}></input>
            <button onClick={() => handleEdit(t.id)}>Save</button>
            <button onClick={() => setEditingId(null)}>Cancel</button>
            </>

          ) : (<><button onClick={() => starEditing(t)}>Edit</button> <button onClick={() => handleDelete(t.id)}>Delete</button></>

          )}
           </li>
        ))}
      </ul>
    </>
  )
}

export default List;
