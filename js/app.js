// Getting API DATA 

const loadCountries = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountries(data))
}
const countriesDiv = document.getElementById('countries');

// Button Handler 

document.getElementById('all').addEventListener('click', function () {
    countriesDiv.innerHTML = `

    <div class="card w-75 mx-auto p-0 mt-5 glass text-white">
        <div class="card-header bg-dark text-center ">
            <h4><i class="fa-solid fa-globe mx-2"></i>All Continent</h4>
        </div>
        <div class="card-body">
            <h5 class="card-title text-dark">About All Continent</h5>
            <p class="card-text">continent, one of the larger continuous masses of land, namely, Asia, Africa, North America, South America, Antarctica, Europe, and Australia, listed in order of size. Europe and Asia are sometimes considered a single continent, Eurasia. </p>
        </div>
    </div>
    
    `;
    loadCountries("https://restcountries.com/v3.1/all");

})
document.getElementById('asia').addEventListener('click', function () {
    countriesDiv.innerHTML = `
    
    <div class="card w-75 mx-auto p-0 mt-5 glass text-white">
        <div class="card-header bg-dark text-center ">
            <h4><i class="fa-solid fa-earth-asia mx-2"></i>Asia</h4>
        </div>
        <div class="card-body">
            <h5 class="card-title text-dark">About Asia</h5>
            <p class="card-text">Asia, the world’s largest and most diverse continent. It occupies the eastern four-fifths of the giant Eurasian landmass. Asia is more a geographic term than a homogeneous continent, and the use of the term to describe such a vast area always carries the potential of obscuring the enormous diversity among the regions it encompasses. </p>
        </div>
    </div>
    
    `;
    loadCountries("https://restcountries.com/v3.1/region/asia");

})
document.getElementById('europe').addEventListener('click', function () {
    countriesDiv.innerHTML = `

    <div class="card w-75 mx-auto p-0 mt-5 glass text-white">
        <div class="card-header bg-dark text-center ">
            <h4><i class="fa-solid fa-earth-europe mx-2"></i>Europe</h4>
        </div>
        <div class="card-body">
            <h5 class="card-title text-dark">About Europe</h5>
            <p class="card-text">Europe, second smallest of the world’s continents, composed of the westward-projecting peninsulas of Eurasia (the great landmass that it shares with Asia) and occupying nearly one-fifteenth of the world’s total land area. It is bordered on the north by the Arctic Ocean, on the west by the Atlantic Ocean, and on the south (west to east) by the Mediterranean Sea, the Black Sea, the Kuma-Manych Depression, and the Caspian Sea.  </p>
        </div>
    </div>
    
    `;
    loadCountries("https://restcountries.com/v3.1/region/europe");

})
document.getElementById('americas').addEventListener('click', function () {
    countriesDiv.innerHTML = `

    <div class="card w-75 mx-auto p-0 mt-5 glass text-white">
        <div class="card-header bg-dark text-center ">
            <h4><i class="fa-solid fa-earth-americas mx-2"></i>Americas</h4>
        </div>
        <div class="card-body">
            <h5 class="card-title text-dark">About Americas</h5>
            <p class="card-text">Americas, also called America, the two continents, North and South America, of the Western Hemisphere. The climatic zones of the two continents are quite different. In North America, subarctic climate prevails in the north, gradually warming southward and finally becoming tropical near the southern isthmus. In South America, the climate in the north is tropical, becoming cooler southward, and finally becoming a cold, marine climate at Cape Horn.  </p>
        </div>
    </div>
    
    `;
    loadCountries("https://restcountries.com/v3.1/region/americas");

})
document.getElementById('africa').addEventListener('click', function () {
    countriesDiv.innerHTML = ` 
    <div class="card w-75 mx-auto p-0 mt-5 glass text-white">
        <div class="card-header bg-dark text-center ">
           
        <h4><i class="fa-solid fa-earth-africa mx-2"></i> Africa</h4>
        </div>
        <div class="card-body">
        
            <h5 class="card-title text-dark">About Africa</h5>
            <p class="card-text">Africa, the second largest continent (after Asia), covering about one-fifth of the total land surface of Earth. The continent is bounded on the west by the Atlantic Ocean, on the north by the Mediterranean Sea, on the east by the Red Sea and the Indian Ocean, and on the south by the mingling waters of the Atlantic and Indian oceans.   </p>
        </div>
    </div>
    
    `;
    loadCountries("https://restcountries.com/v3.1/region/africa");

})
document.getElementById('oceania').addEventListener('click', function () {
    countriesDiv.innerHTML = `

    <div class="card w-75 mx-auto p-0 mt-5 glass text-white">
        <div class="card-header bg-dark text-center ">
            <h4><i class="fa-solid fa-earth-oceania mx-2"></i>Oceania</h4>
        </div>
        <div class="card-body">
            <h5 class="card-title text-dark">About Oceania</h5>
            <p class="card-text">Oceania, collective name for the islands scattered throughout most of the Pacific Ocean. The term, in its widest sense, embraces the entire insular region between Asia and the Americas. A more common definition excludes the Ryukyu, Kuril, and Aleutian islands and the Japan archipelago. The most popular usage delimits Oceania further by eliminating Indonesia, Taiwan, and the Philippines, because the peoples and cultures of those islands are more closely related historically to the Asian mainland.   </p>
        </div>
    </div>
    
    `;
    loadCountries("https://restcountries.com/v3.1/region/oceania");

})

window.addEventListener('load',() =>{
    loadCountries("https://restcountries.com/v3.1/all");
})
// Displaying data 

const displayCountries = countries => {
    countries.forEach(country => {
        const div = document.createElement('div');
        div.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src="${country.flags.svg}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${country.name.common}(${country.cca2})</h5>
    <p class="card-text">${country.status}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><b>Region:</b>  ${country.region}</li>
    <li class="list-group-item"><b>Capital:</b>  ${country.capital}</li>
    <li class="list-group-item"><b>Population:</b>  ${country.population}</li>
    <li class="list-group-item"><b>Timezones:</b>  ${country.timezones}</li>
  </ul>
</div>
    `
        div.classList.add('col-lg-4', 'my-5', 'd-flex', 'justify-content-center');
        countriesDiv.appendChild(div);

    });
}