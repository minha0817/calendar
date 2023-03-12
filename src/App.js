import "./App.css";
import Date from "./components/Date";
import Day from "./components/Day";
import Header from "./components/Header";
import { DateTime } from "luxon";
import { useState } from "react";

function App() {
  const [currentMonth, setCurrentMonth] = useState(DateTime.local());
  console.log('currentMonth', currentMonth);
  // button functions to setCurrentMonth
  const handlePrevMonth = () => {
    const prevMonth = currentMonth.minus({month: 1})
    setCurrentMonth(prevMonth);
  }

  const handleNextMonth = () => {
    const nextMonth = currentMonth.plus({month: 1})
    setCurrentMonth(nextMonth);
  }

  // pass button functions to Header
  return (
    <div className="App">
      <Header handleNextMonth={handleNextMonth} handlePrevMonth={handlePrevMonth} currentMonth={currentMonth}/>
      <Day />
      <Date currentMonth={currentMonth} />
    </div>
  );
}

export default App;

// figure out how to start the calendar on the right day

// figure out how to fill in last month calendar at the beginning AND at the end with next month

// figure out previous month and next month
