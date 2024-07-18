console.log("start");

const formElement = document.getElementById('preventivo')
const oreLavoro = 10
const codiciPromo = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

formElement.addEventListener('submit', function (event) {
    event.preventDefault()
    
    let tariffaOraria
    let lavoro = document.getElementById('lavoro').value
    const codicePromoElement = document.getElementById('codicesconto')
    let codicePromo = codicePromoElement.value
    let prezzoPreventivoElement = document.getElementById('prezzo-preventivo')
    
    if (lavoro === 'backend') {
        tariffaOraria = 20.50
    } else if (lavoro === 'frontend') {
        tariffaOraria = 15.30
    } else if (lavoro === 'analisi') {
        tariffaOraria = 33.60
    }

    let prezzoFinale = tariffaOraria * oreLavoro

    if (codiciPromo.includes(codicePromo)) {
        prezzoFinale *= 0.75
        codicePromoElement.classList.add('is-valid')
        codicePromoElement.classList.remove('is-invalid')
    } else if (codicePromo === ''){
        codicePromoElement.classList.remove('is-valid')
        codicePromoElement.classList.remove('is-invalid')
    } else {
        codicePromoElement.classList.add('is-invalid')
        codicePromoElement.classList.remove('is-valid')
    }

    let prezzoFinaleStringa = prezzoFinale.toFixed(2)
    let [parteIntera, parteDecimale] = prezzoFinaleStringa.split('.');
    prezzoPreventivoElement.innerHTML = `<span class="fs-4 fw-bold">€ ${parteIntera}</span><span class="fs-5">.${parteDecimale}</span>`

    // prezzoPreventivoElement.innerHTML = '€' + prezzoFinale.toFixed(2)

})