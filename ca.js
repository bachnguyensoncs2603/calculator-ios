let display = document.getElementById("display");

function append(value) {
    if (display.innerText === "Error") {
        display.innerText = value;
    }
    else if (display.innerText === "0") {
        if ("0123456789".includes(value)) {
            display.innerText = value;
        }
        else {
            display.innerText += value;
        }

    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function calculate() {
    try {
        console.log(display.innerText);
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";

    }
}