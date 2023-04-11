import React, { useState } from 'react'
import '../style/modal.css'
import { AiOutlineClose } from 'react-icons/ai'
import axios from 'axios'

export default function Modal({ setOpenHabitTracker, clickedDate, habitList }) {
  const [input, setInput] = useState('')

  const handleClickAdd = (event) => {
    event.preventDefault()

    if (input.length > 0) {
      axios
        .post('http://localhost:3500/', {
          clickedDate,
          input,
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
      <div className="modal__heading">
        <h2 className="modal__title">Habit tracker</h2>
        <h3 className="modal__date">{clickedDate}</h3>
        <AiOutlineClose onClick={handleClickClose} className="modal__close" />
      </div>
      <div>
        {habitList &&
          habitList.length > 0 &&
          habitList.map((habit, index) => {
            return <li key={index}>{habit}</li>
          })}
      </div>
      <form className="modal__form" onSubmit={handleClickAdd}>
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
