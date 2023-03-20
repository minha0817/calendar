import React from "react";

export default function Modal () {

  const habitList = ["Coding", "Work out", "Reading a book"];

  return (
    <div>
      <h2>Habit tracker</h2>
      {habitList.map((habit) => {
        return <li key={habit}>
          {habit}
        </li>
      })}
    </div>
  )
}