import React from 'react';
import LinkButtonBlack from "@/components/buttons/LinkButtonBlack";

import Image from "next/image";

import suvImage from '@/assets/content images/car-landing-full.webp';
import ModelButton from "@/components/buttons/ModelButton";


function TypesSection() {
    return (
        <section className={'w-screen h-auto px-[5%] py-16 flex flex-col justify-start items-start gap-12'}>
            <div className={'w-full h-auto flex flex-row justify-between items-center mb-8'}>
                <h1 className={'text-primaryBlue font-poppins font-semibold text-3xl tracking-wider'}>Browse by
                    Type</h1>
                <LinkButtonBlack text={'View All'} link={'/cars'}/>
            </div>

            <div className={'w-full h-[30vh] grid grid-cols-3 gap-12'}>
                <div className={'relative w-full h-full p-8 flex flex-col items-start justify-end rounded-xl overflow-hidden'}>
                    <Image src={suvImage} alt={'Car image - placeholder image for car type.'} layout="fill" objectFit="cover"/>
                </div>

            </div>
            <div className={'w-full h-auto grid grid-cols-3 gap-12'}>

            </div>
        </section>
    );
}

export default TypesSection;