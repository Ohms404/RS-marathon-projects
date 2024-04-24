const board = document.querySelector('#board')
const SQARES_NUMBER = 450



for(let i = 0; i < SQARES_NUMBER; i++){
  const square = document.createElement('div')
  square.classList.add('square')
  square.addEventListener('mouseover', () => {
    setColor(square)
  })
  square.addEventListener('mouseleave', () =>{
    removeColor(square)
  })




  board.append(square)
}


function setColor(square){
  square.style.backgroundColor = getRandomColors()
  square.style.boxShadow = `0 0 2px ${getRandomColors()}, 0 0 10px ${getRandomColors()}`
}

function removeColor(square){
  square.style.backgroundColor = '#1d1d1d'
  square.style.boxShadow = '0 0 2px #000'

}

function getRandomColors(){
  const hexCodes = '0123456789ABCDEF'
  let color = ''
  for(let i = 0; i < 6; i++){
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
  }
  return '#' + color 
}