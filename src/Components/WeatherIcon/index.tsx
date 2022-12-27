import { Cloud, CloudFog, CloudLightning, CloudMoon, CloudRain, CloudSnow, CloudSun, MoonStars, Snowflake, SunDim, Wind } from "phosphor-react";
import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";

interface WeatherIconProps {
  condition: string;
}

export function WeatherIcon({ condition }: WeatherIconProps) {

  const { ConsultWeather, dayWeather, setWeatherFunction, weather } =
    useContext(WeatherContext);

  const nowHours = new Date().getHours()

  return (
    <>
      {(condition === "Sol") &&
        <SunDim weight="bold" />
      }
      {(condition === "Céu limpo") &&
        <MoonStars weight="bold" />
      }
      {(condition === "Parcialmente nublado" && nowHours < 18) &&
        <CloudSun weight="bold" />
      }
      {(condition === "Parcialmente nublado" && (nowHours >= 18 || nowHours <= 5)) &&
        <CloudMoon weight="bold" />
      }
      {(condition === "Nublado") &&
        <Cloud weight="bold" />
      }
      {(condition === "Encoberto" && nowHours < 18) &&
        <CloudSun weight="bold" />
      }
      {(condition === "Encoberto" && nowHours > 18) &&
        <CloudMoon weight="bold" />
      }
      {(condition === "Neblina") &&
        <CloudFog weight="bold" />
      }
      {(condition === "Possibilidade de chuva irregular") &&
        <CloudRain weight="bold" />
      }
      {(condition === "Possibilidade de neve irregular") &&
        <CloudSnow weight="bold" />
      }
      {(condition === "Possibilidade de neve molhada irregular") &&
        <CloudSnow weight="bold" />
      }
      {(condition === "CloudRain") &&
        <CloudSnow weight="bold" />
      }
      {(condition === "Possibilidade de trovoada") &&
        <CloudLightning weight="bold" />
      }
      {(condition === "Possibilidade de trovoada") &&
        <CloudLightning weight="bold" />
      }
      {(condition === "Rajadas de vento com neve") &&
        <Wind weight="bold" />
      }
      {(condition === "Nevasca") &&
        <Snowflake weight="bold" />
      }
      {(condition === "Nevoeiro") &&
        <CloudFog weight="bold" />
      }
      {(condition === "Nevoeiro gelado") &&
        <Snowflake weight="bold" />
      }
      {(condition === "Chuvisco irregular") &&
        <CloudRain weight="bold" />
      }
      {(condition === "Chuvisco") &&
        <CloudRain weight="bold" />
      }
      {(condition === "Chuvisco gelado") &&
        <CloudRain weight="bold" />
      }
      {(condition === "Chuvisco forte gelado") &&
        <CloudRain weight="bold" />
      }
      {(condition === "Chuva fraca irregular") &&
        <CloudRain weight="bold" />
      }
      {(condition === "Chuva fraca") &&
        <CloudRain weight="bold" />
      }
      {(condition === "Chuva moderada") &&
        <CloudRain weight="bold" />
      }
      {(condition === "Períodos de chuva moderada") &&
        <CloudRain weight="bold" />
      }
      {(condition === "Períodos de chuva forte") &&
        <CloudLightning weight="bold" />
      }
      {(condition === "Chuva forte") &&
        <CloudLightning weight="bold" />
      }
      {(condition === "Chuva fraca e gelada") &&
        <CloudRain weight="bold" />
      }
      {(condition === "Chuva gelada moderada ou forte") &&
        <CloudLightning weight="bold" />
      }
      {(condition === "Chuva fraca com neve") &&
        <CloudSnow weight="bold" />
      }
      {(condition === "Chuva forte ou moderada com neve") &&
        <CloudSnow weight="bold" />
      }
      {(condition === "Queda de neve irregular e fraca") &&
        <CloudSnow weight="bold" />
      }
      {(condition === "Queda de neve fraca") &&
        <CloudSnow weight="bold" />
      }
      {(condition === "Queda de neve moderada e irregular") &&
        <CloudSnow weight="bold" />
      }
      {(condition === "Queda de neve moderada") &&
        <CloudSnow weight="bold" />
      }
      {(condition === "Queda de neve forte e irregular") &&
        <CloudSnow weight="bold" />
      }
      {(condition === "Neve intensa") &&
        <CloudSnow weight="bold" />
      }
      {(condition === "Granizo") &&
        <Snowflake weight="bold" />
      }
      {(condition === "Aguaceiros fracos") &&
        <CloudRain weight="bold" />
      }
      {(condition === "Aguaceiros moderados ou fortes") &&
        <CloudLightning weight="bold" />
      }
      {(condition === "Chuva torrencial") &&
        <CloudLightning weight="bold" />
      }
      {(condition === "Aguaceiros fracos com neve") &&
        <CloudSnow weight="bold" />
      }
      {(condition === "Aguaceiros moderados ou fortes com neve") &&
        <CloudSnow weight="bold" />
      }
      {(condition === "Chuva moderada ou forte com neve") &&
        <CloudSnow weight="bold" />
      }
      {(condition === "Chuva moderada ou forte com neve") &&
        <CloudSnow weight="bold" />
      }
      {(condition === "Aguaceiros fracos com granizo") &&
        <CloudRain weight="bold" />
      }
      {(condition === "Aguaceiros moderados ou fortes com granizo") &&
        <CloudLightning weight="bold" />
      }
      {(condition === "Chuva fraca irregular com trovoada") &&
        <CloudLightning weight="bold" />
      }
      {(condition === "Chuva moderada ou forte com trovoada") &&
        <CloudLightning weight="bold" />
      }
      {(condition === "Neve fraca irregular com trovoada") &&
        <CloudSnow weight="bold" />
      }
      {(condition === "Neve moderada ou forte com trovoada") &&
        <CloudSnow weight="bold" />
      }
    </>
  )
}