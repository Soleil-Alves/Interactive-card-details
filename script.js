const thankMessage = document.querySelector('.completed');
const continueBtn = document.querySelector('.completed button');
const formSect = document.querySelector('.form-section')

const form = document.getElementById('form');
const cardNumber = document.getElementById('cnumberDisplay');
const cardName = document.getElementById('cnameDisplay');
const cardMonth = document.getElementById('cmonthDisplay');
const cardYear = document.getElementById('cyearDisplay');
const cardCVC = document.getElementById('cvcDisplay');

const inputName = document.getElementById('cname');
const inputNumber = document.getElementById('cnumber');
const inputMonth = document.getElementById('emonth');
const inputYear = document.getElementById('eyear');
const inputCVC = document.getElementById('cvcnumber');

const btnSubmit = document.getElementById('button-submit');

inputName.addEventListener("input", () => {
    cardName.innerHTML = inputName.value;
});

inputCVC.addEventListener("input", () => {
    cardCVC.innerHTML = inputCVC.value;
});

inputMonth.addEventListener("input", () => {
    cardMonth.innerHTML = inputMonth.value; 
});
inputYear.addEventListener("input", () => {
    cardYear.innerHTML = inputYear.value; 
});

function padRight(str, len, pad) {
    return str.padEnd(len, pad).slice(0, len);
}
inputNumber.addEventListener("input", () => {
    const spacedNumber = inputNumber.value;
    const cardSpace = padRight(spacedNumber.slice(0, 16), 16, "0")
    .replace(/(\d{4})/g, "$1 ")
    .trim();
    if (cardSpace !== "+/*-,") {
        cardNumber.innerHTML = cardSpace;
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

    if(validateInputs()) {
        formSect.style.display = "none";
        thankMessage.style.display = "block";
    }
});

continueBtn.addEventListener("click", e => {
    location.reload();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidNumber = inputNumber => {
    const nm = /^[0-9]+$/
    return nm.test(String(inputNumber));
}

const validateInputs = () => {
    const nameValue = inputName.value;
    const numberValue = inputNumber.value;
    const monthValue = inputMonth.value;
    const yearValue = inputYear.value;
    const cvcValue = inputCVC.value;

    if(nameValue === '') {
        setError(inputName, 'O campo é obrigatório');
    } else {
        setSuccess(inputName);
    } 
if(numberValue === '') {
        setError(inputNumber, 'O campo é obrigatório')
    } else if (!isValidNumber(numberValue)) {
        setError(inputNumber, 'Insira um número válido')
    } else {
        setSuccess(inputNumber);
    }
if(monthValue === '') {
        setError(inputMonth, 'O campo é obrigatório')
    } else if (!isValidNumber(monthValue)) {
        setError(inputMonth, 'Insira um número válido')
    } else {
        setSuccess(inputMonth);
    }

    if(yearValue === '') {
        setError(inputYear, 'O campo é obrigatório')
    } else if (!isValidNumber(yearValue)) {
        setError(inputYear, 'Insira um número válido')
    } else {
        setSuccess(inputYear);
    }

    if(cvcValue === '') {
        setError(inputCVC, 'O campo é obrigatório')
    } else if (!isValidNumber(cvcValue)) {
        setError(inputCVC, 'Insira um número válido')
    } else {
        setSuccess(inputCVC);
    }
}