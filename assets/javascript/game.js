let targetNum = Math.floor(Math.random() * 100) + 19
let currentNum = 0
let wins = 0
let losses = 0

const renderCrystals = () => {
  currentNum = 0
  targetNum = Math.floor(Math.random() * 100) + 19
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
  document.getElementById('targetNum').textContent = targetNum
  document.getElementById('currentNum').textContent = currentNum
  document.getElementById('wins').textContent = wins
  document.getElementById('losses').textContent = losses
}

document.addEventListener('click', event => {
  if (event.target.className === 'crystal') {
    let crystalValue = parseInt(event.target.dataset.value)
    currentNum += crystalValue
    if (currentNum === targetNum) {
      wins++
      renderCrystals()
    } else if (currentNum > targetNum) {
      losses++
      renderCrystals()
    } else {
      document.getElementById(`currentNum`).textContent = currentNum
    }
  }
})
renderCrystals()