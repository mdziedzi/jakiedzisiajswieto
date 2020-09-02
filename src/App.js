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

  function generate() {

    var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
    
    function populate(a) {
      for ( var i = 0; i < 6; i++ ) {
        var x = Math.round( Math.random() * 14 );
        var y = hexValues[x];
        a += y;
      }
      return a;
    }
    
    var newColor1 = populate('#');
    var newColor2 = populate('#');
    var angle = Math.round( Math.random() * 360 );

    return "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
  }

  return (
    <>
      <div className="Page" style={{background: generate()}}>
        <div className="Container">
          <div className="Clickable ArrowColumn" onClick={onPrevDayClicked}><img src="arrow.svg" alt="Previous day" className="LeftArrow"></img></div>
          <div className="MainColumn">
            <h1 className="Header Clickable" onClick={onTodayClicked}>Jakie dzisiaj święto?</h1>
            <div className="HolidayContainer">
              <div className="HolidayArea">
              <p className="Date">{translateWeekDay(currentDate.value)}, {toDay(currentDate.value)} {translateMonth()} {currentDate.value.getFullYear()}</p>
              <p className="Holiday">{holidays[toMonth(currentDate.value)][toDay(currentDate.value)]}</p>
              </div>
            </div>
          </div>
          <div className="Clickable ArrowColumn" onClick={onNextDayClicked}><img src="arrow.svg" alt="Previous day" className="RightArrow"></img></div>
        </div>
      </div>
    </>
  );
}

export default App;
