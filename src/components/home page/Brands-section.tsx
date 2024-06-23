"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

import volkswagen from '@/assets/brands/volkswagen.svg';
import audi from '@/assets/brands/audi.svg';
import toyota from '@/assets/brands/toyota.svg';
import bmw from '@/assets/brands/bmw.svg';
import volvo from '@/assets/brands/volvo.svg';
import mercedes from '@/assets/brands/mercedes.svg';

const brands = [
    {
        image: volkswagen,
        title: "Volkswagen",
    },
    {
        image: audi,
        title: "Audi",
    },
    {
        image: mercedes,
        title: "Mercedes",
    },
    {
        image: bmw,
        title: "BMW",
    },
    {
        image: toyota,
        title: "Toyota",
    },
    {
        image: volvo,
        title: "Volvo",
    },
];


function BrandsSection() {
    return (
        <section className={'w-screen h-auto px-[5%] py-16 flex flex-col items-start justify-start gap-8'}>
            <h2 className={'text-primaryBlue font-medium font-poppins text-3xl'}>Explore Our Premium Brands</h2>
            <div
                className="h-auto w-full rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={brands}
                    direction="right"
                    speed="slow"
                />
            </div>
        </section>
    );
}

export default BrandsSection;