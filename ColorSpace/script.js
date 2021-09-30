const container = document.getElementById('container');
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const colordiv = document.getElementById('colorBG');
const colorcode = document.getElementById('colorcodespan');
const copyCode = document.getElementById('copyCode');

const showRedValue = document.getElementById('showRedValue');
const showGreenValue = document.getElementById('showGreenValue');
const showBlueValue = document.getElementById('showBlueValue');

// Default RGB Value
showRedValue.innerHTML = red.value;
showGreenValue.innerHTML = green.value;
showBlueValue.innerHTML = blue.value;
colordiv.style.background = `rgb(${showRedValue.value},${showGreenValue.value},${showBlueValue.value})`;

// Copy Button Function
function copyCodeButton() {
    navigator.clipboard.writeText(colorcode.innerText);
}

// Change Button Text
function buttonText(e) {
    if(e === 'Copy') {
        copyCode.innerText = 'Copied';
    }
}

// Slide Input Functionality
container.addEventListener('click', function (event) {
    let result = event.target.id; // red / green / blue / copyCode 
    copyCode.innerText = 'Copy';
    if (result === 'red') {
        showRedValue.innerHTML = event.target.value;
        colordiv.style.background = `rgb(${showRedValue.value},${showGreenValue.value},${showBlueValue.value})`;
        colorcode.innerHTML = `rgb(${showRedValue.value},${showGreenValue.value},${showBlueValue.value})`;
    }
    else if (result === 'green') {
        showGreenValue.innerHTML = event.target.value;
        colordiv.style.background = `rgb(${showRedValue.value},${showGreenValue.value},${showBlueValue.value})`;
        colorcode.innerHTML = `rgb(${showRedValue.value},${showGreenValue.value},${showBlueValue.value})`;
    }
    else if (result === 'blue') {
        showBlueValue.innerHTML = event.target.value;
        colordiv.style.background = `rgb(${showRedValue.value},${showGreenValue.value},${showBlueValue.value})`;
        colorcode.innerHTML = `rgb(${showRedValue.value},${showGreenValue.value},${showBlueValue.value})`;
    }
    else if(result === 'copyCode') {
        copyCodeButton();
        buttonText(event.target.innerText);
    }
});


