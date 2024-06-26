import React from 'react';
import ButtonBlue from "@/components/buttons/ButtonBlue";
import Image from "next/image";

import buyCarIcon from '@/assets/icons/buy-car-icon.svg';
import sellCarIcon from '@/assets/icons/sell-car-icon.svg';

import ButtonBlack from "@/components/buttons/ButtonBlack";

function BuySellSection() {
    return (
        <section className={'w-screen h-auto px-[5%] py-16 grid grid-cols-2 gap-16 items-stretch'}>

            <div className={'w-full h-full px-16 py-16 bg-[#E9F2FF] rounded-xl flex flex-col items-start justify-start gap-0'}>
                <div className={'flex flex-col items-start justify-start gap-4'}>
                    <h2 className={'text-primaryBlue font-poppins font-semibold text-3xl leading-relaxed'}>Are You
                        Looking <br/> For a Car</h2>
                    <p className={'text-primaryBlue font-poppins font-normal text-base leading-relaxed'}>We are commited
                        to providing our customers with exceptional service.</p>
                </div>
                <div className={'w-full flex flex-row justify-between items-center'}>
                    <ButtonBlue text={'Get Started'} link={'cars'}/>
                    <Image src={buyCarIcon} alt={'Sell Car Icon'} width={100}/>
                </div>
            </div>

            <div className={'w-full h-full px-16 py-16 bg-[#FFE9F3] rounded-xl flex flex-col items-start justify-start gap-0'}>
                <div className={'flex flex-col items-start justify-start gap-4'}>
                    <h2 className={'text-primaryBlue font-poppins font-semibold text-3xl leading-relaxed'}>Do You Want to
                        <br/> Sell a Car</h2>
                    <p className={'text-primaryBlue font-poppins font-normal text-base leading-relaxed'}>We are commited
                        to providing our customers with exceptional service.</p>
                </div>
                <div className={'w-full flex flex-row justify-between items-center'}>
                    <ButtonBlack text={'Get Started'} link={'sell'}/>
                    <Image src={sellCarIcon} alt={'Sell Car Icon'} width={100}/>
                </div>
            </div>

        </section>
    );
}

export default BuySellSection;