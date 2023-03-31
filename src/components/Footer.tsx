import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
      <>
        <footer className="bg-shirly-accent-gray-02 px-5 py-8">

            <div className="max-w-[65rem] mx-auto">
                <div className="lg:flex justify-between ">
                    <div className="">
                        <Image src={'/images/LOGO@2x.png'} width={98} height={46} alt={'Logo'} className={'mb-5'} />
                        <p className="text-VensfolkRegular text-shirly-primary mb-8 shrink leading-5" > 
                            Siempre cómoda; siempre bella, <br /> Siempre @sa.storemedellin
                        </p>
                    </div>

                    <ul className="mb-5">
                        <li className="text-shirly-primary text-VensfolkRegular mb-5">
                            Categorías
                        </li>
                        <li className="mb-3">
                            <a href="#" className="hover:underline focus:underline focus-within:underline active:underline transition-all duration-300 ">Blusas</a>
                        </li>
                        <li className="mb-3">
                            <a href="#" className="hover:underline focus:underline focus-within:underline active:underline transition-all duration-300 ">Pantalones</a>
                        </li>
                        <li className="mb-3">
                            <a href="#" className="hover:underline focus:underline focus-within:underline active:underline transition-all duration-300 ">Vestidos</a>
                        </li>
                        <li className="mb-3">
                            <a href="#" className="hover:underline focus:underline focus-within:underline active:underline transition-all duration-300 ">Accesorios</a>
                        </li>
                    </ul>

                    <ul className="mb-5">
                        <li className="text-shirly-primary text-VensfolkRegular mb-5">
                            Contáctanos
                        </li>
                        <li className="mb-3">
                            <a href="#" className="hover:underline focus:underline focus-within:underline active:underline transition-all duration-300 ">+57 300 1234567</a>
                        </li>
                        <li className="mb-3">
                            <a href="#" className="hover:underline focus:underline focus-within:underline active:underline transition-all duration-300 ">sa.store@gmail.com</a>
                        </li>
                    </ul>

                    <ul className="mb-5">
                        <li className="text-shirly-primary text-VensfolkRegular mb-5">
                        Síguenos
                        </li>
                        <li className="mb-3">
                            <div className="flex items-center gap-3">
                                <a href="#" className="hover:text-shirly-primary focus:text-shirly-primary focus-within:text-shirly-primary active:text-shirly-primary transition-all duration-300">
                                    <FontAwesomeIcon icon={faFacebook} className='w-4 h-4  ' />
                                </a>
                                <a href="#" className="hover:text-shirly-primary focus:text-shirly-primary focus-within:text-shirly-primary active:text-shirly-primary transition-all duration-300">
                                    <FontAwesomeIcon icon={faTiktok} className='w-4 h-4  ' />
                                </a>
                                <a href="#" className="hover:text-shirly-primary focus:text-shirly-primary focus-within:text-shirly-primary active:text-shirly-primary transition-all duration-300">
                                    <FontAwesomeIcon icon={faInstagram} className='w-4 h-4  ' />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>

                <hr  className="bg-shirly-primary border-shirly-primary mb-5"/>
                
                <div className="lg:flex lg:justify-end lg:gap-3">
                    <p className="mb-3">
                        Política de privacidad
                    </p>
                    <p>
                        Términos y condiciones
                    </p>
                </div>
            </div>

        </footer>
      </>
    )
  }
  