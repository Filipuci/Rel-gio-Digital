function padding(number) {
  return number.toString().padStart(2, "0")
}

function timer() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  
  document.querySelector(".hours").innerHTML = padding(hours)
  document.querySelector(".minutes").innerHTML = padding(minutes)
  document.querySelector(".seconds").innerHTML = padding(seconds)
}

setInterval(() => {
  timer()
}, 1000)