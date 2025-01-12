let startX= 0, startY=0, newX=0, newY=0;
let closeIcon = document.getElementById('close-icon')
let expandIcon = document.getElementById('expand-icon')
let draggableElement = document.querySelectorAll('.draggable')
let menuBar = document.querySelector('.menu')


draggableElement.forEach(draggable => {

    draggable.addEventListener('mousedown', mouseDown)
    draggable.addEventListener('dblclick', TextChanger)
})


closeIcon.addEventListener('click', menuRemover)
expandIcon.addEventListener('click', expandFunc)

function menuRemover(e){
   menuBar.classList.add('menuremover')
}

function expandFunc(e){
    menuBar.classList.remove('menuremover')
}


function mouseDown(e){
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)

}


function mouseMove(e){
   newX = startX - e.clientX
   newY = startY - e.clientY


   startX = e.clientX
   startY = e.clientY

   draggable.style.top = (draggable.offsetTop - newY) + 'px'
   draggable.style.left = (draggable.offsetLeft - newX) + 'px'

}


function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}

function TextChanger(e){
    let theText = prompt("Enter Your Text")

    console.log(theText)
    draggable.textContent = theText
}