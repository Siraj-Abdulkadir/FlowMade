let draggables = document.querySelectorAll('.draggable')
let containers = document.querySelector('background')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', ()=>{
     draggable.classList.add('dragging')
    })
})


containers.forEach(container => {
container.addEventListener('dragover', e => {
    e.preventDefault()
    let draggable = document.querySelector('.dragging');
    containers.appendChild(draggable)

})
})