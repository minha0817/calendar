import './App.css';
import Date from './components/Date';
import Day from './components/Day';
import Header from './components/Header';
import { DateTime } from "luxon";

function App() {
  return (
    <div className="App">
      <Header />
      <Day />
      <Date />
    </div>
  );
}

export default App;
