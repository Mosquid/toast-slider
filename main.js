const breads = document.querySelectorAll('#toast-condition li')
let time
let timer
let bread
const states = [
  79,
  119,
  148,
  178,
  208,
  239
]

window.onSlide = e => {
  const val = parseInt(e.target.value)
  const current = Math.floor((breads.length * val) / 100)
  time = parseInt(states[current])
  bread = breads[current || 0]

  window.clearTimer()
  window.startTimer(time)

  for (let b = 0; b < breads.length; b++) {
    breads[b].classList.remove('show')
    if (b <= current)
      breads[b].classList.add('show')
  }
}

window.setBreadTime = time => {
  if (!bread)
    return

  bread.querySelector('span').innerText = `${time} sec`
}

window.startTimer = (time) => {
  timer = setInterval(() => {
    time = Math.max(0, time-1)
    window.setBreadTime(time)

    if (!time)
      window.clearTimer()
  }, 1000)
}

window.clearTimer = () => {
  clearTimeout(timer)
}

window.onSlide({target: document.querySelector('input')})