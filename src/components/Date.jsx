import React, { useState } from 'react';
import '../style/date.css';
import Modal from './Modal';

const getCalendarSize = (daysInMonth, firstDay) => {
  const test = daysInMonth + firstDay

  if (test > 35) {
    return 42
  }

  if (test > 28) {
    return 35
  }

  return 28
}

export default function Date({ currentMonth,  openHabitTracker, setOpenHabitTracker }) {

  const firstDay =
    currentMonth.startOf('month').weekday === 7
      ? 0
      : currentMonth.startOf('month').weekday

  const lastDate = currentMonth.endOf('month').c.day
  const lastDateOfPrevMonth = currentMonth.minus({ month: 1 }).endOf('month').c
    .day
  const daysInMonth = currentMonth.daysInMonth

  const calendarFiller = new Array(getCalendarSize(daysInMonth, firstDay)).fill(
    null,
  )

  // Assign proper date to calendarFiller index
  for (let i = 0; i < lastDate; i++) {
    if (i < firstDay) {
      calendarFiller[i] = {
        number: lastDateOfPrevMonth - firstDay + 1 + i,
        isCurrentMonth: false,
      }
    }

    //For future styling, added isCurrentMonth value.
    calendarFiller[i + firstDay] = {
      number: i + 1,
      isCurrentMonth: true,
    }
  }

  let counter = 0
  for (let i = 0; i < calendarFiller.length; i++) {
    if (calendarFiller[i] === null) {
      counter++
      calendarFiller[i] = {
        number: counter,
        isCurrentMonth: false,
      }
    }
  }

  const handleClickDate = () => {
    setOpenHabitTracker(!openHabitTracker)
  }

  return (
    <ul className="date">
      {calendarFiller.map((date, index) => {
        return (
          <li
            key={index}
            className={
              date && date.isCurrentMonth === true
                ? 'date date__currentMonth'
                : 'date date__notCurrentMonth'
            }
          >
            {date && (
              <button className="date__number" onClick={handleClickDate}>
                {date.number}
              </button>
            )}
          </li>
        )
      })}
      {openHabitTracker && <Modal setOpenHabitTracker={setOpenHabitTracker}/>}
    </ul>
  )
}
