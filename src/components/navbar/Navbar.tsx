'use client'
import { useEffect, useState } from 'react';

import Image from "next/image";

import NavLink from "@/components/navbar/NavLink";

import logo from '@/assets/logo/Logo.png';
import user_w from '@/assets/icons/user-w.svg';
import user_b from '@/assets/icons/user-b.svg';

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

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${isScrolled ? 'bg-white lg:bg-black bg-opacity-100 lg:bg-opacity-10 backdrop-blur-md' : `bg-[${navProps.bgColor}]`} fixed z-[999] top-0 w-full h-auto py-4 px-[3%] lg:px-[5%] flex flex-row justify-between items-center transition-all duration-500`}>
            <div className={'flex flex-row justify-start items-center gap-6'}>
                <Image src={logo} alt="Logo image." width="150"/>
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
                <NavLink dropdown={false} to={'/cars'} name={'All Cars'}/>
                <NavLink dropdown={false} to={'/about'} name={'About'}/>
                <NavLink dropdown={false} to={'/contact'} name={'Contact'}/>
            </div>
            <div className={'flex flex-row justify-center items-center gap-6'}>
                <Link href={'sign-in'}
                      className={'flex flex-row justify-start items-center px-4 sm:px-8 py-2 gap-2 rounded-2xl border border-black lg:border-transparent hover:border-white transition duration-300'}>
                    <Image src={user_w} alt={'User signup icon.'} width={20} className={'hidden lg:flex'}/>
                    <Image src={user_b} alt={'User signup icon.'} width={20} className={'flex lg:hidden'}/>
                    <p className={'font-poppins font-medium text-base text-black lg:text-white'}>
                        Sign in
                    </p>
                </Link>
                <Link href={'sell'}
                      className={'hidden lg:flex px-8 py-2 bg-transparent text-white font-poppins font-medium text-base border border-white rounded-2xl hover:bg-white hover:text-black transition duration-300'}>
                    Sell Car
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;