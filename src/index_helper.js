const WeatherInfo = async (city, measurement) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${measurement}&appid=37f12aac41f12be0ef05427d581ffce8`;
  let response;

  try {
    response = await fetch(url, { mode: 'cors' });
  } catch (e) {
    response = e;
  }
  const data = await response.json();
  data.unit = measurement;

  localStorage.setItem('data', JSON.stringify(data));
  // eslint-disable-next-line
  location.reload();
};

const Unit = (unit) => {
  let speed;
  let degrees;

  if (unit === 'Imperial') {
    degrees = 'F°';
    speed = 'Mi/h';
  } else {
    degrees = 'C°';
    speed = 'Km/h';
  }

  return { speed, degrees };
};

function submitFrm(e) {
  e.preventDefault();
  const input = document.getElementById('city');
  const check = document.getElementById('degrees');
  let measurement;
  if (check.checked === true) {
    measurement = 'Metric';
  } else {
    measurement = 'Imperial';
  }
  if (input.value !== '') {
    WeatherInfo(input.value, measurement);
  }
}

function toggleTemp() {
  const data = JSON.parse(localStorage.getItem('data'));
  const { name } = data;
  const check = document.getElementById('degrees');
  let measurement;
  if (check.checked === true) {
    measurement = 'Metric';
  } else {
    measurement = 'Imperial';
  }
  WeatherInfo(name, measurement);
}

export {
  WeatherInfo, submitFrm, Unit, toggleTemp,
};