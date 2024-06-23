import Navbar from "@/components/navbar/Navbar";
import LandingSection from "@/components/home page/Landing-section";
import BrandsSection from "@/components/home page/Brands-section";

export default function Home() {
    return (
        <div className={'w-screen h-auto flex flex-col items-center justify-center bg-white'}>
            <Navbar bgColor="transparent" />
            <LandingSection />
            <BrandsSection />
        </div>
    );
}
