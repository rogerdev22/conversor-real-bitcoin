
document.write("<h1>Título principal bitcoin</h1>")


const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const bitcoin=105.00


const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realvaluetext = document.getElementById('real-value-text')
    const currencyvaluetext = document.getElementById('currency-value-text')


    realvaluetext.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === "Bitcoin") {
        currencyvaluetext.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",

        }).format(inputReais / bitcoin)
    }
  //  if (select.value === "€ Euro") {
 //       currencyvaluetext.innerHTML = new Intl.NumberFormat("de-DE", {
 //           style: "currency",
 //           currency: "EUR",
 //       }).format(inputReais / euro)
//    }
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

//    if (select.value === 'US$ Dolar americano') {
//        currencyName.innerHTML = "Dolar americano"
//        currencyImg.src = "/assets/eua.png"
//    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = "BITcoins"
        currencyImg.src="/bitcoin.png"
    }
    //    console.log(select.value)

    convertValues()
}
button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
