import { zodResolver } from "@hookform/resolvers/zod";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { GetServerSideProps } from 'next';
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from 'zod';
import { Header } from "../Components/Header";
import { LoadingButton } from "../Components/LoadingButton";
import { WeatherCard } from "../Components/WeatherCard";
import { WeatherIcon } from '../Components/WeatherIcon';
import { WeatherContext } from '../contexts/WeatherContext';
import useGetDay from '../hooks/useGetDay';
import useWindowDimensions from '../hooks/useWindowDimensions ';
import { api } from "../lib/axios";
import { CarouselCards, ConsultContainer, CurrentWeatherContainer, CurrentWeatherInfo, DegreeContainer, Form, VerificationContainer } from "../styles/pages/consult";

interface ConsultPageProps {
  data: any
}

const weatherFormSchema = z.object({
  city: z.string().min(1, 'Digite uma cidade'),
});

type WeatherFormInputs = z.infer<typeof weatherFormSchema>

export default function Consult({ data }: ConsultPageProps) {

  const { control, register, handleSubmit, formState: { isSubmitting, errors }, reset, } = useForm<WeatherFormInputs>({
    resolver: zodResolver(weatherFormSchema),
  })

  const { ConsultWeather, dayWeather, setWeatherFunction, weather } =
    useContext(WeatherContext);

  console.log(weather)


  const { width } = useWindowDimensions();
  const dayOfWeek = useGetDay()
  const nowHours = new Date().getHours()
  const [perView, setPerView] = useState(4)


  useEffect(() => {
    if (width < 740) {
      setPerView(1.35)
    } else if (width < 1000) {
      setPerView(3)
    } else if (width < 1250) {
      setPerView(3.5)
    } else if (width > 1250) {
      setPerView(4.5)
    }
  }, [width])

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: perView,
      spacing: 10,
    }
  })

  async function handleConsultWeather(data: WeatherFormInputs) {
    const notifySuccess = () => {
      toast.success('Cidade encontrada! 🎉', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    const notifyError = () => {
      toast.error('Cidade não encontrada!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    try {
      await ConsultWeather(data.city)
      notifySuccess()
      reset();
    } catch (error) {
      notifyError()
    } finally {

    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Link href={'/'} prefetch={true}><Header /></Link>
      <ConsultContainer>
        <VerificationContainer>
          <h2>Verifique agora a previsão do tempo da sua cidade!</h2>
          <span>Digite o nome da sua cidade no campo abaixo e em seguida clique em <span>pesquisar</span>!</span>

          <Form action="" onSubmit={handleSubmit(handleConsultWeather)}>
            <input type="text" placeholder='Ex: São Paulo' {...register('city')} />
            {
              errors &&
              <strong key={errors.city?.message}>
                {errors.city?.message}
              </strong>
            }

            {
              isSubmitting === true ? <LoadingButton loading={isSubmitting} /> : <button type="submit">Pesquisar</button>
            }

          </Form>

          {weather.current &&
            <CurrentWeatherContainer>
              <span>{weather.cityInfo.cityName}, {weather.cityInfo.cityRegion} -  <span>{dayOfWeek}</span></span>
              <CurrentWeatherInfo>
                {/* <SunDim weight="bold" /> */}
                <WeatherIcon condition={(weather.current.condition)} />
                <DegreeContainer>
                  <span>{weather.current.condition}</span>
                  <span>{weather.current.temp}° <span>{weather.current.maxTemp}° / {weather.current.minTemp}°</span></span>
                </DegreeContainer>
              </CurrentWeatherInfo>
            </CurrentWeatherContainer>
          }


        </VerificationContainer>

        {weather.current &&
          <CarouselCards ref={sliderRef} className="keen-slider">
            {dayWeather.map((currentWeather: any, index) => {
              if (index >= nowHours) {
                return (
                  <div key={currentWeather.time} className="keen-slider__slide">
                    <WeatherCard
                      key={currentWeather.time}
                      hour={index}
                      info={currentWeather.condition.text}
                      degree={currentWeather.temp_c}
                    />
                  </div>
                )
              }
            })}

          </CarouselCards>
        }

      </ConsultContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const response = await api.get('/forecast.json?key=551b5ff419a645338bd164326222312&q=São Paulo&lang=pt', {
    headers: { "Accept-Encoding": "gzip,deflate,compress" }
  })

  return {
    props: {
      data: response.data
    }
  }
}
