import React from 'react';
import FooterLink from "@/components/footer/FooterLink";
import Link from "next/link";

import appleIcon from '@/assets/footer/apple.svg';
import googlePlayIcon from '@/assets/footer/googlePlay.svg';
import facebookIcon from '@/assets/footer/facebook.svg';
import twitterIcon from '@/assets/footer/twitter.svg';
import instagramIcon from '@/assets/footer/instagram.svg';
import linkedInIcon from '@/assets/footer/linkedin.svg';
import Image from "next/image";


function Footer() {
    return (
        <footer className={'w-screen h-auto px-[5%] py-8 flex flex-col items-start justify-start gap-8 bg-primaryBlue'}>
            <div className={'w-full flex flex-row items-start justify-between'}>
                <div className={'flex flex-col justify-start items-start gap-2'}>
                    <h1 className={'font-poppins text-white text-3xl'}>Join DRIVEZONE</h1>
                    <p className={'font-poppins text-white text-base'}>Receive pricing updates, shopping tips & more!</p>
                </div>
                <form>
                    <div className={'p-2 pl-4 bg-white/10 rounded-[32px] w-[400px] flex flex-row justify-between items-center'}>
                        <input placeholder={'Your email address'} className={'bg-transparent w-2/3'}/>
                        <button type={'submit'} className={'px-6 py-2 text-base rounded-[32px] bg-[#405FF2]'}>Sign up</button>
                    </div>
                </form>
            </div>
            <div className={'w-full h-[1px] bg-white/10'}></div>
            <div className={'w-full flex flex-row justify-between items-start'}>
                <div className={'flex flex-col justify-start items-start gap-4'}>
                    <p className={'font-poppins text-lg text-white font-medium'}>Company</p>
                    <div className={'flex flex-col justify-start items-start gap-3'}>
                        <FooterLink href={'/about'} text={'About Us'}/>
                        <FooterLink href={'/blog'} text={'Blog'}/>
                        <FooterLink href={'/services'} text={'Services'}/>
                        <FooterLink href={'/faq'} text={'FAQ'}/>
                        <FooterLink href={'/terms'} text={'Terms'}/>
                        <FooterLink href={'/contact'} text={'Contact Us'}/>
                    </div>
                </div>
                <div className={'flex flex-col justify-start items-start gap-4'}>
                    <p className={'font-poppins text-lg text-white font-medium'}>Quick Links</p>
                    <div className={'flex flex-col justify-start items-start gap-3'}>
                        <FooterLink href={'/contact'} text={'Get in Touch'}/>
                        <FooterLink href={'/contact'} text={'Help Center'}/>
                        <FooterLink href={'/contact'} text={'Live Chat'}/>
                        <FooterLink href={'/contact'} text={'How it Works'}/>
                    </div>
                </div>
                <div className={'flex flex-col justify-start items-start gap-4'}>
                    <p className={'font-poppins text-lg text-white font-medium'}>Brands</p>
                    <div className={'flex flex-col justify-start items-start gap-3'}>
                        <FooterLink href={'/volkswagen'} text={'Volkswagen'}/>
                        <FooterLink href={'/audi'} text={'Audi'}/>
                        <FooterLink href={'/porsche'} text={'Porsche'}/>
                        <FooterLink href={'/bmw'} text={'BMW'}/>
                        <FooterLink href={'/mercedes'} text={'Mercedes'}/>
                        <FooterLink href={'/toyota'} text={'Toyota'}/>
                        <FooterLink href={'/volvo'} text={'Volvo'}/>
                        <FooterLink href={'/ford'} text={'Ford'}/>
                    </div>
                </div>
                <div className={'flex flex-col justify-start items-start gap-4'}>
                    <p className={'font-poppins text-lg text-white font-medium'}>Types</p>
                    <div className={'flex flex-col justify-start items-start gap-3'}>
                        <FooterLink href={'/suv'} text={'SUV'}/>
                        <FooterLink href={'/sedan'} text={'Sedan'}/>
                        <FooterLink href={'/hatchback'} text={'Hatchback'}/>
                        <FooterLink href={'/coupe'} text={'Coupe'}/>
                        <FooterLink href={'/hybrid'} text={'Hybrid'}/>
                    </div>
                </div>
                <div className={'flex flex-col justify-start items-start gap-4'}>
                    <p className={'font-poppins text-lg text-white font-medium'}>Company</p>
                    <div className={'flex flex-col justify-start items-stretch gap-3'}>
                        <Link href={'https://www.apple.com/store'} className={'px-4 pr-8 py-3 bg-white/10 flex flex-row justify-start items-center gap-3 rounded-2xl'}>
                            <Image src={appleIcon} alt={'Apple Logo'} width={25}/>
                            <div className={'flex flex-col justify-start items-start'}>
                                <p className={'text-[12px] text-white font-poppins font-normal'}>Download on the</p>
                                <p className={'text-base text-white font-poppins font-medium'}>Apple Store</p>
                            </div>
                        </Link>
                        <Link href={'https://play.google.com/store/apps?hl=en_US'} className={'px-4 py-3 bg-white/10 flex flex-row justify-start items-center gap-3 rounded-2xl'}>
                            <Image src={googlePlayIcon} alt={'Google Play Logo'} width={25}/>
                            <div className={'flex flex-col justify-start items-start'}>
                                <p className={'text-[12px] text-white font-poppins font-normal'}>Get it on</p>
                                <p className={'text-base text-white font-poppins font-medium'}>Google Play</p>
                            </div>
                        </Link>
                    </div>
                    <p className={'font-poppins text-lg text-white font-medium'}>Connect With Us</p>
                    <div className={'w-full flex flex-row justify-between items-center'}>
                        <div className={'w-[20px] h-[20px] relative'}>
                            <Image src={facebookIcon} alt={'Facebook icon'} fill/>
                        </div>
                        <div className={'w-[20px] h-[20px] relative'}>
                            <Image src={twitterIcon} alt={'Twitter icon'} fill/>
                        </div>
                        <div className={'w-[20px] h-[20px] relative'}>
                            <Image src={instagramIcon} alt={'Instagram icon'} fill/>
                        </div>
                        <div className={'w-[20px] h-[20px] relative'}>
                            <Image src={linkedInIcon} alt={'LinkedIn icon'} fill/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;