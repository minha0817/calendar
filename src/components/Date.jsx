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
  const firstDay =
    currentMonth.startOf('month').weekday === 7
      ? 0
      : currentMonth.startOf('month').weekday

  const lastDate = currentMonth.endOf('month').c.day
  const lastDateOfPrevMonth = currentMonth.minus({month: 1}).endOf('month').c.day;

  const calendarFiller = new Array(
    getCalendarSize(currentMonth.daysInMonth, firstDay),
  ).fill(null)

  // Assign proper date to calendarFiller index
  for (let i = 0; i < lastDate; i++) {
    
    if(i < firstDay) {
      calendarFiller[i] = {
        number: lastDateOfPrevMonth - firstDay + 1 + i,
        isCurrentMonth: false
      }
    }

    //For future styling, added isCurrentMonth value.
    calendarFiller[i + firstDay] = {
      number: i + 1,
      isCurrentMonth: true,
    }
  }


  return (
    <ul className="date">
      {calendarFiller.map((date) => {
        return (
          <li className={date && date.isCurrentMonth === true ? "date__currentMonth" : "date__notCurrentMonth"}>
            {date && <div>{date.number}</div>}
          </li>
        )
      })}
    </ul>
  )
}
