import Navbar from "@/components/navbar/Navbar";
import LandingSection from "@/components/home-sections/Landing-section";
import BrandsSection from "@/components/home-sections/Brands-section";
import BuySellSection from "@/components/home-sections/BuySell-section";

export default function Home() {
    return (
        <div className={'w-screen h-auto flex flex-col items-center justify-center bg-white'}>
            <Navbar bgColor="transparent" />
            <LandingSection />
            <BrandsSection />
            <BuySellSection />
        </div>
    );
}
