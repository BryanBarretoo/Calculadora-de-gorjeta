let tipsForm = document.getElementById('tipsForm');

function calculateTip(event) {
    event.preventDefault();

    let bill = document.getElementById('bill').value
    let serviceQual = document.getElementById('serviceQual').value
    let numOfPeople = document.getElementById('people').value
    let each = document.getElementById('each')
    let totalTip = document.getElementById('totalTip')

    if (bill == '' | serviceQual == '') {
        alert("Preencha o formulario corretamente")
        return;
    }

    if (numOfPeople == "" | numOfPeople <= 1) {
        numOfPeople = 1;
        each.display = 'none';
    } else {
        each.display = 'block';
    }

    let total = (bill * serviceQual) / numOfPeople;
    total = total.toFixed(2);

    document.getElementById('tip').innerHTML = total;
    totalTip.style.display = 'block';
}

document.getElementById('totalTip').style.display = "none";

tipsForm.addEventListener('submit', calculateTip);
