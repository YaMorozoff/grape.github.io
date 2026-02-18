import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AncorIds } from '@/app/constants';
import Close from '@/shared/assets/icons/close.svg';
import Menu from '@/shared/assets/icons/menu.svg';
import Vector from '@/shared/assets/icons/Vector.svg';

import { HeaderMenu } from './HeaderMenu';
import { LangSwitcher } from './LangSwitcher';

export const HeaderModal = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [ref]);

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav ref={ref}>
      <div className="text-grape relative flex cursor-pointer items-center justify-center" onClick={handleClick}>
        <div className="text-grotesk-md pt-1 md:pt-2.5">MENU</div>
        <Image src={Menu} alt={'menu'} className="w-7 md:w-12" />
      </div>

      <div
        className={clsx(
          'fixed top-0 right-0 z-50 h-screen w-screen transform transition-transform duration-300 md:w-150',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div
          className={clsx(
            'bg-main border-l-grape relative z-10 flex h-screen w-full flex-col items-start gap-4 border-l p-6 pt-16 shadow-xl'
          )}
        >
          <div className="flex w-full items-center justify-between">
            <LangSwitcher />

            <div className="text-grape relative flex cursor-pointer hover:bg-white/80" onClick={handleClick}>
              <Image src={Close} alt="close" width={40} />
            </div>
          </div>
          <div className="mt-auto w-fit">
            <HeaderMenu className={'flex-col'} handleClose={handleClick} />
          </div>
          <Link
            href={`#${AncorIds.Contacts}`}
            onClick={handleClick}
            className="text-code-xs flex w-full max-w-90 items-center justify-between gap-2 bg-white p-2 text-center text-black hover:bg-white/80"
          >
            <span>{t('sendRequest')}</span>
            <div className="bg-grape p-2">
              <Image src={Vector} alt={''} className="-rotate-135"></Image>
            </div>
          </Link>
          <div className="text-grape text-mono-xs mt-auto flex items-center gap-2 text-[12px]">
            <span>© 2025 Grape Ads</span>/
            <span className="cursor-pointer hover:text-white">{t('footer.politics')}</span>/
            <span className="cursor-pointer hover:text-white">{t('footer.rules')}</span>/
          </div>
        </div>
      </div>
    </nav>
  );
};
