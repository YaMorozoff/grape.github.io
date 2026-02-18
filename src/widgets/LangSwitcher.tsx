'use client';

import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';

export const LangSwitcher: FC<{ className?: string }> = ({ className }) => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language;

  const changeLanguage = (lang: 'ru' | 'en') => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={clsx('text-code-md flex items-center', className)}>
      <button className="flex cursor-pointer" onClick={() => changeLanguage('ru')}>
        <span className={clsx('m-1 font-medium uppercase', currentLang === 'ru' ? 'text-grape' : 'text-white')}>
          ru
        </span>
      </button>
      /
      <button className="flex cursor-pointer" onClick={() => changeLanguage('en')}>
        <span className={clsx('m-1 font-medium uppercase', currentLang === 'en' ? 'text-grape' : 'text-white')}>
          en
        </span>
      </button>
    </div>
  );
};
