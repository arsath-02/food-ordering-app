
import Image from 'next/image';
import Right from '../icons/Right';

export default function Hero() {
    return (
        <>
            <section className='hero mt-2'>
                <div className='py-12'>
                    <h1 className='text-4xl font-bold'>
                    "Order in a &nbsp;
                    <span className="text-primary">Flash</span>
                    ,<br /> Taste the &nbsp;
                    <span className="text-secondary">Dash </span>!"
                    </h1>
                <p className='my-5 text-gray-500'>
                    "Savor the flavors, delivered unplanned! Fast food bliss, with just a tap, Order now, and enjoy in a snap!"
                </p>
                <div className='flex gap-6 mt-4'>
                <button className='bg-primary  text-sm uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full'>
                    Order Now <Right className="w-6 h-6 right-icon" />
                </button>
                    <button className='flex gap-2 py-2 text-gray-600 font-semibold '>More<Right />
                    </button>
                </div>
                </div>
                <div className='relative'>
                <Image
                    src={'/parotta1.png'} layout={'fill'}
                    objectFit={'contain'} alt={'parotta'}/>
                </div>
            </section>
        </>
    );
}
