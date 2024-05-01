import Image from 'next/image';
import MenuItem from '../Menu/MenuItem';
import SectionHeader from './SectionHeader';


export default function HomeMenu(){
    return (
        <>
        <section className="">
            <div className="absolute  left-0 right-0 w-full justify-start">
                <div className="absolute -left-20 -top-[40px] text-left -z-10">
                    <Image src={'/dosa.jpeg'} width={400} height={400}
                    alt={'left_image'} />
                </div>
                <div className="absolute -right-10 -top-[50px] text-right -z-10">
                    <Image src={'/chicken_briyani2.png'} width={400} height={400}
                    alt={'left_image'} />
                </div>
            </div>
            <div className="text-center mb-4">
                <SectionHeader 
                subHeader={'Check for'}
                mainHeader={'Menu'} />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />

            </div>

            </section>
        
        
        </>
    );
}