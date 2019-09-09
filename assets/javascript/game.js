let targetNum = Math.floor(Math.random() * 120) + 19
let current = 0
let wins = 0
let losses = 0

const renderGems = () => {
  current = 0
  targetNum =  Math.floor(Math.random() * 120) + 19
  document.getElementById(`crystals`).innerHTML = ` `
  for (let i = 0; i < 4; i ++){
    const random = Math.floor(Math.random () * 12) + 1
    let gemElem = document.createElement(`div`)
    gemElem.className = `col-3`
    gemElem.innerHTML = `
      <div class="card" >
            <img class="crystal" src="./assets/images/gem${i + 1}.png" data-value="${random}" width="200" height="200">
        </div>
    `
    document.getElementById(`crystals`).append(gemElem)
  }
  document.getElementById('targetNum').textContent = targetNum
  document.getElementById('current').textContent = current
  document.getElementById('wins').textContent = wins
  document.getElementById('losses').textContent = losses
}

renderGems()