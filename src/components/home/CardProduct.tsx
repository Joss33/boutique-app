import { FC } from 'react';
import { Product } from '@/models/product.model';
import Image from "next/image";

export const CardProduct: FC<Omit<Product, 'id'>> = ({ name, link, image, price, colors}) => {
    return (
        <>
          <a href={link} className='mb-12' >
            <div className="rounded-xl w-full h-[13.25rem] lg:h-[26.25rem] overflow-hidden mb-2">
              <Image src={image} width={336} height={420} alt={'Logo'} />
            </div>
            <p className='text-base mb-2'>
              {name}
            </p>
            <p className='text-base mb-2'>
              {price}
            </p>
            <div className="flex items-center gap-[0.625rem]">
              {
                colors.map((color, index)=> 
                <div key={index} className="w-6 h-6 flex justify-center items-center">
                  <div className="rounded-full w-5 h-5 border border-gray-400 bg-red-600"></div>
                </div>
                )
              }
            </div>
          </a>
        </>
    )
}