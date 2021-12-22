const searchCity = () =>{
    // get input value
    const searchCityField = document.getElementById('search-city');
    const searchCityText = searchCityField.value ;
    // emty message
    const emtyMessage = document.getElementById('emty-text');
    if(searchCityText == ""){
        emtyMessage.innerText = "PLEASE WRITE SOMETHING";
    }else{
        // clear 
        emtyMessage.innerText = '';
        searchCityField.value = '';
        // get data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCityText}&appid=62c31dfae041a945a2e30e4f1d7e2e62`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
    }
    
}
const displayData =(data) =>{
    // city name
    const cityName = document.getElementById('city-name');
    cityName.innerText = data.name;
    // country name
    const country = document.getElementById('country');
    country.innerText = data.sys.country;
    // temperature
    const kelvin = data.main.temp;
    const celsius = kelvin - 273.15;
    const celsiusText = document.getElementById('celsius');
    celsiusText.innerText = celsius.toFixed(2);
    // main
    const main = document.getElementById('main');
    main.innerText = data.weather[0].main;
  
}