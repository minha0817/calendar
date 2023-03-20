import React, { useState } from 'react';
import '../style/modal.css';
import {AiOutlineClose} from 'react-icons/ai';

export default function Modal({ setOpenHabitTracker}) {
  const habitList = ['Coding', 'Work out', 'Reading a book']
  const [input, setInput] = useState('')
  const [habit, setHabitList] = useState(habitList)

  const addHabitList = (input) => {
    setHabitList((prev) => {
      const updatedHabitList = [...prev, input]
      return updatedHabitList
    })
  }

  const handleClickAdd = (event) => {
    event.preventDefault()

    if (input.length > 0) {
      addHabitList(input)
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
      {habit.map((habit, index) => {
        return (
          <li className="modal__list" key={index}>
            {habit}
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
