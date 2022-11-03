import Head from 'next/head';
import { CarItem } from '../model/CarItem';

export default function SEOHead({ car }: { car: CarItem }) {
  const { id, attribute, amount } = car;

  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://pre-onboarding-7th-2-1-9-two.vercel.app/${id}`}
        />
        <meta property="og:image" content={`${attribute.imageUrl}`} />
        <meta
          property="og:title"
          content={`${attribute.brand} - ${attribute.name} | 차량 대여 서비스`}
        />
        <meta
          property="og:description"
          content={`${attribute.brand} | ${attribute.name} | 월 ${amount} 원`}
        />
        <meta property="og:site_name" content="차량 대여 서비스" />
        <meta property="og:locale" content="en_KO" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
    </>
  );
}
