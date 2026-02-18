'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { AncorIds } from '@/app/constants';
import betting from '@/shared/assets/icons/betting.png';
import binary from '@/shared/assets/icons/binary.png';
import crypto from '@/shared/assets/icons/crypto.png';
import dating from '@/shared/assets/icons/dating.png';
import facebook from '@/shared/assets/icons/facebook.png';
import facebook_colored from '@/shared/assets/icons/facebook_colored.png';
import fintex from '@/shared/assets/icons/fintex.png';
import gambling from '@/shared/assets/icons/gambling.png';
import google from '@/shared/assets/icons/google.png';
import google_colored from '@/shared/assets/icons/google_colored.png';
import leadgen from '@/shared/assets/icons/leadgen.png';
import learning from '@/shared/assets/icons/learning.png';
import Mario from '@/shared/assets/icons/mario.gif';
import nutra from '@/shared/assets/icons/nutra.png';
import service from '@/shared/assets/icons/service.png';
import service1 from '@/shared/assets/icons/service1.png';
import telegram from '@/shared/assets/icons/telegram.png';
import telegram_colored from '@/shared/assets/icons/telegram_colored.png';
import tiktok from '@/shared/assets/icons/tiktok.png';
import tiktok_colored from '@/shared/assets/icons/tiktok_colored.png';
import tw from '@/shared/assets/icons/tw.png';
import tw_colored from '@/shared/assets/icons/tw_colored.png';
import Vector from '@/shared/assets/icons/Vector.svg';
import yandex from '@/shared/assets/icons/yandex.png';
import yandex_colored from '@/shared/assets/icons/yandex_colored.png';
import Line from '@/shared/assets/img/line.png';
import { Section } from '@/shared/ui/Section';

export const Clients = () => {
  const { t } = useTranslation();
  const swiperRef = useRef<SwiperType | null>(null);
  const marioRef = useRef<HTMLImageElement | null>(null);
  const pos = useRef(0);
  const direction = useRef(1);

  useEffect(() => {
    let frame: number;

    const animate = () => {
      pos.current += 0.2 * direction.current;

      if (pos.current >= 95) {
        direction.current = -1;
        if (marioRef.current) {
          marioRef.current.style.transform = `scaleX(${direction.current})`;
        }
      }
      if (pos.current <= -3) {
        direction.current = 1;
        if (marioRef.current) {
          marioRef.current.style.transform = `scaleX(${direction.current})`;
        }
      }

      if (marioRef.current) {
        marioRef.current.style.left = `${pos.current}%`;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  const socials = [
    { gray: facebook, colored: facebook_colored },
    { gray: telegram, colored: telegram_colored },
    { gray: tiktok, colored: tiktok_colored },
    { gray: google, colored: google_colored },
    { gray: yandex, colored: yandex_colored },
    { gray: tw, colored: tw_colored },
  ];
  const domainsIcons = [service, learning, service1, dating, betting, crypto, leadgen, binary, fintex, gambling, nutra];
  const domains = t('clients.domains', { returnObjects: true }) as string[];

  return (
    <Section ancorId={AncorIds.Clients} className="h-fit scroll-mt-20 gap-8 xl:gap-20">
      <span className="title px-4">{t('clients.title')}</span>

      <div className="relative flex w-full items-center justify-center gap-2 xl:w-auto xl:gap-8">
        <button className="hidden border p-2 hover:bg-white/10! lg:flex" onClick={() => swiperRef.current?.slidePrev()}>
          <Image src={Vector} alt={'arrow'} className="rotate-90"></Image>
        </button>

        <Swiper
          loop={true}
          slidesPerView={'auto'}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="blur-box w-full xl:w-auto"
        >
          {domains.map((domain, i) => (
            <SwiperSlide key={domain} className="max-w-30">
              <div className="flex max-w-10 flex-col items-center justify-center xl:max-w-30">
                <Image src={domainsIcons[i]} alt={domain} height={44} />
                <span className="text-code-xs mt-4 text-center font-extralight">{domain}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="hidden border p-2 hover:bg-white/10! lg:flex" onClick={() => swiperRef.current?.slideNext()}>
          <Image src={Vector} alt={'arrow'} className="-rotate-90"></Image>
        </button>
      </div>

      <div className="relative w-full pt-25">
        <Image
          ref={marioRef}
          src={Mario}
          alt="line"
          height={100}
          className={clsx('absolute top-0 left-0 hue-rotate-250 filter')}
        />
        <Image src={Line} alt="line" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {socials.map((s, i) => (
          <div
            key={i}
            className={clsx(
              'bg-main relative flex h-44 w-44 flex-col items-center justify-center border border-white/15 p-2'
            )}
          >
            <div className="absolute top-2 left-2 flex w-6 items-center justify-center overflow-hidden border border-white/15 p-1">
              <Image src={s.gray} alt={'social'} height={15} />
            </div>

            <Image src={s.colored} alt={'social'} width={120} />
          </div>
        ))}
      </div>
    </Section>
  );
};
