import clsx from 'clsx';
import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import Link from 'next/link';
import { Trans } from 'react-i18next';

import Vector from '@/shared/assets/icons/Vector.svg';

type Props = {
  href?: Url;
  text: string;
  variant?: 'link' | 'button' | 'ancor';
  onClick?: () => void;
  className?: string;
};

export const Button = ({ href, text, variant, onClick, className }: Props) => {
  if (variant === 'ancor')
    return (
      <Link href={href || ''}>
        <div className={clsx(className, 'animate-brightness text-mono-xs flex flex-col items-center gap-2 py-5')}>
          <div className="bg-grape flex h-5 w-5 justify-center p-1 align-middle sm:h-10 sm:w-10">
            <Image src={Vector} alt={'arrow'}></Image>
          </div>

          <span className="text-grape">
            <Trans i18nKey={text} />
          </span>
        </div>
      </Link>
    );
  if (variant === 'button') {
    return (
      <button
        onClick={onClick}
        className={clsx(
          className,
          'flex h-fit cursor-pointer items-center justify-center gap-4 bg-white p-2 px-3 text-nowrap'
        )}
      >
        <span className="text-black">{text}</span>
        <div className="bg-grape flex h-10 w-10 items-center justify-center p-2">
          <Image src={Vector} alt={'arrow'} className="h-10 w-10 -rotate-135"></Image>
        </div>
      </button>
    );
  }
  return (
    <Link
      href={href || ''}
      className={clsx(className, 'flex h-fit items-center justify-center gap-4 bg-white p-2 px-3 text-nowrap')}
    >
      <span className="text-black">{text}</span>
      <div className="bg-grape flex h-10 w-10 items-center justify-center p-2">
        <Image src={Vector} alt={'arrow'} className="h-10 w-10 -rotate-135"></Image>
      </div>
    </Link>
  );
};
