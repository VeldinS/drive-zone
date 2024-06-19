import React from 'react';

import Image from "next/image";

import NavLink from "@/components/navbar/NavLink";

import logo from '@/assets/logo/logo.png';
import user from '@/assets/icons/user.svg';

import volkswagen from '@/assets/brands/volkswagen.svg';
import audi from '@/assets/brands/audi.svg';
import toyota from '@/assets/brands/toyota.svg';
import bmw from '@/assets/brands/bmw.svg';
import volvo from '@/assets/brands/volvo.svg';
import mercedes from '@/assets/brands/mercedes.svg';

import about from '@/assets/icons/about.svg';
import sell from '@/assets/icons/sell-car.svg';
import buy from '@/assets/icons/buy-car.svg';
import popular from '@/assets/icons/popular.svg';
import contact from '@/assets/icons/contact.svg';

import suv from '@/assets/car types/suv.svg';
import sedan from '@/assets/car types/sedan.svg';
import hatchback from '@/assets/car types/hatchbag.svg';
import hybrid from '@/assets/car types/hybrid.svg';
import coupe from '@/assets/car types/coupe.svg';
import Link from "next/link";

interface navbarProps{
    bgColor: string
}

function Navbar(navProps: navbarProps) {
    return (
        <nav className={`bg-[${navProps.bgColor}] fixed z-[999] top-0 w-full h-auto py-4 px-[5%] flex flex-row justify-between items-center bg-transparent`}>
            <div className={'flex flex-row justify-start items-center gap-6'}>
                <Image src={logo} alt="Logo image." width="150" />
                <NavLink dropdown={true} name={'Home'}
                         dropdownItem1={'About Us'} dropdownItem1Icon={about}
                         dropdownItem2={'Sell Car'} dropdownItem2Icon={sell}
                         dropdownItem3={'Buy Car'} dropdownItem3Icon={buy}
                         dropdownItem4={'Popular'} dropdownItem4Icon={popular}
                         dropdownItem5={'Contact Us'} dropdownItem5Icon={contact}
                />
                <NavLink dropdown={true} name={'Brands'}
                         dropdownItem1={'Volkswagen'} dropdownItem1Icon={volkswagen}
                         dropdownItem2={'Audi'} dropdownItem2Icon={audi}
                         dropdownItem3={'Toyota'} dropdownItem3Icon={toyota}
                         dropdownItem4={'BMW'} dropdownItem4Icon={bmw}
                         dropdownItem5={'Volvo'} dropdownItem5Icon={volvo}
                         dropdownItem6={'Mercedes'} dropdownItem6Icon={mercedes}
                />
                <NavLink dropdown={true} name={'Types'}
                         dropdownItem1={'SUV'} dropdownItem1Icon={suv}
                         dropdownItem2={'Sedan'} dropdownItem2Icon={sedan}
                         dropdownItem3={'Hatchback'} dropdownItem3Icon={hatchback}
                         dropdownItem4={'Coupe'} dropdownItem4Icon={coupe}
                         dropdownItem5={'Hybrid'} dropdownItem5Icon={hybrid}
                />
                <NavLink dropdown={false} to={'/cars'} name={'All Cars'} />
                <NavLink dropdown={false} to={'/about'} name={'About'} />
                <NavLink dropdown={false} to={'/contact'} name={'Contact'} />
            </div>
            <div className={'flex flex-row justify-center items-center gap-6'}>
                <Link href={'sign-in'} className={'flex flex-row justify-start items-center px-8 py-2 gap-2 rounded-2xl border border-transparent hover:border-white transition duration-300'}>
                    <Image src={user} alt={'User signup icon.'} width={20} />
                    <p className={'font-poppins font-medium text-base text-white'}>
                        Sign in
                    </p>
                </Link>
                <Link href={'sell'} className={'px-8 py-2 bg-transparent text-white font-poppins font-medium text-base border border-white rounded-2xl hover:bg-white hover:text-black transition duration-300'}>
                    Sell Car
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;