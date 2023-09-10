let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')
let count = 0

function updateCountDisplay() {
  countEl.textContent = count
}

function increment() {
  count++
  updateCountDisplay()
}

function save() {
  let countStr = ` ${count} - `
  saveEl.textContent += countStr
  count = 0
  updateCountDisplay() // count = 0
}

function reset() {
  saveEl.textContent = ''
}
