import React from 'react';
import Link from "next/link";
import Image from "next/image";

import downArrow from '@/assets/icons/down arrow.svg';
import {StaticImport} from "next/dist/shared/lib/get-img-props";

interface navLinkProps {
    dropdown: boolean,
    to?: string,
    name: string,
    dropdownItem1?: string,
    dropdownItem1Icon?: StaticImport | string,
    dropdownItem2?: string,
    dropdownItem2Icon?: StaticImport | string,
    dropdownItem3?: string,
    dropdownItem3Icon?: StaticImport | string,
    dropdownItem4?: string,
    dropdownItem4Icon?: StaticImport | string,
    dropdownItem5?: string,
    dropdownItem5Icon?: StaticImport | string,
    dropdownItem6?: string,
    dropdownItem6Icon?: StaticImport | string,
}

function NavLink(navlinkProps: navLinkProps) {
    return (
        <div className="relative group">
            {!navlinkProps.dropdown && (
                <Link
                    href={`${navlinkProps.to}`}
                    className="font-poppins font-medium text-base text-[#050B20] p-3"
                >
                    {navlinkProps.name}
                </Link>
            )}
            {navlinkProps.dropdown && (
                <div className="relative flex flex-col items-start justify-start">
                    <div className="flex flex-row justify-start items-center gap-1 cursor-pointer p-3 rounded-lg rounded-b-[0]
                                    transition-all duration-500 group-hover:bg-[#E9F2FF] group-hover:shadow-lg ">
                        <p className="font-poppins font-medium text-base text-[#050B20]">
                            {navlinkProps.name}
                        </p>
                        <Image src={downArrow} alt="Arrow icon." width={20} className={'transition duration-500 rotate-0 group-hover:rotate-180'}/>
                    </div>
                    <div className="absolute flex top-full left-0 bg-[#E9F2FF] flex-col justify-start items-start gap-6 px-4 pb-6 pt-4 rounded-2xl rounded-l-[0] shadow-lg
                                    transition-all duration-500 opacity-0 group-hover:opacity-100 w-0 group-hover:w-[200px] ">
                        {navlinkProps.dropdownItem1 && (
                            <Link href={`${navlinkProps.dropdownItem1}`} className="hidden group-hover:flex flex-row justify-start items-center gap-2 transition-all duration-500 hover:scale-105">
                                {navlinkProps.dropdownItem1Icon && (
                                    <Image src={navlinkProps.dropdownItem1Icon} alt="Dropdown menu icon." width={30} />
                                )}
                                <p className="font-poppins font-medium text-base text-[#050B20] text-nowrap">{navlinkProps.dropdownItem1}</p>
                            </Link>
                        )}
                        {navlinkProps.dropdownItem2 && (
                            <Link href={`${navlinkProps.dropdownItem2}`} className="hidden group-hover:flex flex-row justify-start items-center gap-2 transition-all duration-500 hover:scale-105">
                                {navlinkProps.dropdownItem2Icon && (
                                    <Image src={navlinkProps.dropdownItem2Icon} alt="Dropdown menu icon." width={30} />
                                )}
                                <p className="font-poppins font-medium text-base text-[#050B20] text-nowrap">{navlinkProps.dropdownItem2}</p>
                            </Link>
                        )}
                        {navlinkProps.dropdownItem3 && (
                            <Link href={`${navlinkProps.dropdownItem3}`} className="hidden group-hover:flex flex-row justify-start items-center gap-2 transition-all duration-500 hover:scale-105">
                                {navlinkProps.dropdownItem3Icon && (
                                    <Image src={navlinkProps.dropdownItem3Icon} alt="Dropdown menu icon." width={30} />
                                )}
                                <p className="font-poppins font-medium text-base text-[#050B20] text-nowrap">{navlinkProps.dropdownItem3}</p>
                            </Link>
                        )}
                        {navlinkProps.dropdownItem4 && (
                            <Link href={`${navlinkProps.dropdownItem4}`} className="hidden group-hover:flex flex-row justify-start items-center gap-2 transition-all duration-500 hover:scale-105">
                                {navlinkProps.dropdownItem4Icon && (
                                    <Image src={navlinkProps.dropdownItem4Icon} alt="Dropdown menu icon." width={30} />
                                )}
                                <p className="font-poppins font-medium text-base text-[#050B20] text-nowrap">{navlinkProps.dropdownItem4}</p>
                            </Link>
                        )}
                        {navlinkProps.dropdownItem5 && (
                            <Link href={`${navlinkProps.dropdownItem5}`} className="hidden group-hover:flex flex-row justify-start items-center gap-2 transition-all duration-500 hover:scale-105">
                                {navlinkProps.dropdownItem5Icon && (
                                    <Image src={navlinkProps.dropdownItem5Icon} alt="Dropdown menu icon." width={30} />
                                )}
                                <p className="font-poppins font-medium text-base text-[#050B20] text-nowrap">{navlinkProps.dropdownItem5}</p>
                            </Link>
                        )}
                        {navlinkProps.dropdownItem6 && (
                            <Link href={`${navlinkProps.dropdownItem6}`} className="hidden group-hover:flex flex-row justify-start items-center gap-2 transition-all duration-500 hover:scale-105">
                                {navlinkProps.dropdownItem6Icon && (
                                    <Image src={navlinkProps.dropdownItem6Icon} alt="Dropdown menu icon." width={30} />
                                )}
                                <p className="font-poppins font-medium text-base text-[#050B20] text-nowrap">{navlinkProps.dropdownItem6}</p>
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavLink;
