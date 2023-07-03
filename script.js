function convert() {
            var amount = document.getElementById("amount").value;
            var fromCurrency = document.getElementById("from").value;
            var toCurrency = document.getElementById("to").value;

            // API call to fetch the exchange rate
            fetch("https://api.exchangerate-api.com/v4/latest/" + fromCurrency)
                .then(response => response.json())
                .then(data => {
                    var exchangeRate = data.rates[toCurrency];
                    var convertedAmount = (amount * exchangeRate).toFixed(2);

                    var result = document.getElementById("result");
                    result.innerHTML = amount + " " + fromCurrency + " = " + convertedAmount + " " + toCurrency;
                })
                .catch(error => {
                    console.log(error);
                });
        }