import useGetDay from "../../hooks/useGetDay";
import { WeatherIcon } from "../WeatherIcon";
import { DegreeContainer, WeatherCardContainer, WeatherInfo } from "./styles";

interface WeatherCardProps {
  hour: number;
  info: string;
  degree: number;
}

export function WeatherCard({ hour, degree, info }: WeatherCardProps) {

  const dayOfWeek = useGetDay()

  return (
    <WeatherCardContainer>
      <span>{dayOfWeek} - {hour}h</span>
      <WeatherInfo>
        {/* <SunDim weight="bold" /> */}
        <WeatherIcon condition={String(info)} />
        <DegreeContainer>
          <span>{info}</span>
          <span>{degree} °</span>
        </DegreeContainer>
      </WeatherInfo>
    </WeatherCardContainer>
  )
}