import React from 'react';
import LinkButtonBlack from "@/components/buttons/LinkButtonBlack";

function TypesSection() {
    return (
        <section className={'w-screen h-auto px-[5%] py-16 flex flex-col justify-start items-start gap-12'}>
            <div className={'w-full h-auto flex flex-row justify-between items-center'}>
                <h1 className={'text-primaryBlue font-poppins font-semibold text-3xl tracking-wider'}>Browse by Type</h1>
                <LinkButtonBlack text={'View All'} link={'/cars'} />
            </div>
        </section>
    );
}

export default TypesSection;