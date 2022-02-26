const loadCountries  = () =>{
    fetch ('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = countries =>{
    // for(const country of  countries){
    //     console.log(country);
    // }
    const contiesDiv =document.getElementById('countries')
    countries.forEach (country =>{
        console.log(country);
        const div =document.createElement('div');
        div.classList.add('countries')
        div.innerHTML = `
        <h3>${ country.name.official}</h3>
        <p>Population: ${country.population}<p/>
        <p>Area : ${country.area}</p>
        <button onclick="detailsLoad ('${country.name}') "> Details </button>
        `;
        contiesDiv.appendChild(div);
    })
}
const detailsLoad = name =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => loadConutryName(data[0]))
}
detailsLoad();
const loadConutryName = country => {
    const countryDetail = document.getElementById('country-details')
    countryDetail.innerHTML = `
    <h2>counteryName : ${country.name.official}</h2>
    `;
}
