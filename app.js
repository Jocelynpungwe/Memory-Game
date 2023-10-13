const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
        name: 'memory',
        img: 'images/memory-card.jpg'
    },
    {
        name: 'apple',
        img: 'images/apple.jpg'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
        name: 'apple',
        img: 'images/apple.jpg'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
        name: 'memory',
        img: 'images/memory-card.jpg'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]


let container = document.getElementById("container")
const btn = document.getElementById('btn')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

btn.addEventListener("click",function(){

    for(let i = 0 ; i < 16 ; i++)
    {
        let block = document.getElementById(`${i}-block`)
        block.remove()

    }

    startGame()
})

startGame()

function startGame()
{
    createBoard()
    timer(60)
    btn.setAttribute("disabled","disabled")
    btn.classList.add("disabled")

    setTimeout(function(){
      btn.removeAttribute("disabled")
      btn.classList.remove("disabled")
      
      for(let i = 0 ; i < 16 ; i++)
        {
            let test = document.getElementById(`${i}-card`)
            test.classList.add("disabled")
            test.removeEventListener("click",flipCard)

        }
   },61000)  
}



function timer(sec){
    
    let timer = setInterval(function(){
        document.getElementById('timer-count').textContent ='Time left: '+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
       
    return timer
}

function createBoard() {

    for (let i = 0; i < cardArray.length; i++) {

      const card = document.createElement('img')
      const block = document.createElement('div')
      block.classList.add("box-grid")
      block.setAttribute("id",`${i}-block`)
      card.addEventListener('click', flipCard)
      card.setAttribute('src', "images/white.png")
      card.setAttribute('data-id', i)
      card.setAttribute('id', `${i}-card`)
      block.appendChild(card)
      container.appendChild(block)
           
    } 
}

 function flipCard() {
    let cardId = this.getAttribute('data-id')

    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

function checkForMatch() {
    const cards = document.querySelectorAll('img:not(.logo)')

    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
    
      cards[optionOneId].classList.add("disabled")
      cards[optionTwoId].classList.add("disabled")
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
    
    }
    cardsChosen = []
    cardsChosenId = [] 
   
}


