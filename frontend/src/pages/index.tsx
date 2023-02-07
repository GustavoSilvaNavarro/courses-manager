import Head from 'next/head';

import { MainPage } from '@/components/MainPage/MainPage';

// import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>School Manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-3 px-4">
        <MainPage />
      </main>
    </>
  );
}
