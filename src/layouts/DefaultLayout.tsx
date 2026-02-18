import { ReactNode } from 'react';

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex w-full flex-col items-center overflow-hidden text-white select-none">
      {children}
    </main>
  );
}
