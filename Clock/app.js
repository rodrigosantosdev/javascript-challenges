function startTime() {
  const today = new Date()

  let hours = today.getHours()
  let minutes = today.getMinutes()
  let seconds = today.getSeconds()
  
  hours = checkTime(hours)
  seconds = checkTime(seconds)

  // document.querySelector('#clock').innerHTML = `${hours} ${minutes} ${seconds}`
  document.querySelector('.hours').innerHTML = `${hours}`
  document.querySelector('.minutes').innerHTML = `${minutes}`
  document.querySelector('.seconds').innerHTML = `${seconds}`
  setTimeout(startTime, 1000)
}

function checkTime(addZero) {
  if(addZero < 10) {addZero = "0" + addZero }
  return addZero
}

startTime()