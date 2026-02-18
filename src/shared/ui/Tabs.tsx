import clsx from 'clsx';
import React, { FC, ReactElement, useState } from 'react';

type Tab = {
  title: string;
  content: ReactElement;
};
interface ITabs {
  containerClassName?: string;
  titleClassName?: string;
  tabClassName?: string;
  tabs: Tab[];
}

export const Tabs: FC<ITabs> = ({ containerClassName, titleClassName, tabClassName, tabs }) => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className={clsx(containerClassName, 'flex w-full flex-col gap-2 xl:gap-8')}>
      <div className="flex flex-col items-center justify-between gap-2 md:flex-row lg:gap-8">
        {tabs.map((tab, i) => (
          <div
            key={tab.title}
            className={clsx(
              titleClassName,
              currentTab === i
                ? 'bg-grape w-full cursor-pointer lg:flex-1'
                : 'hover:bg-grape/10 bg-main w-full cursor-pointer lg:flex-1'
            )}
            onClick={() => setCurrentTab(i)}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div className={clsx(tabClassName, 'flex h-[30vh] min-h-fit flex-col overflow-hidden xl:h-[45vh]')}>
        {tabs[currentTab].content}
      </div>
    </div>
  );
};
