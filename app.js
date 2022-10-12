const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-box");
const clearBtn = document.querySelector("#clear-btn");
const container = document.querySelector(".container");

outputBox.innerText = "Output will come here !!!";


function checkProfitAndLoss() {
    let ip = Number(initialPrice.value);
    let qty = Number(quantity.value);
    let cp = Number(currentPrice.value);

    console.log(ip,qty,cp);
    if (ip>0 && qty>0 && cp>0) {

        if (cp > ip) {
            let profit = calculateProfit(ip, qty, cp);

            // Css for profit

            outputBox.style.backgroundColor = "green";
            outputBox.style.border = "2px solid darkgreen";
            outputBox.style.borderRadius = "5px";
            outputBox.style.color = "white";
            body.style.background = " url(/images/profit.gif)";
            container.style.backgroundColor = "#273238";
            heading.style.backgroundColor = "#273238";
            footer.style.backgroundColor = "black";

            outputBox.innerText = "Hey the profit is " + profit[0].toFixed(2) + "\n and the profit percent is " + profit[1].toFixed(2) + "%";
        } else if (ip > cp) {
            let loss = calculateLoss(ip, qty, cp);

            // Css for Loss
            outputBox.style.backgroundColor = "red";
            outputBox.style.border = "2px solid darkred";
            outputBox.style.borderRadius = "5px";
            outputBox.style.color = "white";
            body.style.background = "url(/images/loss.gif)";
            container.style.backgroundColor = "#273238";
            heading.style.backgroundColor = "#273238";
            footer.style.backgroundColor = "black";


            outputBox.innerText = "Hey the loss is " + loss[0].toFixed(2) + "\n and the loss percent is " + loss[1].toFixed(2) + "%";
        } else {
            outputBox.innerText = "No pain no gain , No gain no pain :)";
        }
    } else {
        outputBox.innerText = "Please fill all the fields with positive numbers.";
    }

}

function calculateProfit(initial, qnty, current) {

    let profit = current - initial;
    let profitPercent = (profit / initial) * 100;
    return [profit, profitPercent];

}

function calculateLoss(initial, qnty, current) {

    let loss = initial - current;
    let lossPercent = (loss / initial) * 100;

    return [loss, lossPercent];
}

function clear() {
    initialPrice.value = "";
    quantity.value = "";
    currentPrice.value = "";
    outputBox.innerText = "Output will come here !!!";


    outputBox.style.backgroundColor = "none";
    outputBox.style.border = "none";
    outputBox.style.borderRadius = "none";
    heading.style.backgroundColor = "transparent";
    outputBox.style.color = "white";
    body.style.background = "none";
    body.style.backgroundColor = "#273238";
    container.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    outputBox.style.backgroundColor = "transparent";
    footer.style.backgroundColor = "transparent";

}

checkBtn.addEventListener('click', checkProfitAndLoss);
clearBtn.addEventListener('click', clear);
