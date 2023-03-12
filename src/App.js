import "./App.css";
import Date from "./components/Date";
import Day from "./components/Day";
import Header from "./components/Header";
import { DateTime } from "luxon";
import { useState } from "react";

function App() {
  const [currentMonth, setCurrentMonth] = useState(DateTime.local());

  const handlePrevMonth = () => {
    const prevMonth = currentMonth.minus({month: 1})
    setCurrentMonth(prevMonth);
  }

  const handleNextMonth = () => {
    const nextMonth = currentMonth.plus({month: 1})
    setCurrentMonth(nextMonth);
  }

  return (
    <div className="App">
      <Header handleNextMonth={handleNextMonth} handlePrevMonth={handlePrevMonth} currentMonth={currentMonth}/>
      <Day />
      <Date currentMonth={currentMonth} />
    </div>
  );
}

export default App;

