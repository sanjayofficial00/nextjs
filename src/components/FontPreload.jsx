'use client';
import Head from 'next/head';

export default function FontPreload() {
  return (
    <Head>
      <link
        rel="preload"
        href="/fonts/barber.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
      {/* Add more fonts here if needed */}
    </Head>
  );
}
