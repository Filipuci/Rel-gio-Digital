function padding(number) {
  return number.toString().padStart(2, "0")
}

function timer() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  
  // TIMER 
  document.querySelector(".hours").innerHTML = padding(hours)
  document.querySelector(".minutes").innerHTML = padding(minutes)
  document.querySelector(".seconds").innerHTML = padding(seconds)

  //TIMER TEXT
  document.querySelector(".hours-text").innerHTML = "Hours"
  document.querySelector(".minutes-text").innerHTML = "Minutes"
  document.querySelector(".seconds-text").innerHTML = "Seconds"
}

setInterval(() => {
  timer()
}, 1000)