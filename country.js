const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountry()

const displayCountries = (countries) => {
    // console.log(countries);

    const countriesHtml = countries.map(country => getCountriesHtml(country))
    const container = document.getElementById('countries');
    container.innerHTML = countriesHtml.join(' ');
}

const getCountriesHtml = ({ name, flags, area, region }) => { // 3rd way
    // console.log(country);
    // const { name, flags, area, region } = singleCountry; // 2nd way
    return `
        <div class="country">
            <h2>${name?.common}</h2>
            <p>Area: ${area}</p>
            <p>Region: ${region}</p>
            <img src="${flags?.png}" alt="">
        </div>
    `
}