// Function to generate a random color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function clearDiv(divId) {
    const div = document.getElementById(divId);
    div.innerHTML = '';
}

function createGrid(size) {
    for (let i = 0; i < (size*size); i++) {
        // Create a new div element
        const newDiv = document.createElement('div');

        newDiv.classList.add('item');

        // Find the container div
        const container = document.getElementById('container');

        newDiv.style.flex = `0 0 calc(100% / ${size})`; // Allow items to grow and shrink
        newDiv.style.height = `calc(100% / ${size})`;
        
        // Append the new div to the container
        container.appendChild(newDiv);
    }

    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = getRandomColor();
        });
    });
}

for (let i = 0; i < 256; i++) {
    // Create a new div element
    const newDiv = document.createElement('div');

    newDiv.classList.add('item');

    // Find the container div
    const container = document.getElementById('container');

    // Append the new div to the container
    container.appendChild(newDiv);
}

const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = getRandomColor();
        let currentOpacity = parseFloat(e.target.style.opacity) || 0; // Get current opacity or default to 0
        e.target.style.opacity = Math.min(currentOpacity + 0.1, 1); // Increment opacity by 0.1, max 1
    });
});

// button functionality
const button = document.getElementById("button");
button.addEventListener('click', () => {
    const userInput = prompt("Enter a number between 1 and 100");
    if (userInput > 100) {
        userInput = 100;
    }
    console.log(userInput)
    clearDiv('container');
    createGrid(userInput);
});