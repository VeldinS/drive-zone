import React from 'react';
import LinkButtonBlack from "@/components/buttons/LinkButtonBlack";

import Image from "next/image";

import ModelButton from "@/components/buttons/ModelButton";

import suvImage from '@/assets/car types/suv.jpg';
import sedanImage from '@/assets/car types/sedan.jpg';
import hatchbackImage from '@/assets/car types/hatchback.jpg';
import hybridImage from '@/assets/car types/hybrid.jpg';
import coupeImage from '@/assets/car types/coupe.jpg';

import suv from '@/assets/car types/suv.svg';
import sedan from '@/assets/car types/sedan.svg';
import hatchback from '@/assets/car types/hatchbag.svg';
import hybrid from '@/assets/car types/hybrid.svg';
import coupe from '@/assets/car types/coupe.svg';
import ModelCard from "@/components/cards/ModelCard";


function TypesSection() {
    return (
        <section className={'w-screen h-auto px-[5%] py-16 flex flex-col justify-start items-start gap-6'}>
            <div className={'w-full h-auto flex flex-col md:flex-row justify-between items-center mb-0 md:mb-8'}>
                <h1 className={'text-primaryBlue font-poppins font-semibold text-2xl sm:text-3xl tracking-wider'}>Browse by
                    Type</h1>
                <LinkButtonBlack text={'View All'} link={'/cars'}/>
            </div>

            <div className={'w-full h-auto lg:h-[30vh] grid grid-cols-1 lg:grid-cols-2 gap-6'}>
                <ModelCard image={suvImage} type={'SUV'} typeLink={'/suv'} icon={suv} />
                <ModelCard image={sedanImage} type={'Sedan'} typeLink={'/sedan'} icon={sedan} />
            </div>
            <div className={'w-full h-auto lg:h-[30vh] grid grid-cols-1 lg:grid-cols-3 gap-6'}>
                <ModelCard image={hatchbackImage} type={'Hatchback'} typeLink={'/hatchback'} icon={hatchback} />
                <ModelCard image={hybridImage} type={'Hybrid'} typeLink={'/hybrid'} icon={hybrid} />
                <ModelCard image={coupeImage} type={'Coupe'} typeLink={'/coupe'} icon={coupe} />
            </div>
        </section>
    );
}

export default TypesSection;