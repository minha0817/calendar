import React, { useState } from 'react';
import '../style/modal.css';
import {AiOutlineClose} from 'react-icons/ai';
import axios from 'axios';


export default function Modal({setOpenHabitTracker, clickedDate}) {
  const [input, setInput] = useState('');
  const [habitList, setHabitList] = useState([]);

  // const addHabitList = (input) => {
    
  //   setHabitList((prev) => {
  //     const id = uuidv4();
  //     const updatedHabitList = {...prev, [id]: input} 
  //     return updatedHabitList
  //   })
  // }
  
  const handleClickAdd = (event) => {
    event.preventDefault()
    
    if (input.length > 0) {
      axios
      .post('http://localhost:3500/', {
        clickedDate,
        input
      })
      .then((response) => console.log(response))
      .catch((error) => console.log('error', error))
    }

    setInput('')
  }

  const handleClickClose = () => {
    setOpenHabitTracker(false)
  }

  return (
    <div className="modal">
      <div className='modal__heading'>
        <h2 className="modal__title">Habit tracker</h2>
        <h3 className='modal__date'>{clickedDate}</h3>
        <AiOutlineClose onClick={handleClickClose} className='modal__close'/>
      </div>
      {Object.values(habitList).map((habit, index) => {
        return (
          <li className="modal__list" key={index}>
            {habit.name}
          </li>
        )
      })}
      <form className="modal__form">
        <input
          className="modal__input"
          name="Add habits"
          value={input}
          placeholder="Add Habit!"
          onChange={(event) => {
            setInput(event.target.value)
          }}
        />
        <button className="modal__button" onClick={handleClickAdd}>
          Add
        </button>
      </form>
    </div>
  )
}


