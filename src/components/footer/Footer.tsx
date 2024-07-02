import React from 'react';

function Footer() {
    return (
        <footer className={'w-screen h-auto px-[5%] py-8 flex flex-col items-start justify-start gap-8 bg-primaryBlue'}>
            <div className={'w-full flex flex-row items-start justify-between'}>
                <div className={'flex flex-col justify-start items-start gap-2'}>
                    <h1 className={'font-poppins text-white text-3xl'}>Join DRIVEZONE</h1>
                    <p className={'font-poppins text-white text-base'}>Receive pricing updates, shopping tips & more!</p>
                </div>
                <form>
                    <input className={'px-2 py-4 bg-white/10 rounded-[32px] w-[400px]'}/>
                </form>
            </div>
            <div className={'w-full h-[1px] bg-white/10'}></div>
            <div className={'flex flex-col items-center justify-center'}>

            </div>
        </footer>
    );
}

export default Footer;