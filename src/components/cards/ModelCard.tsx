import React from 'react';
import Image from "next/image";
import ModelButton from "@/components/buttons/ModelButton";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

interface ModelCardProps {
    image: StaticImport,
    type: string,
    typeLink: string,
    icon: StaticImport
}

function ModelCard(cardProps: ModelCardProps) {
    return (
        <div
            className={'group relative w-full h-full p-8 flex flex-col items-start justify-end rounded-2xl overflow-hidden'}>
            <Image className={'z-0'} src={cardProps.image} alt={'Car image - placeholder image for car type.'} layout="fill"
                   objectFit="cover"/>
            <div
                className={'absolute z-10 top-0 left-0 right-0 bottom-0 bg-black/40 group-hover:bg-transparent transition-all duration-500'}></div>
            <ModelButton modelIcon={cardProps.icon} modelName={cardProps.type} modelLink={cardProps.typeLink}/>
        </div>
    );
}

export default ModelCard;