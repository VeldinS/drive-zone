import React from 'react';

import Image from "next/image";

import logo from '@/assets/logo/logo.png';
import NavLink from "@/components/navbar/NavLink";

function Navbar() {
    return (
        <nav className={'w-full h-auto py-4 px-[10%] flex flex-row justify-between items-center bg-transparent'}>
            <div className={'flex flex-row justify-start items-center gap-6'}>
                <Image src={logo} alt="Logo image." width="150" />
                <NavLink dropdown={true} name={'Home'} dropdownItem1={'About Us'} dropdownItem2={'Sell Car'} dropdownItem3={'Buy Car'} dropdownItem4={'Selected'} dropdownItem5={'Contact Us'}/>
                <NavLink dropdown={true} name={'Brands'} dropdownItem1={'Volkswagen'} dropdownItem2={'Audi'} dropdownItem3={'Toyota'} dropdownItem4={'BMW'} dropdownItem5={'Volvo'} dropdownItem6={'Mercedes'} />
                <NavLink dropdown={true} name={'Types'} dropdownItem1={'SUV'} dropdownItem2={'Sedan'} dropdownItem3={'Hatchback'} dropdownItem4={'Coupe'} dropdownItem5={'Hybrid'} />
                <NavLink dropdown={false} to={'/cars'} name={'All Cars'} />
                <NavLink dropdown={false} to={'/about'} name={'About'} />
                <NavLink dropdown={false} to={'/contact'} name={'Contact'} />
            </div>
        </nav>
    );
}

export default Navbar;