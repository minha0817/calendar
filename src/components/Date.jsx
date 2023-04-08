import React, { useState } from 'react'
import '../style/date.css'
import Modal from './Modal'
import axios from 'axios';

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

export default function Date({
  currentMonth,
  openHabitTracker,
  setOpenHabitTracker,
}) {


  const initialHabitList = {
    // 1: {
    //   id: 1,
    //   name: 'Coding',
    //   completed: { 2023: { 3: [1, 4, 6, 12, 22, 25] } },
    // },
    // 2: {
    //   id: 2,
    //   name: 'Drinking',
    //   completed: { 2023: { 3: [1, 3, 5, 10, 22, 26] } },
    // },
  }

  const [clickedDate, setClickedDate] = useState("");
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
        month: currentMonth.c.month - 1,
        //Fix this error later!!
        year: currentMonth.c.year,
      }
    }

    calendarFiller[i + firstDay] = {
      number: i + 1,
      isCurrentMonth: true,
      month: currentMonth.c.month,
      year: currentMonth.c.year,
    }
  }

  let counter = 0
  for (let i = 0; i < calendarFiller.length; i++) {
    if (calendarFiller[i] === null) {
      counter++
      calendarFiller[i] = {
        number: counter,
        isCurrentMonth: false,
        month: currentMonth.c.month + 1,
        //Fix this error later!!
        year: currentMonth.c.year,
      }
    }
  }

  const handleClickDate = (date) => {
    setOpenHabitTracker(!openHabitTracker)
    setClickedDate(`${date.month}${date.number}`)
  }

  // const handleClickHabit = (habit, date) => {

  //   const clonedHabitList = { ...habitList }
  //   const targetHabit = clonedHabitList[habit.id];

  //   console.log(targetHabit, "target habit")
  //   console.log('clonedHabitLIst', clonedHabitList);
  //   console.log("habit", habit);
  //   // find correct obejct inside clonedHAbitList

  //   // make changes to clonedHabitLIst

  //   // use clonedHabitList to setState
  //   const indexOfDate = habit.completed[date.year][date.month].indexOf(
  //     date.number,
  //   )
  //   if (indexOfDate > -1) {
  //     //있다
  //     habit.completed[date.year][date.month].splice(indexOfDate, 1)
  //   } else {
  //     //없다
  //     habit.completed[date.year][date.month].push(date.number)
  //   }
  // }

  return (
    <ul className="date">
      {calendarFiller.map((date, index) => {
        return (
          <li
            key={index}
            className={
              date && date.isCurrentMonth
                ? 'date date__currentMonth'
                : 'date date__notCurrentMonth'
            }
          >
            {date && (
              <button
                className="date__button"
                onClick={() => handleClickDate(date)}
              >
                {date.number}
              </button>
            )}
            {/* habit들이 달력에 출력되는 부분  */}
            {/* <div className="date__button__habits">
              {Object.values(habitList).map((habit, index) => {
                return (
                  <button
                    key={index}
                    className={
                      habit.status
                        ? 'date__button__habit completed'
                        : 'date__button__habit active'
                    }
                    onClick={() => {
                      // handleClickHabit(habit, date)
                    }}
                  >
                    {habit.name}
                  </button>
                )
              })}
            </div> */}
          </li>
        )
      })}
      {openHabitTracker && (
        <Modal
          clickedDate={clickedDate}
          setOpenHabitTracker={setOpenHabitTracker}
        />
      )}
    </ul>
  )
}

