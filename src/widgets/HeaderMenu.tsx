import clsx from 'clsx';
import Link from 'next/link';
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AncorIds } from '@/app/constants';

export const HeaderMenu: FC<{
  className: string;
  handleClose?: Dispatch<SetStateAction<boolean>>;
}> = ({ className, handleClose }) => {
  const { t } = useTranslation();

  const [activeAncor, setActiveAncor] = useState<AncorIds>(AncorIds.Main);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    let lastValid: AncorIds = AncorIds.Main;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (Object.values(AncorIds).includes(id as AncorIds)) {
              lastValid = id as AncorIds;
              setActiveAncor(lastValid);
            } else {
              setActiveAncor(lastValid);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeModal = () => {
    setTimeout(() => handleClose && handleClose(false), 100);
  };
  return (
    <div className={clsx('text-grotesk-md flex w-full justify-between gap-6 uppercase', className)}>
      <Link
        href={`#${AncorIds.Main}`}
        className={clsx(activeAncor === AncorIds.Main ? 'text-white' : 'text-grape', 'hover:text-white')}
        onClick={closeModal}
      >
        {t('header.main')}
      </Link>
      <Link
        href={`#${AncorIds.Specialization}`}
        className={clsx(activeAncor === AncorIds.Specialization ? 'text-white' : 'text-grape', 'hover:text-white')}
        onClick={closeModal}
      >
        {t('header.specialization')}
      </Link>
      <Link
        href={`#${AncorIds.Clients}`}
        className={clsx(activeAncor === AncorIds.Clients ? 'text-white' : 'text-grape', 'hover:text-white')}
        onClick={closeModal}
      >
        {t('header.clients')}
      </Link>
      <Link
        href={`#${AncorIds.About}`}
        className={clsx(activeAncor === AncorIds.About ? 'text-white' : 'text-grape', 'hover:text-white')}
        onClick={closeModal}
      >
        {t('header.about')}
      </Link>
      <Link
        href={`#${AncorIds.Contacts}`}
        className={clsx(activeAncor === AncorIds.Contacts ? 'text-white' : 'text-grape', 'hover:text-white')}
        onClick={closeModal}
      >
        {t('header.contacts')}
      </Link>
    </div>
  );
};
