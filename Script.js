async function getWeather() {
    const location = document.getElementById("locationInput").value;

    if (!location) {
        alert("Enter a location first");
        return;
    }

    const apiKey = "a29d293cc11a4541924120349262804";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            document.getElementById("weatherResult").innerHTML = "Location not found";
            return;
        }

        const temp = data.current.temp_c;
        const condition = data.current.condition.text;

        document.getElementById("weatherResult").innerHTML =
            `Temperature: ${temp}°C <br> Condition: ${condition}`;

    } catch (error) {
        document.getElementById("weatherResult").innerHTML =
            "Something went wrong. Try again.";
    }
}