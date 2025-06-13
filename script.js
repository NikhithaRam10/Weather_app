async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "62847fadec72289ed17f4816120b0246"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);

    if (!response.ok) throw new Error(data.message || "City not found");

    const result = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡 Temperature: ${data.main.temp} °C</p>
      <p>☁ Weather: ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById("weatherResult").innerHTML = result;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
