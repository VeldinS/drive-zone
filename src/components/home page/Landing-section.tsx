import React from 'react';
import '@/app/globals.css'
import car from '@/assets/content images/car-landing.jpg';
import Image from "next/image";

function LandingSection() {
    return (
        <section className={'w-screen h-screen flex flex-row justify-start items-start'}>
            <div className={'w-2/3 h-full pl-[5%] flex flex-col justify-start items-start'}>

            </div>
            <div className={'relative w-1/3 h-full landing-image'}>
                <Image src={car} alt={'Car image'}
                       objectFit="cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-xl"></div>
            </div>
        </section>
    );
}

export default LandingSection;