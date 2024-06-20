import React from 'react';
import '@/app/globals.css'
import car from '@/assets/content images/car-landing.jpg';
import Image from "next/image";
import ButtonWhite from "@/components/buttons/ButtonWhite";
import ButtonBlue from "@/components/buttons/ButtonBlue";
import ModelButton from "@/components/buttons/ModelButton";

import suv from '@/assets/car types/suv.svg';
import sedan from '@/assets/car types/sedan.svg';
import hatchback from '@/assets/car types/hatchbag.svg';
import hybrid from '@/assets/car types/hybrid.svg';
import coupe from '@/assets/car types/coupe.svg';
import Link from "next/link";

function LandingSection() {
    return (
        <section className={'w-screen h-screen flex flex-row justify-start items-start'}>
            <div className={'w-2/3 h-full pl-[5%] flex flex-col justify-center items-start gap-8'}>
                <p className={'font-poppins text-black font-normal text-base'}>Find cars for sale and for rent near you</p>
                <h1 className={'font-poppins text-black font-medium text-7xl leading-normal'}>4,675 Vehicles <br/> Available</h1>
                <div className={'flex flex-row justify-start items-start gap-8'}>
                    <ButtonBlue text={'Views Inventory'} link={'/cars'} />
                    <ButtonWhite text={'Contact Us'} link={'/contact'} />
                </div>
                <div className={'flex flex-col justify-start items-start gap-6'}>
                    <p className={'font-poppins text-black font-normal text-base'}>Or Browse Featured Models</p>
                    <div className={'flex flex-row justify-start items-start gap-4'}>
                        <ModelButton modelIcon={suv} modelName={'SUV'} modelLink={'/suv'} />
                        <ModelButton modelIcon={sedan} modelName={'Sedan'} modelLink={'/sedan'} />
                        <ModelButton modelIcon={hatchback} modelName={'Hatchback'} modelLink={'/hatchback'} />
                        <ModelButton modelIcon={coupe} modelName={'Coupe'} modelLink={'/coupe'} />
                        <ModelButton modelIcon={hybrid} modelName={'Hybrid'} modelLink={'/hybrid'} />
                    </div>
                </div>
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