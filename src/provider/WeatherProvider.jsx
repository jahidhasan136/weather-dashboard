import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

const WeatherProvider = ({ Children }) => {
  const { loading, error, weatherData } = useWeather();
  return (
    <WeatherContext.Provider value={{ loading, error, weatherData }}>
      {Children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
