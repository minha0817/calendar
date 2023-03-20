import React, { useState } from 'react'

export default function Modal() {
  const habitList = ['Coding', 'Work out', 'Reading a book']

  const [input, setInput] =  useState('');
  const [habit, setHabitList] = useState(habitList);

  const addHabitList = (input) => {
    setHabitList((prev) => {
      const updatedHabitList = [...prev, input]
      return updatedHabitList;
    })
  }

  const handleClickAdd = (event) => {
    event.preventDefault();
    addHabitList(input);
    setInput('');
  }

  return (
    <div>
      <h2>Habit tracker</h2>
      {habit.map((habit) => {
        return <li key={habit}>{habit}</li>
      })}
      <form>
        <input name="Add habits" value={input} placeholder="Add Habit!" onChange={(event) => {setInput(event.target.value)}}/>
        <button onClick={handleClickAdd}>Add</button>
      </form>
    </div>
  )
}
