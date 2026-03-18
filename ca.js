let display = document.getElementById("display");
let calculated = false;
function append(value) {
    if (display.innerText === "Error") {
        display.innerText = value;
        calculated = false;
    }
      else if (calculated) {
        if ("+-*/".includes(value)) {
            // nếu bấm operator → tiếp tục tính
            display.innerText += value;
        } else {
            // nếu bấm số → reset
            display.innerText = value;
        }
        calculated = false;
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
        calculated = true;
    } catch {
        display.innerText = "Error";

    }
}