import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

interface ModelButtonProps {
    modelIcon:  StaticImport | string,
    modelName: string,
    modelLink: string
}

function ModelButton(modelProps: ModelButtonProps) {
    return (
        <Link href={modelProps.modelLink} className="flex flex-row justify-center items-center py-3 px-6 gap-2 bg-white rounded-[32px] border border-[#E9E9E9] hover:border-black hover:shadow-xl hover:scale-105 transition-all duration-500 ">
            {modelProps.modelIcon && (
                <Image src={modelProps.modelIcon} alt="Model icon." width={30} />
            )}
            <p className="font-poppins font-normal text-base text-[#050B20] text-nowrap">{modelProps.modelName}</p>
        </Link>
    );
}

export default ModelButton;