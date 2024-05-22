const valueDisplay = document.getElementById('calc-display')
const resultDisplay = document.getElementById('result-display')
const buttons = document.querySelectorAll('#my-button')

for (item of buttons) {
  item.addEventListener('click', (e) => {
    btntext = e.target.innerText;
    valueDisplay.value += btntext;
  })
}
// Advanced Math Functions
function sine() {
  resultDisplay.value = Math.sin(valueDisplay.value)
}
function cosine() {
  resultDisplay.value = Math.cos(valueDisplay.value)
}
function tangent() {
  resultDisplay.value = Math.tan(valueDisplay.value)
}
function squareRoot() {
  resultDisplay.value = Math.sqrt(valueDisplay.value)
}
function square() {
  resultDisplay.value = Math.pow(valueDisplay.value, 2)
}
function ans() {
  valueDisplay.value = resultDisplay.value
  resultDisplay.value = ''
}
const clearDisplay = () => {
  valueDisplay.value = ''
  resultDisplay.value = ''
}
const deleteValue = () => {
  valueDisplay.value = valueDisplay.value.slice(0, -1)
}
const calculateValue = () => {
  resultDisplay.value = eval(valueDisplay.value)
}
