import Image from "next/image";

export const Banner = () => {
  return (
    <>
      <div className=" h-64 mb-12 relative">
        <Image src={'/images/Imagen 2@2x.png'} width={1280} height={250} alt={'Banner de descuento'} className='relative lg:absolute z-10' />
        <div className="grid grid-cols-1 lg:grid-cols-2 ml-auto h-full px-5 relative z-20">
          <div className="flex flex-col lg:justify-center lg:mt-0 mt-5 items-center col-start-1 lg:col-start-2 ">
            <h4 className='text-base lg:text-3xl text-center text-VensfolkRegular mb-3'>
              Llévate nuestros accesorios con
            </h4>
            <h3 className='text-3xl lg:text-5xl text-center text-VensfolkRegular mb-5'>
              10% de descuento
            </h3>
            <button className="btn btn-primary"><span className="relative z-20">IR A COMPRAR</span></button>
          </div>  
        </div>
      </div>
    </>
  )
}