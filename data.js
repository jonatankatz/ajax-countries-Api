function getByCapitalCity(capital, callback) {
    console.log(capital)

    $.ajax({
        url: `https://restcountries.eu/rest/v2/capital/${capital}`,
        method: "GET",
        success: function(result) {
            callback(result)
        },
        error: function(err) {
            $("#cardsContainer").html("<h1>No Data!</h1>")
        }
    })
}


function getByCurrency(currency, callback) {
    $.ajax({
        url: `https://restcountries.eu/rest/v2/currency/${currency}`,
        method: "GET",
        success: function(result, status, response) {
            callback(result)
        },
        error: function(err) {
            $("#cardsContainer").html("<h1>No Data!</h1>")
        }
    })
}