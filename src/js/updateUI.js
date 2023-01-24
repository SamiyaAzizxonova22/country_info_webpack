const cardsEl = document.querySelector(".cards");

export const createCountries = (countries) => {
  cardsEl.innerHTML = "";
  countries.forEach((country) => {
    const commonName = country.name.common;
    const population = country.population;
    const region = country.region;
    const capital = country.capital ? country.capital[0] : "No Capital";
    const flag = country.flags.svg;

    // li
    const li = document.createElement("li");
    li.classList.add("cards__item");
    li.innerHTML = `
            <a href="./about.html?country=/name/${commonName}">
              <img
                src=${flag}
                alt="country-flag"
                width="267"
                height="160"
              />
              <div class="cards__item-inner">
              <h3 class="cards__title">${commonName}</h3>
              <p class="population">Population: <span>${population}</span></p>
              <p class="region">Region: <span>${region}</span></p>
                <p class="capital">Capital: <span>${capital}</span></p>
                </div>
            </a>
    `;

    cardsEl.appendChild(li);
  });
};

const countryInfoEl = document.querySelector(".country-info");

export const createCountryInfo = (country) => {
  const {
    population,
    borders,
    capital,
    region,
    languages,
    flags,
    name,
    tld,
    currencies,
    subregion
  } = country;
  const nativName = Object.values(name.nativeName)[0].official;
  const language = Object.values(languages);
  const currency = Object.values(currencies)[0].name;
  console.log(country);

  countryInfoEl.innerHTML = `
  <img
  class="country-info__img"
  src=${flags.svg}
  alt="country-flag"
  width="560"
  height="400"
  />
  <div class="country-info__content">
    <h2>${name.common}</h2>
    <ul class="country-info__list">
      <li class="country-info__item">
        <p class="name">
          Native Name
          <span>${nativName}</span>
        </p>
        <p class="population">
          Population:
          <span>${population}</span>
        </p>
        <p class="region">
          Region:
          <span>${region}</span>
        </p>
        <p class="sub-region">
          Sub Region:
          <span>${subregion}</span>
        </p>
        <p class="capital">
          Capital:
          <span>${capital}</span>
        </p>
      </li>
      <li class="country-info__item">
        <p class="name">
          Top Level Domain:
          <span>${tld}</span>
        </p>
        <p class="population">
          Currencies:
          <span>${currency}</span>
        </p>
        <p class="region">
          Languages:
          <span>${language}</span>
        </p>
      </li>
    </ul>

    <div class="country-info__borders">
      <h3>Border Countries:</h3>
      ${borders ? borders.map((border)=>{
        return`<a href="./about.html?country=/alpha/${border}">${border}</a>`}) : 'No Borders'}
    </div>
  </div>
  `;
};
