import React, { useState } from 'react';
import '../style/modal.css';
import {AiOutlineClose} from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';

export default function Modal({ habit, setHabitList, setOpenHabitTracker}) {
  const [input, setInput] = useState('')


  const addHabitList = (input) => {

    setHabitList((prev) => {
      
      const id = uuidv4();
      const updatedHabitList = {...prev, [id]: input} 
      return updatedHabitList
    })
  }

  const handleClickAdd = (event) => {
    event.preventDefault()

    if (input.length > 0) {
      addHabitList({name: input, status: false})
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
        <AiOutlineClose onClick={handleClickClose} className='modal__close'/>
      </div>
      {Object.values(habit).map((habit, index) => {
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
