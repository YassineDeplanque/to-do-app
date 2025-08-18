import { useState, useEffect } from 'react';
import axios from 'axios';
import './List.css'
import AddTasks from './AddTasks';

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

      // Fonction pour ajouter une tâche depuis l'enfant
  const addTask = (newTask) => {
    setTask(prev => [...prev, newTask]);
  };

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
    <div className='list-container'>
    <h3>To do list</h3>
    <AddTasks onAdd={addTask} />
      <ul>
        {task.map((t) => (
           <li key={t.id}>{t.texte} 
          {editingId === t.id ? (
            <>
            <input value={newTask} onChange={(e) => setNewTask(e.target.value)}></input>
            <button onClick={() => handleEdit(t.id)} className='sae'>Save</button>
            <button onClick={() => setEditingId(null)} className='cancel'>Cancel</button>
            </>

          ) : (<><button onClick={() => starEditing(t)} className='edit'>Edit</button> <button onClick={() => handleDelete(t.id)} className='delete'>Delete</button></>

          )}
           </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default List;
