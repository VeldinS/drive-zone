import React from 'react';
import Link from "next/link";
import rightArrow from '@/assets/icons/right-arrow-wide.svg';
import Image from "next/image";

interface ButtonProps {
    text: string,
    link: string
}

function ButtonWhite(buttonProps: ButtonProps) {
    return (
        <Link href={buttonProps.link} className="group flex flex-row justify-center items-center px-6 py-4 gap-4 rounded-xl bg-white border hover:scale-105 shadow-sm hover:shadow-xl border-black transition-all duration-500">
                <p className={'font-poppins font-normal text-base text-[#050B20] tracking-wider'}>
                    {buttonProps.text}
                </p>
                <Image src={rightArrow} alt={'Right arrow'} width={15}
                       className={'group-hover:rotate-45 transition duration-500'} />
        </Link>
    );
}

export default ButtonWhite;
