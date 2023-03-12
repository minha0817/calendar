import React from 'react'
import '../style/date.css'

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

export default function Date({ currentMonth }) {
  // 3
  const firstDay = currentMonth.startOf('month').weekday

  const lastDate = currentMonth.endOf('month').c.day

  const calendarFiller = new Array(
    getCalendarSize(currentMonth.daysInMonth, firstDay),
  ).fill(null)

  // Assign proper date to calendarFiller index
  for (let i = 0; i < lastDate; i++) {
    calendarFiller[i + firstDay] = i + 1
  }

  return (
    <ul className="date">
      {calendarFiller.map((date) => {
        return <li>{date}</li>
      })}
    </ul>
  )
}
