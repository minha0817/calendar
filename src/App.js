import "./App.css";
import Date from "./components/Date";
import Day from "./components/Day";
import Header from "./components/Header";
import { DateTime } from "luxon";
import { useState } from "react";

function App() {
  const [currentMonth, setCurrentMonth] = useState(DateTime.local());
  
  // button functions to setCurrentMonth
  const handlePrevMonth = () => {
    setCurrentMonth()
  }
  
  const handleNextMonth = () => {

  }

  // pass button functions to Header
  return (
    <div className="App">
      <Header />
      <Day />
      <Date currentMonth={currentMonth} />
    </div>
  );
}

export default App;

// figure out how to start the calendar on the right day

// figure out how to fill in last month calendar at the beginning AND at the end with next month

// figure out previous month and next month
