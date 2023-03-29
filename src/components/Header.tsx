import { useState } from "react";
import Image from "next/image";
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faTimes } from '@fortawesome/pro-regular-svg-icons'

export default function Header() {

  const [stateSearch, setStateSearch] = useState(false);

  const toogleSearch = () => {
    console.log('Sin validar')
    let state = !stateSearch;
    console.log('ENtro');
    setStateSearch(state)
  }

  return (
    <>
      <div className="bg-red-50">
        <nav className="bg-white shadow relative z-30 p-5">
          <div className="flex justify-between items-center max-w-[65rem] mx-auto ">
            <button onClick={toogleSearch} className="flex items-center hover:text-shirly-accent focus:text-shirly-accent focus-within:text-shirly-accent activehover:text-shirly-accent transition-all duration-300 relative group z-30">
              <div className="bg-white w-10 h-10 flex justify-center items-center">
                <FontAwesomeIcon icon={faMagnifyingGlass} className='w-4 h-4' />
              </div>
              <span className="text-shirly-accent absolute transition-all duration-300 z-10 opacity-0 group-hover:translate-x-10 pl-2 group-hover:opacity-100 group-focus:translate-x-10 group-focus:opacity-100 group-focus-within:translate-x-10 group-focus-within:opacity-100 group-active:translate-x-10 group-active:opacity-100">
                Busqueda
              </span>
            </button>
            <Image src={'/images/LOGO@2x.png'} width={98} height={46} alt={'Logo'} />
            <button className="w-10 h-10 flex justify-center items-center">
              <FontAwesomeIcon icon={faCartShopping} className='w-4 h-4' />
            </button>
          </div>
        </nav>
        <nav className={classNames('bg-white shadow absolute w-full duration-300 transition-all z-20 p-5', { 'translate-y-1/2 top-1/2 opacity-1': stateSearch, 'translate-y-0 top-0 opacity-0': !stateSearch })}>
          <div className="flex items-center max-w-[65rem] mx-auto ">
            <div className="relative w-full flex items-center">
              <input type="text" maxLength={100} className="w-full h-12 pr-12 border-b hover:border-b-2 focus:border-b-2 focus-within:border-b-2 active:border-b-2 placeholder:text-gray-300 border-shirly-accent outline-none" placeholder="Buscar..." />
              <button className="w-12 h-12 flex justify-center items-center absolute right-0">
                <FontAwesomeIcon icon={faTimes} className='w-4 h-4' />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
