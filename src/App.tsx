import { useState } from "react";
import Result from "./components/Result.tsx";

function App() {
  const [apiResponse, setApiResponse] = useState("");

  const getWeather = async () => {
    const apiKey = "111c60cacb714524a35200850251603";
    const city = (document.getElementById("cityName") as HTMLTextAreaElement)
      .value;
    const response = await fetch(
      "http://api.weatherapi.com/v1/current.json?key=" +
        apiKey +
        "&q=" +
        city +
        "&aqi=no"
    );
    const data = await response.json();
    setApiResponse(data);
    //console.log(data);
  };

  return (
    <>
      <div className="input-group">
        <span className="input-group-text">Nome da cidade</span>
        <textarea
          id="cityName"
          className="form-control"
          aria-label="City"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getWeather();
            }
          }}
        ></textarea>
        <Result data={apiResponse} />
      </div>
    </>
  );
}

export default App;
