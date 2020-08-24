import React, { useState } from 'react';
import './App.css';
import holidays from './holidays'

function App() {

  const [currentDate, setCurrentDate] = useState({ value: new Date() })

  const addDays = (date, days) => {
    var result = new Date(Number(date));
    result.setDate(result.getDate() + days);
    return result;
  }

  const toDay = (date) => {
    return ("0" + date.getDate()).slice(-2)
  }

  const toMonth = (date) => {
    return ("0" + (date.getMonth() + 1)).slice(-2)
  }

  const onNextDayClicked = () => {
    setCurrentDate({ value: addDays(currentDate.value, 1) })
  }

  const onPrevDayClicked = () => {
    setCurrentDate({ value: addDays(currentDate.value, -1) })
  }

  const onTodayClicked = () => {
    setCurrentDate({ value: new Date() })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Day: {toDay(currentDate.value)} Month: {toMonth(currentDate.value)}</p>
        <p>Today's holiday: {holidays[toMonth(currentDate.value)].days[toDay(currentDate.value)]}</p>
        <p>{new Date(currentDate.value).toISOString()}</p>
        <button onClick={onNextDayClicked}>next</button>
        <button onClick={onPrevDayClicked}>prev</button>
        <button onClick={onTodayClicked}>today</button>
      </header>
    </div>
  );
}

export default App;
