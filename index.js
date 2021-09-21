
const square = document.querySelector(".container");
let num = prompt("Enter the size of your paper:")

// let boxes = document.querySelector('.box')

const drawing = function(column,row) {
    
    for(let count=1; count <= (column*row); count++){

        square.style.setProperty("--grid-column", column);
        square.style.setProperty("--grid-row", row);
        
        let box = document.createElement("div");
        square.append(box);
        box.classList.add("box");
        
    }
}
drawing(num,num);

square.addEventListener('mouseover', function(event) {

    let colour = ['red', 'blue', 'orange', 'pink', 'green', 'yellow']
    let changeColor = Math.floor((Math.random()*5));
    let color = event.target.className;
   
    if(color === 'box'){
        let duration = event.target.style.backgroundColor = colour[changeColor]; 
    
    }

        

   
}
)



