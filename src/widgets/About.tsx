'use client';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { AncorIds } from '@/app/constants';
import MapImage from '@/shared/assets/img/map_image.png';
import { Section } from '@/shared/ui/Section';

export const About = () => {
  const { t } = useTranslation();

  return (
    <Section ancorId={AncorIds.About} className="scroll-mt-20 gap-10">
      <h2 className="title">{t('about.title')}</h2>
      <div className="text-code-xs relative z-1 text-center">
        <Image src={MapImage} alt="map" />
        <div className="hidden lg:flex">
          <div className="bg-main absolute top-[12%] left-[6%] flex h-15 items-center justify-center border border-white p-4">
            {t('about.countries.us')}
          </div>

          <div className="bg-main absolute top-[10%] left-[45%] flex items-center justify-center border border-white p-4">
            {t('about.countries.eu')}
          </div>

          <div className="bg-main absolute top-[16%] left-[65%] flex items-center justify-center border border-white p-4">
            {t('about.countries.ru')}
          </div>

          <div className="bg-main absolute top-[34%] left-[75%] flex items-center justify-center border border-white p-4">
            {t('about.countries.cz')}
          </div>

          <div className="bg-main absolute top-[60%] left-[15%] flex items-center justify-center border border-white p-4">
            {t('about.countries.la')}
          </div>

          <div className="bg-main absolute top-[40%] left-[45%] flex max-w-50 items-center justify-center border border-white p-4">
            {t('about.countries.uar')}
          </div>

          <div className="bg-main absolute top-[70%] left-[85%] flex items-center justify-center border border-white p-4">
            {t('about.countries.au')}
          </div>
        </div>
        <div className="flex lg:hidden">
          <div className="animate-brightness absolute top-[12%] left-[12%] flex h-3 w-3 items-center justify-center bg-white filter"></div>
          <div className="animate-brightness absolute top-[12%] left-[52%] flex h-3 w-3 items-center justify-center bg-white filter"></div>
          <div className="animate-brightness absolute top-[20%] left-[67%] flex h-3 w-3 items-center justify-center bg-white filter"></div>
          <div className="animate-brightness absolute top-[35%] left-[75%] flex h-3 w-3 items-center justify-center bg-white filter"></div>
          <div className="animate-brightness absolute top-[65%] left-[23%] flex h-3 w-3 items-center justify-center bg-white filter"></div>
          <div className="animate-brightness absolute top-[50%] left-[50%] flex h-3 w-3 items-center justify-center bg-white filter"></div>
          <div className="animate-brightness absolute top-[74%] left-[87%] flex h-3 w-3 items-center justify-center bg-white filter"></div>
        </div>
      </div>
    </Section>
  );
};
