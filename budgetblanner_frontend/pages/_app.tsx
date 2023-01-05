/* ================================================== MainApp ================================================== */
import { AppProps } from 'next/app';
import LandingPage from '../Components/Layout';
import  { AxiosGet } from '../data/Axios';

// Run the sql request
AxiosGet("/Reload_compilations", "csda");
export default function App({ Component, pageProps }: AppProps) {
  return (
    <LandingPage>
      <Component {...pageProps} />
    </LandingPage>
  )  
}