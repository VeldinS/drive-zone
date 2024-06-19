import React from 'react';
import Link from "next/link";
import Image from "next/image";

import downArrow from '@/assets/icons/down arrow.svg';
import rightArrow from '@/assets/icons/right arrow.svg';

interface navLinkProps {
    dropdown: boolean,
    to?: string,
    name: string,
    dropdownItem1?: string,
    dropdownItem2?: string,
    dropdownItem3?: string,
    dropdownItem4?: string,
    dropdownItem5?: string,
    dropdownItem6?: string,
}

function NavLink(navlinkProps: navLinkProps) {
    return (
        <div className="relative group">
            {!navlinkProps.dropdown && (
                <Link
                    href={`${navlinkProps.to}`}
                    className="font-audiowide font-medium text-base text-[#050B20] p-3"
                >
                    {navlinkProps.name}
                </Link>
            )}
            {navlinkProps.dropdown && (
                <div className="relative flex flex-col items-start justify-start">
                    <div className="flex flex-row justify-start items-center gap-1 cursor-pointer p-3 rounded-lg rounded-b-[0]
                                    transition-all duration-500 group-hover:bg-[#E9F2FF] group-hover:shadow-lg ">
                        <p className="font-audiowide font-medium text-base text-[#050B20]">
                            {navlinkProps.name}
                        </p>
                        <Image src={downArrow} alt="Arrow icon." width={20} />
                    </div>
                    <div className="absolute flex top-full left-0 bg-[#E9F2FF] flex-col justify-start items-start gap-4 px-4 pb-6 pt-4 rounded-2xl rounded-l-[0] shadow-lg
                                    transition-all duration-500 opacity-0 group-hover:opacity-100 w-0 group-hover:w-[150px] ">
                        {navlinkProps.dropdownItem1 && (
                            <Link href={`${navlinkProps.dropdownItem1}`} className="flex flex-row justify-start items-center gap-2">
                                <Image src={rightArrow} alt="Dropdown menu icon." width={20} />
                                <p className="font-audiowide font-medium text-base text-[#050B20] text-nowrap">{navlinkProps.dropdownItem1}</p>
                            </Link>
                        )}
                        {navlinkProps.dropdownItem2 && (
                            <Link href={`${navlinkProps.dropdownItem2}`} className="flex flex-row justify-start items-center gap-2">
                                <Image src={rightArrow} alt="Dropdown menu icon." width={20} />
                                <p className="font-audiowide font-medium text-base text-[#050B20] text-nowrap">{navlinkProps.dropdownItem2}</p>
                            </Link>
                        )}
                        {navlinkProps.dropdownItem3 && (
                            <Link href={`${navlinkProps.dropdownItem3}`} className="flex flex-row justify-start items-center gap-2">
                                <Image src={rightArrow} alt="Dropdown menu icon." width={20} />
                                <p className="font-audiowide font-medium text-base text-[#050B20] text-nowrap">{navlinkProps.dropdownItem3}</p>
                            </Link>
                        )}
                        {navlinkProps.dropdownItem4 && (
                            <Link href={`${navlinkProps.dropdownItem4}`} className="flex flex-row justify-start items-center gap-2">
                                <Image src={rightArrow} alt="Dropdown menu icon." width={20} />
                                <p className="font-audiowide font-medium text-base text-[#050B20] text-nowrap">{navlinkProps.dropdownItem4}</p>
                            </Link>
                        )}
                        {navlinkProps.dropdownItem5 && (
                            <Link href={`${navlinkProps.dropdownItem5}`} className="flex flex-row justify-start items-center gap-2">
                                <Image src={rightArrow} alt="Dropdown menu icon." width={20} />
                                <p className="font-audiowide font-medium text-base text-[#050B20] text-nowrap">{navlinkProps.dropdownItem5}</p>
                            </Link>
                        )}
                        {navlinkProps.dropdownItem6 && (
                            <Link href={`${navlinkProps.dropdownItem6}`} className="flex flex-row justify-start items-center gap-2">
                                <Image src={rightArrow} alt="Dropdown menu icon." width={20} />
                                <p className="font-audiowide font-medium text-base text-[#050B20] text-nowrap">{navlinkProps.dropdownItem6}</p>
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavLink;
