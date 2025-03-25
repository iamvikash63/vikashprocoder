const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const Selection_dropdwn = document.querySelectorAll('.country-sl');
const btn = document.querySelector('.js-button');
const Fromcurr = document.querySelector('.js-select-from');
const Tocurr = document.querySelector('.js-select-to');
const ratedisplay = document.querySelector('.message');

for (let select of Selection_dropdwn) {
    for (let currcode in countryList) {
        let newOp = document.createElement("option");
        newOp.innerText = currcode;
        newOp.value = currcode;
        select.append(newOp);
        if (select.name == "From" && currcode == "USD") {
            newOp.selected = "selected";
        } else if (select.name == "To" && currcode == "INR") {
            newOp.selected = "selected";
        }
    }
    select.addEventListener('change', (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    console.log(element);
    let currcode = element.value;
    let countryCode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
}

btn.addEventListener('click', async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector('.js-input');
    let amountVal = amount.value;
    if (amountVal == "" || amountVal < 1) {
        amountVal = 1;
        amount.value = "1";
    }

    const url = `${BASE_URL}/${Fromcurr.value.toLowerCase()}.json`;
    console.log(url);

    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);

        let toval = Tocurr.value.toLowerCase();
        let fromvl = Fromcurr.value.toLowerCase();
        console.log(toval, fromvl);

        if (data[fromvl] && data[fromvl][toval]) {
            let rate = data[fromvl][toval];
            let dRate = ratedisplay.innerText = ` ${amountVal} ${Fromcurr.value} = ${rate * amountVal} ${Tocurr.value}`;
            console.log(rate);
        } else {
            throw new Error('Invalid currency code or data structure');
        }
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        ratedisplay.innerText = 'Error fetching exchange rate. Please try again later.';
    }
});