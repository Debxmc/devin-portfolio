// Function to generate a random 6-digit hexadecimal color
function getRandomColor() {
    let hex = '#';
    const characters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        hex += characters[Math.floor(Math.random() * 16)];
    }
    return hex;
}

// Event listener for the "Change Color" button
document.getElementById('colorBtn').addEventListener('click', function() {
    const newColor = getRandomColor();
    document.getElementById('container').style.backgroundColor = newColor;
    document.getElementById('colorCode').innerText = newColor;
});

// Event listener for mouseover on the "Change Color" button
document.getElementById('colorBtn').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#ddd';
});

// Event listener for mouseout on the "Change Color" button
document.getElementById('colorBtn').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

// Event listener for the "Reset Color" button
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('container').style.backgroundColor = '#FFFFFF';
    document.getElementById('colorCode').innerText = '#FFFFFF';
});
