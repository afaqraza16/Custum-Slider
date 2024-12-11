

let mainSlider = document.querySelector('.slider');
let button1 = document.createElement('button');
let button2 = document.createElement('button');
button1.classList.add('btn1')
button2.classList.add('btn2')
button1.innerHTML = "P"
button1.style.color = "white"
button2.innerHTML = "N"
button2.style.color = "white  "
button1.style.cursor = 'pointer';
button2.style.cursor = 'pointer';
document.body.appendChild(button1)
document.body.appendChild(button2)
let dotsWrapper = document.createElement('div');
dotsWrapper.classList.add('dots_wrapper')
mainSlider.insertAdjacentElement('afterend', dotsWrapper)


let personalData = [
  {
    img: "https://cdn.pixabay.com/photo/2024/01/22/14/38/python-8525514_640.jpg",
    name: "Mr Tony",
    job: "Ceo  at Python Inc.",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fuga magni eius aperiam dolores autem nesciunt atque nobis modi porro?",
  },
  {
    img: "https://cdn.pixabay.com/photo/2024/02/05/10/48/bird-8554206_640.jpg",
    name: "Mr Shony",
    job: "Ceo  at Python Inc.",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fuga magni eius aperiam dolores autem nesciunt atque nobis modi porro?",
  },
  {
    img: "https://cdn.pixabay.com/photo/2024/03/05/22/04/bird-8615360_640.jpg",
    name: "Mr Aamir",
    job: "Ceo  at Python Inc.",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fuga magni eius aperiam dolores autem nesciunt atque nobis modi porro?",
  },
  {
    img: "https://cdn.pixabay.com/photo/2024/02/25/02/24/insect-8595108_640.png",
    name: "Mr Waseem",
    job: "Ceo  at Python Inc.",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fuga magni eius aperiam dolores autem nesciunt atque nobis modi porro?",
  },
  {
    img: "https://cdn.pixabay.com/photo/2023/05/30/08/34/apple-8027938_640.jpg",
    name: "Mr Irfan",
    job: "Ceo  at Python Inc.",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fuga magni eius aperiam dolores autem nesciunt atque nobis modi porro?",
  },
]

let mainArray = personalData.map(function(element, index){
  return ` 
  <div class="slide${index+1} slid" data-itemId="dot${index+1}">
  <img  src="${element.img}" alt="" />
  <h2> ${element.name} </h2>
  <h4> ${element.job} </h4>
  <h4> ${element.description} </h4>
  </div>
  `
}).join("")
let fulData = mainArray;


mainSlider.style.backgroundColor = 'black'
mainSlider.insertAdjacentHTML('afterbegin', fulData)
let slide2 = document.querySelector(".slide2")
slide2.classList.add('active')


let dotsArray = personalData.map(function(element, index){
    return ` <div class="dots" id="dot${index+1}"></div>`
}).join('')
dotsWrapper.insertAdjacentHTML('afterbegin', dotsArray)
let heightdot = document.querySelector('.highLight')
let dot2 = document.querySelector('#dot2')
dot2.classList.add('highLight')
let allDots = document.querySelectorAll('.dots')
let allSlid = document.querySelectorAll('.slid');

 function handleClick(item){
    let activeEl = document.querySelector('.active')
    activeEl.classList.remove('active')
    if(item==="next"){
        activeEl = activeEl.nextElementSibling || mainSlider.firstElementChild;
        activeEl.classList.add('active')
        moveForward()
    }
    if(item==="previous"){
        // console.log("previous is clicked")
        activeEl = activeEl.previousElementSibling || mainSlider.lastElementChild
        activeEl.classList.add('active')
        moveBackwards()
 }

 }

 function moveForward(){

let shahab = document.querySelector('.highLight')

shahab.classList.remove('highLight')
shahab = shahab.nextElementSibling || dotsWrapper.firstElementChild;
shahab.classList.add("highLight") 

   
 }
 function moveBackwards(){    
    let shahab = document.querySelector('.highLight')

    shahab.classList.remove('highLight')
    shahab = shahab.previousElementSibling || dotsWrapper.lastElementChild;
    shahab.classList.add("highLight") 

 }
allDots.forEach(function(dot){

    dot.addEventListener('click', function(e){
        let  currentActive = document.querySelector('.highLight')
        currentActive.classList.remove('highLight')
        let selectedId = e.target.id;
        allSlid.forEach(function(item){
            if(item.dataset.itemid === selectedId){
                console.log("dot is clicked")
                dot.classList.add('highLight')
                item.classList.add('active')
            }
            else{
                item.classList.remove('active')
            }

        })

    })
})


button1.addEventListener('click', function(){
    handleClick("previous")
} )
button2.addEventListener('click', function(){
    handleClick("next")
} )