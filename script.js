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
        e.target.style.backgroundColor = 'red';
    });
});