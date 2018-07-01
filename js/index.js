
let converter = new Converter()
converter.getAllCurrencies()
converter.showCachedCurrencies()


function convertTo(){
    let fromCurrency1 = document.getElementById("fromCurrencyList").value;
    let toCurrency1 = document.getElementById("toCurrencyList").value;
    let value = document.getElementById("value").value;

    let query = fromCurrency1+"_"+toCurrency1

    converter.getConversionRate(fromCurrency1, toCurrency1).then( response =>{ 
        const rate = response.currencyRate;
        const appStatus = response.appStatus;

        if(rate !== undefined){
            document.getElementById("showValue").innerHTML = rate * value
             if(appStatus ==='online') converter.addCurrencyRateToCache(rate, fromCurrency1, toCurrency1)
        }
        else 
            console.log("unable to convert")
    }).catch( error => {
        console.log('No rate was found in the cache: ');
        document.getElementById("showValue").innerHTML = "Can not convert. You seem to be offline"
    });
}