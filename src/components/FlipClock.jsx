import React, { useState, useEffect } from 'react'
import {FlipUnitContainer} from './FlipUnitContainer'

function FlipClock() {
  
  const [hour, setHour] = useState(0)
  const [hourShuffle, setHourShuffle] = useState(true)
  const [minute, setMinute] = useState(0)
  const [minuteShuffle, setMinuteShuffle] = useState(true)
  const [second, setSecond] = useState(0)
  const [secondShuffle, setSecondShuffle] = useState(true)

  

 function updateTime() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    if (hours !== hour) {
      const hoursShuffle = !hourShuffle;
      setHour(hours)
      setHourShuffle(hoursShuffle)
    }
    if (minutes !== minute) {
      const minutesShuffle = !minuteShuffle;
      setMinute(minutes)
      setMinuteShuffle(minutesShuffle)
    }
    if (seconds !== second) {
      const secondsShuffle = !secondShuffle;
      setSecond(seconds)
      setSecondShuffle(secondsShuffle)
    }
  }
  useEffect(() => {
    const timerID = setInterval(() => updateTime(), 50);
     return () => {
       clearInterval(timerID);
     }
   })
    return (
      <div className={"flipClock"}>
        <FlipUnitContainer
          unit={"hour"}
          digit={hour}
          shuffle={hourShuffle}
        />
        <FlipUnitContainer
          unit={"minute"}
          digit={minute}
          shuffle={minuteShuffle}
        />
        <FlipUnitContainer
          unit={"second"}
          digit={second}
          shuffle={secondShuffle}
        />
      </div>
    );
  }



export {FlipClock}

