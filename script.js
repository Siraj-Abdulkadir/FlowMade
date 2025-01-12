let startX= 0, startY=0, newX=0, newY=0;

let draggableElement = document.getElementById('draggable')

// let containers = document.querySelector('background')

draggableElement.addEventListener('mousedown', mouseDown)




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

   draggableElement.style.top = startY + 'px'
   draggableElement.style.left = startX + 'px'
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}