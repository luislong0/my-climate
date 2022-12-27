import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { WeatherContextProvider } from '../contexts/WeatherContext';
import { globalStyles } from '../styles/global';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WeatherContextProvider>
        <Component {...pageProps} />
      </WeatherContextProvider>
    </>
  )
}
