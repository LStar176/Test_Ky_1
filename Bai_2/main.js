const color = document.querySelector('input[type=color].color');
const button = document.querySelector('.button');
const background = document.querySelector('.container')
console.log(background);
const desc = document.querySelector('.description');
const hex = document.querySelector('.hex');

//get random color
function getRandomColor() {
    let letter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let result = '#';
    for (let i = 0; i < 6; i++) {
        result += letter[parseInt(Math.random() * 16)]
    }
    console.log(result)
    return result
}

//change background color when click the button
button.addEventListener('click', () => {
    background.style.backgroundColor = color.value = getRandomColor();

    hex.innerHTML = color.value;
    desc.style.display = 'block';
})
