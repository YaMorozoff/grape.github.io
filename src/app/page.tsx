'use client';
import '../shared/lib/i18n';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import Rectangles from '@/shared/assets/img/rectangles.png';
import Rectangles2 from '@/shared/assets/img/rectangles2.png';
import Rectangles3 from '@/shared/assets/img/rectangles3.png';
import { About } from '@/widgets/About';
import { Clients } from '@/widgets/Clients';
import { FeedBack } from '@/widgets/Feedback';
import { Footer } from '@/widgets/Footer';
import { Form } from '@/widgets/Form';
import { Header } from '@/widgets/Header';
import { Loading } from '@/widgets/Loading';
import { Main } from '@/widgets/Main';
import { Specialization } from '@/widgets/Specialization';

import DefaultLayout from '../layouts/DefaultLayout';

export default function Home() {
  const [loaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const cb = () => {
      setProgress((prev) => {
        if (prev === 100) {
          setIsLoaded(true);
          clearInterval(id);
          return 100;
        } else return prev + 1;
      });
    };
    const id = setInterval(cb, progress < 30 ? 100 : 10);
    return () => clearInterval(id);
  }, [progress]);
  return (
    <DefaultLayout>
      {loaded ? (
        <>
          <Header />
          <div className="flex w-full max-w-480 flex-col items-center gap-10 lg:gap-40">
            <Main />
            <Specialization />
            <Clients />
            <About />
            <FeedBack />
            <Form />
          </div>
          <Footer />
          <Image
            src={Rectangles}
            alt="rectangles"
            className="animate-brightness-slow absolute top-[8%] left-[30%] -z-1 md:top-[7%] md:left-[50%] lg:top-[3%] xl:left-[60%]"
            width={1200}
          />
          <Image
            src={Rectangles2}
            alt="rectangles"
            className="animate-brightness-slow absolute top-[45%] right-0 -z-1"
            width={200}
          />
          <Image
            src={Rectangles3}
            alt="rectangles"
            className="animate-brightness-slow absolute top-[75%] left-0 -z-1"
            width={200}
          />
        </>
      ) : (
        <Loading progress={progress} />
      )}
    </DefaultLayout>
  );
}
