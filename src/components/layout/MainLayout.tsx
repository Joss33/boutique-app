import { ReactNode } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col h-full">
        <Header/>
        <div className="flex flex-col grow overflow-auto h-full ">
          <main>
            {children}
          </main>
          <Footer/>
        </div>
      </div>
    </>
  )
}