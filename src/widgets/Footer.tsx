'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { AncorIds } from '@/app/constants';
import Ig from '@/shared/assets/icons/ig.svg';
import Tg from '@/shared/assets/icons/tg.svg';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-grape relative w-full p-4 pb-36 xl:p-20 xl:px-40 xl:pb-44">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 md:gap-20">
          <div className="flex flex-col gap-4 md:flex-row md:gap-20">
            <div className="flex flex-col gap-1">
              <div className="flex gap-6">
                <Link href={''}>
                  <Image src={Tg} alt={'tg'} width={30} unoptimized quality={100} />
                </Link>
                <Link href={''}>
                  <Image src={Ig} alt={'ig'} width={30} unoptimized quality={100} />
                </Link>
              </div>
              <span className="text-mono-md">{t('footer.contacts')}</span>
              <Link href={'mailto:grapeads@inbox.com'} className="text-mono-xs hover:underline">
                grapeads@inbox.com
              </Link>
              <Link href={'tel:+375333333333'} className="text-mono-xs hover:underline">
                +375 33 333 3333
              </Link>
            </div>
          </div>
          <div className="absolute bottom-15 flex items-center justify-between md:bottom-18 xl:bottom-8">
            <span className="font-CyGrotesk text-[60px] md:text-[80px] xl:text-[150px]">{t('grape')}</span>
          </div>
        </div>

        <div className="text-mono-xs flex flex-col items-start gap-1">
          <span className="text-grotesk-xs">{t('grape')}</span>
          <Link href={`#${AncorIds.Main}`} className="hover:underline">
            {t('header.main')}
          </Link>
          <Link href={`#${AncorIds.Specialization}`} className="hover:underline">
            {t('header.specialization')}
          </Link>
          <Link href={`#${AncorIds.Clients}`} className="hover:underline">
            {t('header.clients')}
          </Link>
          <Link href={`#${AncorIds.About}`} className="hover:underline">
            {t('header.about')}
          </Link>
          <Link href={`#${AncorIds.Contacts}`} className="hover:underline">
            {t('header.contacts')}
          </Link>
        </div>
      </div>
      <div className="bg-grape text-mono-xs absolute bottom-0 left-0 flex h-24 w-full items-center justify-between border-t border-white p-2 md:h-30 xl:p-10">
        <div className="hidden h-full w-full items-center gap-10 md:flex">
          <span>© 2025 Grape Ads</span>
          <Link href={''} className="hover:underline">
            {t('footer.politics')}
          </Link>
          <Link href={''} className="hover:underline">
            {t('footer.rules')}
          </Link>
        </div>
        <div className="flex gap-2 md:hidden">
          <div className="flex flex-col gap-2">
            <Link href={''} className="hover:underline">
              {t('footer.politics')}
            </Link>
            <Link href={''} className="hover:underline">
              {t('footer.rules')}
            </Link>
          </div>

          <span>© 2025 Grape Ads</span>
        </div>
      </div>
    </footer>
  );
};
