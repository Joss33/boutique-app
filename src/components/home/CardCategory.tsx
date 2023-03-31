import { FC } from "react";
import Image from "next/image";
import { Category } from '@/models/category.model';

export const CardCategory: FC<Omit<Category, 'id'>> = ({ name, link, image}) => {
    return (
        <>
            <a href={link} className="w-full max-w-[15.5rem] h-60 shadow rounded-xl shrink-0 overflow-hidden relative z-10 group">
                <Image src={image} width={248} height={248} alt={name} className={'bg-cover w-full h-full transition-all group-hover:scale-125 group-focus:scale-125 group-focus-within:scale-125 group-active:scale-125 duration-300 '} />
                <div className="w-full text-xl absolute bottom-0 text-center text-VensfolkRegular p-1 bg-shirly-accent-gray group-hover:bg-shirly-primary group-hover:text-white group-focus:bg-shirly-primary group-focus:text-white group-focus-within:bg-shirly-primary group-focus-within:text-white group-active:bg-shirly-primary group-active:text-white transition-all duration-300">
                    {name}
                </div>
            </a>
        </>
    )
}