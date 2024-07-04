import React from 'react';
import Link from "next/link";

interface FooterLinkProps {
    href: string;
    text: string;
}

function FooterLink(LinkProps: FooterLinkProps) {
    return (
        <Link href={LinkProps.href} className={'group flex flex-col items-stretch justify-start hover:scale-105 transition-all duration-500'}>
            <p className={'font-poppins text-base text-gray-500 font-normal group-hover:text-white transition-all duration-500'}>{LinkProps.text}</p>
            <div className={'w-0 h-[1px] bg-transparent group-hover:w-full bg-white transition-all duration-500'}></div>
        </Link>
    );
}

export default FooterLink;