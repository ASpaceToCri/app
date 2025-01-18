import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ProfilePage from "./ProfilePage";
import menuItems from "./index";
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
  
}

