import '@/styles/index.scss';

import { ReactNode } from 'react';

import HomeHead from '@/app/head';

interface Props {
  children: ReactNode;
}

export const metadata = {
  description: 'My poke-dex with GraphQL and Next.js',
  title: 'poke-dex',
};

function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <HomeHead />
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
