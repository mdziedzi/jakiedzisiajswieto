import React, { useState } from 'react';
import './App.css';
import holidays from './holidays'

function App() {

  const [currentDate, setCurrentDate] = useState({ value: new Date() })

  const weekDays = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]
  const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"]

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

  const translateWeekDay = (date) => {
    return (weekDays[date.getDay()])
  }

  const translateMonth = () => {
    return (months[parseInt(toMonth(currentDate.value)) - 1])
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
        <div className="Container">
          <div className="Clickable ArrowColumn" onClick={onPrevDayClicked}><img src="arrow.svg" alt="Previous day" className="LeftArrow"></img></div>
          <div className="MainColumn">
            <h1 className="Header Clickable" onClick={onTodayClicked}>Jakie dzisiaj święto?</h1>
            <div className="Holiday">
              <p className="Date">{translateWeekDay(currentDate.value)}, {toDay(currentDate.value)} {translateMonth()} {currentDate.value.getFullYear()}</p>
              <p>{holidays[toMonth(currentDate.value)][toDay(currentDate.value)]}</p>
            </div>
          </div>
          <div className="Clickable ArrowColumn" onClick={onNextDayClicked}><img src="arrow.svg" alt="Previous day" className="RightArrow"></img></div>
        </div>
      </div>
    </>
  );
}

export default App;
