'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { AncorIds } from '@/app/constants';
import Arrow from '@/shared/assets/img/arrow_thin.png';
import { Section } from '@/shared/ui/Section';

type FeedbackItem = { id: string; content: string; from: string };

export const FeedBack = () => {
  const { t } = useTranslation();
  const swiperRef = useRef<SwiperType | null>(null);
  const feedbackList = t('feedback.feedbackList', { returnObjects: true }) as FeedbackItem[];

  return (
    <Section ancorId={AncorIds.Feedback} className="gap-10">
      <span className="title">{t('feedback.title')}</span>

      <div className="w-screen">
        <Swiper
          loop={true}
          slidesPerView={'auto'}
          spaceBetween={70}
          centeredSlides={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="blur-box"
        >
          {feedbackList.map((item, i) => (
            <SwiperSlide key={i} className="xm:max-w-130 max-w-full">
              <div className="flex flex-col gap-8">
                <div className="bg-main text-mono-xs relative h-50 border border-gray-400 p-8 text-[12px] md:h-60 md:text-[16px]">
                  {item.content}
                  <span className="absolute -bottom-5 left-20 h-0 w-0 border-t-20 border-r-20 border-l-20 border-t-gray-400 border-r-transparent border-l-transparent"></span>
                </div>
                <div className="flex items-center gap-6 pl-30">
                  <div className="bg-grape h-12 w-12 rounded-full"></div>
                  <span className="text-mono-md">{item.from}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={clsx('mt-6 flex w-full justify-end md:mt-10')}>
          <div onClick={() => swiperRef.current?.slidePrev()} className={clsx('bg-grape cursor-pointer p-2 md:p-4')}>
            <Image src={Arrow} alt={''} className="w-4 rotate-180 md:w-6 xl:w-8"></Image>
          </div>
          <div
            onClick={() => swiperRef.current?.slideNext()}
            className={clsx('bg-grape mx-4 mr-10 cursor-pointer p-2 md:mr-20 md:p-4')}
          >
            <Image src={Arrow} alt={'arrow'} className="w-4 md:w-6 xl:w-8"></Image>
          </div>
        </div>
      </div>
    </Section>
  );
};
