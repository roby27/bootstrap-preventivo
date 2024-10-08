const formElement = document.getElementById('preventivo')
const oreLavoro = 10
const codiciPromo = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

let tipiLavoroArray = [
    {value: 'backend', nome: 'Sviluppo Backend', tariffa: 20.50},
    {value: 'frontend', nome: 'Sviluppo Frontend', tariffa: 15.30},
    {value: 'analisi', nome: 'Analisi Progettuale', tariffa: 33.60},
]
const lavoroSelect = document.getElementById('lavoro')

tipiLavoroArray.forEach(element => {
    const option = document.createElement('option');
    option.value = element.value;
    option.textContent = element.nome;
    lavoroSelect.appendChild(option);
});

formElement.addEventListener('submit', function (event) {
    event.preventDefault()
    
    let lavoro = lavoroSelect.value
    const codicePromoElement = document.getElementById('codicesconto')
    let codicePromo = codicePromoElement.value
    let prezzoPreventivoElement = document.getElementById('prezzo-preventivo')
    const lavoroSelezionato = tipiLavoroArray.find(element => element.value === lavoro)

    let prezzoFinale = lavoroSelezionato.tariffa * oreLavoro

    if (codiciPromo.includes(codicePromo)) {
        prezzoFinale *= 0.75
        codicePromoElement.classList.add('is-valid')
        codicePromoElement.classList.remove('is-invalid')
    } else if (codicePromo === ''){
        codicePromoElement.classList.remove('is-valid', "is-invalid")
    } else {
        codicePromoElement.classList.add('is-invalid')
        codicePromoElement.classList.remove('is-valid')
    }

    let prezzoFinaleStringa = prezzoFinale.toFixed(2)
    let [parteIntera, parteDecimale] = prezzoFinaleStringa.split('.');
    prezzoPreventivoElement.innerHTML = `<span class="fs-4 fw-bold">€ ${parteIntera}</span><span class="fs-5">.${parteDecimale}</span>`
})