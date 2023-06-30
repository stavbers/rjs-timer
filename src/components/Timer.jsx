import React, { useState, useEffect } from 'react'

function Timer(){
  const [deadline, setDeadline] = useState('July, 10, 2023 12:00')
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)


  function getTime(data) {
    const time = Date.parse(data) - Date.now()
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
    setMinutes(Math.floor((time / 1000 / 60) % 60))
    setSeconds(Math.floor((time / 1000) % 60))

  }
  useEffect(()=>{
    const interval = setInterval(()=> getTime(deadline), 1000)
    return ()=> {clearInterval(interval)}
  },[])
return (
  <div className="timer">{days}/d {hours}/h {minutes}/m {seconds}/s</div>
)
}

export {Timer}