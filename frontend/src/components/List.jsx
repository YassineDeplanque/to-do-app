import { useState, useEffect } from 'react';
import axios from 'axios';

function List() {

    const [task, setTask] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/todo')
          .then((res) => {
            setTask(res.data)
          })
          .catch((err) => {
            setError(err.message)
          })
    }, [])

  return (
    <>
    <h1>hello world</h1>
      <ul>
        {task.map((t) => (
           <li key={t.id}>{t.texte}</li>
        ))}
      </ul>
    </>
  )
}

export default List;
