const circles = document.querySelectorAll('.circle');
const squares = document.querySelectorAll('.square');


circles.forEach(circle => {
    circle.addEventListener('dragstart', dragStart);
})


squares.forEach(square => {
    square.addEventListener('dragover', dragOver);
    square.addEventListener('dragenter', dragEnter)
    square.addEventListener('dragleave', dragLeave)
    square.addEventListener('drop', dragDrop);
})


let beingDragged;

function setTargetElem(targetElem) {
    
    if (!targetElem.classList.contains('square')) {
        return {
            'square':targetElem.closest('.square'),
            'childCircle':targetElem
        };
    }
    return {
        'square':targetElem,
        'childCircle':targetElem.querySelector('.divCircle'),
    };
}

function dragStart(e) {
    beingDragged = e.target;
}

function dragOver(e) {
    e.preventDefault(); 
}

function dragEnter(e) {
    targetSquare = setTargetElem(e.target).square;
    targetSquare.classList.add('highlight');
}

function dragLeave(e) {
    e.target.classList.remove('highlight');
}

function dragDrop(e) {
    e.target.classList.remove('highlight');

    targetSquare = setTargetElem(e.target).square;
    
    draggedColor = beingDragged.classList.contains('red') ? 'red' : 'blue';
    squareColor = targetSquare.classList.contains('red') ? 'red' : 'blue';

    if (draggedColor === squareColor){
        e.target.append(beingDragged);

        const childCircle = setTargetElem(e.target).childCircle;
   
        if (childCircle) {
            childCircle.style.display = 'none';
        }
    }
}

function dragEnd(e) {
    e.target.classList.remove('highlight');
}



