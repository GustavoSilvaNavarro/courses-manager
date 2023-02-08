import '@/styles/globals.css';
import '@/styles/CourseDetails.css';
import '@/styles/StudentCard.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
