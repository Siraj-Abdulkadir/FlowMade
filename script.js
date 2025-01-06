let newX = 0,newY=0 ,startX=0 ,startY=0

const draggables = document.getElementById('.draggable')

// let containers = document.querySelector('background')


draggables.addEventListener('mousedown', mouseDown)

function mouseDown(e){
   startX=e.clientX
   startY=e.clientY


   document.addEventListener('mousemove', mouseMove)
   document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e){
    newX = startX - e.clientX
    newY = startY - e.clientY


    startX = e.clientX
    startY = e.clientY


    draggables.style.top = (draggables.style.top - newY) + 'px'
    draggables.style.left =(draggables.style.left - newX) + 'px'


    console.log(newY)
}


function mouseUp (e){
    document.removeEventListener('mousemove', mouseMove)
}

