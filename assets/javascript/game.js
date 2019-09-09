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
      <div class="card border-0 bg-light pb-2" >
            <img class="crystal" src="./assets/images/gem${i + 1}.png" data-value="${random}" width="200" height="200">
        </div>
    `
    document.getElementById(`crystals`).append(gemElem)
  }
  document.getElementById('targetNum').textContent = targetNum
  document.getElementById('currentNum').textContent = currentNum
  document.getElementById('wins').textContent = wins
  document.getElementById('losses').textContent = losses
}

document.addEventListener('click', event => {
  if (event.target.className === 'crystal' ) {
    
  }
})
renderGems()