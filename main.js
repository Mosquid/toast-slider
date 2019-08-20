const breads = document.querySelectorAll('#toast-condition li')

window.onSlide = e => {
  const val = parseInt(e.target.value)
  const current = Math.floor((breads.length * val) / 100)
  
  for (let b = 0; b < breads.length; b++) {
    breads[b].classList.remove('show')
    if (b <= current)
      breads[b].classList.add('show')
  }
}