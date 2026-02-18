'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { AncorIds } from '@/app/constants';
import Close from '@/shared/assets/icons/list_item.svg';
import { Section } from '@/shared/ui/Section';
import { Tabs } from '@/shared/ui/Tabs';

type SpecItem = { title: string; subtitle: string; list: string[] };

export const Specialization = () => {
  const { t } = useTranslation();

  const specialization = Object.values(t('specialization', { returnObjects: true }) as Record<string, SpecItem>);

  const specializationValues = Object.values(specialization);
  const specializationMap = specializationValues.map((item) => {
    return {
      title: item.title,
      content: (
        <>
          <div className="text-code-md pb-6 text-white/50">{t(item.subtitle)}</div>
          <div
            className={clsx(
              'grid grid-cols-1 gap-2 sm:grid-cols-2 xl:gap-8',
              item.list.length > 6 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'
            )}
          >
            {item.list.map((listItem) => (
              <div key={listItem} className="text-code-xs flex items-center gap-4">
                <Image src={Close} alt={'close'} width={18} />
                <span className="text-wrap text-white/80">{listItem}</span>
              </div>
            ))}
          </div>
        </>
      ),
    };
  });

  return (
    <Section ancorId={AncorIds.Specialization} className="scroll-mt-40 items-center justify-center">
      <div className="flex w-full flex-col items-center">
        <Tabs
          tabs={specializationMap}
          titleClassName="text-center p-3 border border-white/15 text-grotesk-xs "
          tabClassName="p-6 lg:p-10 border border-white/15"
        />
      </div>
    </Section>
  );
};
