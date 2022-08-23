const button = document.querySelector('.menu')
const items = document.querySelector('.menu-items')

button.onclick = () => {

  button.classList.toggle("close")
  button.classList.toggle("open")
  items.classList.toggle("closed")
}