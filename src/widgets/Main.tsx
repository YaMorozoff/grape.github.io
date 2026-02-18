'use client';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { AncorIds } from '@/app/constants';
import Grape from '@/shared/assets/img/grape_logo.png';
import { Button } from '@/shared/ui/Button';
import { Section } from '@/shared/ui/Section';

export const Main = () => {
  const { t } = useTranslation();
  return (
    <Section ancorId={AncorIds.Main} className="h-screen justify-between!">
      <div className="flex flex-col items-center px-0 pt-20 md:px-20 xl:px-0">
        <Image src={Grape} alt="grape_logo" />
        <span className="text-mono-xs text-center lg:w-[75%]">{t('main.title')}</span>
      </div>
      <Button href={`#${AncorIds.Specialization}`} text={'main.btn'} variant="ancor" />
    </Section>
  );
};
