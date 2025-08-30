const valor = document.getElementById('amount');
const firstHolder = document.getElementById('firstHolder');
const secondHolder = document.getElementById('secondHolder');
const btn = document.getElementById('btn');
const icon = document.getElementById('icon');
const resultado = document.getElementById('result');

function readAmount(){
    return parseFloat(String(valor.value).replace(',', '.'))
}

function formatMoney(value, currency){
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency', currency
    }).format(value)
}

icon.addEventListener('click', () =>{
    const tmp = firstHolder.value;
    firstHolder.value = secondHolder.value
    secondHolder.value

    if(readAmount() > 0) converter()
})



