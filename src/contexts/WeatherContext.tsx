import { createContext, ReactNode, useState } from "react";
import { api } from "../lib/axios";

interface WeatherProps {
  cityInfo: {
    cityName: string,
    cityRegion: string,
  },
  current: {
    condition: string,
    temp: number,
    maxTemp: number,
    minTemp: number,
  }
}

interface WeatherContextType {
  ConsultWeather: (city: string) => Promise<void>;
  weather: WeatherProps;
  dayWeather: any[];
  setWeatherFunction: (data: any) => void;
}

interface WeatherContextProviderProps {
  children: ReactNode;
}

export const WeatherContext = createContext({} as WeatherContextType);

export function WeatherContextProvider({
  children,
}: WeatherContextProviderProps) {

  const [weather, setWeather] = useState<WeatherProps>({} as WeatherProps)
  const [dayWeather, setDayWeather] = useState<any>([{}] as any)

  async function ConsultWeather(city: string) {
    const response = await api.get(`/forecast.json?key=551b5ff419a645338bd164326222312&q=${city}&lang=pt`)
    console.log(response.data)
    setWeatherFunction(response.data)
    console.log(`Weather: ${JSON.stringify(weather)}`)
    // console.log(`Day Weather: ${JSON.stringify(dayWeather)}`)
  }

  function setWeatherFunction(data: any) {
    setDayWeather(null)
    setWeather({
      cityInfo: {
        cityName: data.location.name,
        cityRegion: data.location.region,
      },
      current: {
        condition: data.current.condition.text,
        temp: data.current.temp_c,
        maxTemp: data.forecast.forecastday[0].day.maxtemp_c,
        minTemp: data.forecast.forecastday[0].day.mintemp_c,
      }
    })

    setDayWeather(data.forecast.forecastday[0].hour)
    console.log(dayWeather)
  }

  return (
    <WeatherContext.Provider
      value={{
        ConsultWeather,
        weather,
        dayWeather,
        setWeatherFunction,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
