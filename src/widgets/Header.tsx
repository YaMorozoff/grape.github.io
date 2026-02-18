'use client';

import clsx from 'clsx';
import Link from 'next/link';

import { AncorIds } from '@/app/constants';

import { HeaderModal } from './HeaderModal';

export const Header = () => {
  return (
    <header
      style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,1), rgba(10,10,10,0))', left: 0 }}
      className={clsx(
        'fixed top-0 left-0 z-50 flex w-full items-center justify-center overflow-hidden px-8 py-4 pb-0 2xl:px-42 2xl:pt-12'
      )}
    >
      <div className="my-4 flex w-full max-w-480 items-center justify-between gap-4">
        <Link href={`#${AncorIds.Main}`}>
          <span className="text-grape text-grotesk-md pt-1 md:pt-3">GRAPE</span>
        </Link>
        <HeaderModal />
      </div>
    </header>
  );
};
