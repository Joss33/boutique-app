import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="flex flex-col h-full">
          <Header/>
          <div className="flex flex-col grow overflow-auto h-full">
            <Main />
            <Footer/>
          </div>
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
