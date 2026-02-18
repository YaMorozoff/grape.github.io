import clsx from 'clsx';
import React, { FC, ReactNode, useEffect } from 'react';

type Props = {
  title?: string | ReactNode;
  subtitle?: string | ReactNode;
  children?: ReactNode;
  className?: string;
  ancorId?: string;
};

export const Section: FC<Props> = ({ title, subtitle, children, className, ancorId }) => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-filled');
          } else {
            entry.target.classList.remove('section-filled');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id={ancorId}
      className={clsx(
        'section-transparent xs:px-2 animate-appear relative flex w-full flex-col items-center justify-center px-0 py-10 2xl:px-100',
        className
      )}
    >
      {title && <span className="text-title-main">{title}</span>}
      {subtitle && <span className="text-subtitle-main">{subtitle}</span>}
      {children}
    </section>
  );
};
