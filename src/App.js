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
    <>
      <div className="Page">
        <h1 className="Header">Jakie dzisiaj święto?</h1>
        <div className="Container">
          <div onClick={onPrevDayClicked}><img src="arrow.svg" alt="Previous day" className="LeftArrow"></img></div>
          <div>
            <div>
              <p>Day: {toDay(currentDate.value)} Month: {toMonth(currentDate.value)}</p>
              <p>{holidays[toMonth(currentDate.value)][toDay(currentDate.value)]}</p>
            </div>
            <div>
              <button onClick={onTodayClicked}>today</button>
            </div>
          </div>
          <div onClick={onNextDayClicked}><img src="arrow.svg" alt="Previous day" className="RightArrow"></img></div>
        </div>
      </div>
    </>
  );
}

export default App;
