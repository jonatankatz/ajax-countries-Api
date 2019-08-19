const capitalSearchBtn = $("#capitalSearchBtn")


$(function() {
    capitalSearchBtn.on("click", function() {
        const searchInputVal = $("#capitalCityInput").val()
        getByCapitalCity(searchInputVal, (result) => {
            console.log(result)
            $("#cardsContainer").html(getCountryCard(result))
        })

    })
})

function getCountryCard(countries) {
    console.log("im in get card")
    const CountryCard = countries.map(c => {
        const {
            name,
            capital,
            flag
        } = c;

        return (`     <div class="card ml-5 mb-5" style="width: 250px;" >

    <div class="view overlay">
      <img  height="150px"  class="card-img-top" src="${flag}" alt="Country Flag">
    </div>
  
    <div class="card-body  text-center">
  
      <h4 class="card-title">${name}</h4>
      <p class="mb-3">${capital}</p>
      <a target="_blank"  href="https://en.wikipedia.org/wiki/Special:Search?search=${capital}" class=" btn btn-primary ">wikipedia</a>
  
    </div>
  
</div>`)

    })
    return CountryCard
}



$(function() {
    $("#currSlct").on("change", function() {
        const currInputVal = this.value
        console.log(currInputVal)
        getByCurrency(currInputVal, (result) => {
            console.log(result)
            $("#cardsContainer").html(getCountryCard(result))
        })

    })
})