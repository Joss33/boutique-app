import Image from "next/image";
import { Category } from '@/models/category.model';

export default function CardCategory({ name, link, image}: Omit<Category, 'id'>) {
    return (
        <>
            <a href={link} className="w-60 h-60 shadow rounded-xl shrink-0 overflow-hidden mb-3 relative z-10 group">
                <Image src={image} width={248} height={248} alt={name} className={'mb-5 bg-cover w-full h-full transition-all group-hover:scale-125 group-focus:scale-125 group-focus-within:scale-125 group-active:scale-125 duration-300 '} />
                <div className="w-full text-xl absolute bottom-0 text-center text-VensfolkRegular p-1 bg-shirly-accent-gray group-hover:bg-shirly-primary group-hover:text-white group-focus:bg-shirly-primary group-focus:text-white group-focus-within:bg-shirly-primary group-focus-within:text-white group-active:bg-shirly-primary group-active:text-white transition-all duration-300">
                    {name}
                </div>
            </a>
        </>
    )
}