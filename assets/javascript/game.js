// Starting Variables
let targetNum = Math.floor(Math.random() * 100) + 19
let currentNum = 0
let wins = 0
let losses = 0

//render crystals function
const renderCrystals = () => {
  //reset game
  currentNum = 0
  //sets the new number play needs to reach
  targetNum = Math.floor(Math.random() * 100) + 19
  //render crystals
  document.getElementById(`crystals`).innerHTML = ` `
  for (let i = 0; i < 4; i++) {
    const random = Math.floor(Math.random() * 12) + 1
    let crystalElem = document.createElement(`div`)
    crystalElem.className = `col-3`
    crystalElem.innerHTML = `
      <div class="card border-0 bg-light pb-2" >
            <img class="crystal" src="./assets/images/gem${i + 1}.png" data-value="${random}" width="200" height="200">
        </div>
    `
    document.getElementById(`crystals`).append(crystalElem)
  }
  //results 
  document.getElementById('targetNum').textContent = targetNum
  document.getElementById('currentNum').textContent = currentNum
  document.getElementById('wins').textContent = wins
  document.getElementById('losses').textContent = losses
}

//click events for the crystal images
document.addEventListener('click', event => {
  if (event.target.className === 'crystal') {
    let crystalValue = parseInt(event.target.dataset.value)
    currentNum += crystalValue
    if (currentNum === targetNum) {
      wins++
      alert(`You won! You reached the number ${targetNum}`)
      renderCrystals()
    } else if (currentNum > targetNum) {
      losses++
      alert(`The target number was ${targetNum} try again!`)
      renderCrystals()
    } else {
      document.getElementById(`currentNum`).textContent = currentNum
    }
  }
})
renderCrystals()