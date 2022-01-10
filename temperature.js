// setInnerText function
const setInnerText = (id,setText) =>{
    document.getElementById(id).innerText = setText;
}
const getElements = (id) =>{
    return document.getElementById(id);
}
const searchCity = () =>{
    // get input value
    const searchCityField = getElements('search-city');
    const searchCityText = searchCityField.value ;
    // emty message
    const emtyMessage = getElements('emty-text');
    if(searchCityText == ""){
        emtyMessage.innerText = "PLEASE WRITE SOMETHING";
    }else{
        // clear 
        emtyMessage.innerText = '';
        searchCityField.value = '';
        // get data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCityText}&appid=62c31dfae041a945a2e30e4f1d7e2e62&units=metric`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
    }
    
}
const displayData =(data) =>{
    // city name
    setInnerText('city-name',data.name);
    // country name
    setInnerText('country',data.sys.country);
    // temperature
    setInnerText('celsius',data.main.temp);
    // main
    setInnerText('main',data.weather[0].main);  
    // set url
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imgIcon = getElements('weather-icon');
    imgIcon.setAttribute('src',url);
}