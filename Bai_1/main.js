const inputA = document.getElementById("input_a");
const inputB = document.getElementById("input_b");
const buttonChPh = document.getElementById("button_chinh_phuong");
let resultText = document.querySelector(".result_text");
let resultNumber = document.querySelector(".result_number");
console.log(document.querySelector(".result"))

//Kiem tra input co phai la so nguyen duong khong
function checkInput(number) {
    return Number.isInteger(parseFloat(number)) && parseInt(number) > 0
}

// Kiem tra so chinh phuong
function isChinhPhuong(number) {
    return Number.isInteger(Math.sqrt(number))
}

// return day so chinh phuong
function daySoChinhPhuong(number_1, number_2) {
    let result = [];
    for (let i = number_1; i <= number_2; i++) {
        if (isChinhPhuong(i)) {
            result.push(i);
        } else {
            continue;
        }
    }
    return result;
}



buttonChPh.addEventListener("click", () => {
    let a = inputA.value;
    let b = inputB.value
    if (checkInput(a) && checkInput(b) && (parseInt(a) < parseInt(b))) {

        let result = daySoChinhPhuong(parseInt(a), parseInt(b));

        resultText.textContent = `Các số chính phương trong khoảng từ ${a} đến ${b}:`
        resultNumber.textContent = result.join(' ');

        document.querySelector('.result').style.display = 'block';
    } else {
        alert("Hãy nhập vào hai số nguyên dương a và b (a<b)");
    }
})
