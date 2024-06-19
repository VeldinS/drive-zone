import React from 'react';

import Image from "next/image";

import NavLink from "@/components/navbar/NavLink";

import logo from '@/assets/logo/logo.png';

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


function Navbar() {
    return (
        <nav className={'w-full h-auto py-4 px-[10%] flex flex-row justify-between items-center bg-transparent'}>
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
                <NavLink dropdown={true} name={'Types'} dropdownItem1={'SUV'} dropdownItem2={'Sedan'} dropdownItem3={'Hatchback'} dropdownItem4={'Coupe'} dropdownItem5={'Hybrid'} />
                <NavLink dropdown={false} to={'/cars'} name={'All Cars'} />
                <NavLink dropdown={false} to={'/about'} name={'About'} />
                <NavLink dropdown={false} to={'/contact'} name={'Contact'} />
            </div>
        </nav>
    );
}

export default Navbar;