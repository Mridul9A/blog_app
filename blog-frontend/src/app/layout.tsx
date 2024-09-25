import { ReactNode } from 'react';
import Header from '../components/Header';
import ClientWrapper from '../components/ClientWrapper';

export const metadata = {
  title: 'Your Blog Title',
  description: 'Description of your blog',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <ClientWrapper>
          <Header />
          <main>{children}</main>
        </ClientWrapper>
      </body>
    </html>
  );
}
