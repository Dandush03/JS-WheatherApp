import {
  submitFrm, Unit, toggleTemp, WeatherInfo,
} from './index_helper';
import './index.scss';

const FrmCreator = () => {
  const data = JSON.parse(localStorage.getItem('data'));
  const main = document.createElement('main');
  const sub = document.createElement('div');
  const frm = document.createElement('form');

  const tempContainer = document.createElement('label');
  const tempMainContainer = document.createElement('div');
  tempContainer.className = 'switch';
  const tempButton = document.createElement('input');
  tempButton.type = 'checkbox';
  tempButton.id = 'degrees';

  if (data.unit === 'Metric') {
    tempButton.checked = true;
  }

  tempButton.onchange = toggleTemp;
  const tempSpan = document.createElement('span');
  tempSpan.className = 'slider round';

  tempContainer.appendChild(tempButton);
  tempContainer.appendChild(tempSpan);
  tempMainContainer.appendChild(tempContainer);

  const citiesContainer = document.createElement('div');
  const CitySelect = document.createElement('input');
  CitySelect.id = 'city';
  CitySelect.type = 'text';
  CitySelect.placeholder = 'City';

  citiesContainer.appendChild(CitySelect);

  const submitContainer = document.createElement('div');
  const submit = document.createElement('button');
  submit.name = 'submit';
  submit.innerText = 'Search';

  submitContainer.appendChild(submit);

  const btnFrmContainer = document.createElement('div');
  btnFrmContainer.className = 'btn-container';

  btnFrmContainer.appendChild(submitContainer);
  btnFrmContainer.appendChild(tempMainContainer);

  frm.appendChild(citiesContainer);
  frm.appendChild(btnFrmContainer);

  frm.onsubmit = submitFrm;

  sub.appendChild(frm);
  main.appendChild(sub);

  return main;
};

const DisplayData = (data) => {
  const {
    main, name, sys, weather, cod, wind, unit,
  } = data;

  const getMetric = Unit(unit);

  const mainDiv = document.createElement('div');
  const firstSubMain = document.createElement('div');
  firstSubMain.className = 'main-info';
  const secondSubMain = document.createElement('div');
  secondSubMain.className = 'sub-info';
  const mainInfo = document.createElement('div');
  const mainImg = document.createElement('div');

  const place = document.createElement('p');
  const temp = document.createElement('h2');
  const subInfo = document.createElement('p');
  mainInfo.appendChild(place);
  mainInfo.appendChild(temp);
  mainInfo.appendChild(subInfo);
  const img = document.createElement('img');
  const imgDescription = document.createElement('p');
  mainImg.appendChild(img);
  mainImg.appendChild(imgDescription);
  firstSubMain.appendChild(mainInfo);
  firstSubMain.appendChild(mainImg);

  const minTemp = document.createElement('p');
  const maxTemp = document.createElement('p');
  const humidity = document.createElement('p');
  const avgWind = document.createElement('p');

  secondSubMain.appendChild(minTemp);
  secondSubMain.appendChild(maxTemp);
  secondSubMain.appendChild(humidity);
  secondSubMain.appendChild(avgWind);

  mainDiv.appendChild(firstSubMain);
  mainDiv.appendChild(secondSubMain);

  if (cod === 200) {
    place.innerText = `${name}, ${sys.country}`;
    temp.innerText = `${main.temp} ${getMetric.degrees}`;
    subInfo.innerText = `Feels Like ${main.feels_like} ${getMetric.degrees}`;
    img.src = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;
    imgDescription.innerText = `${weather[0].description}`;
    minTemp.innerText = `Minimum: ${main.temp_min} ${getMetric.degrees}`;
    maxTemp.innerText = `Maximum: ${main.temp_max} ${getMetric.degrees}`;
    humidity.innerText = `Humidity: ${main.humidity}%`;
    avgWind.innerText = `Wind: ${wind.speed} ${getMetric.speed}`;
  } else {
    place.innerText = 'Sorry We Didn\'t Find The City You\'re Looking For';
    place.className = 'err';
    temp.innerText = '-- --';
    subInfo.innerText = 'Feels Like -- --';
    imgDescription.innerText = '---- ----';
    minTemp.innerText = 'Minimum: -- --';
    maxTemp.innerText = 'Maximum: -- --';
    humidity.innerText = 'Humidity: -- --';
    avgWind.innerText = 'Wind: -- --';
  }

  return mainDiv;
};

window.onload = () => {
  const data = JSON.parse(localStorage.getItem('data'));
  // eslint-disable-next-line
  if (data === null) {
    WeatherInfo('london', 'metric');
  }
  const displayData = FrmCreator();
  displayData.insertBefore(DisplayData(data), displayData.childNodes[0]);
  document.body.appendChild(displayData);
};
