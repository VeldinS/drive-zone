import NavbarLight from "@/components/navbar/NavbarLight";
import LandingSection from "@/components/home-sections/Landing-section";
import BrandsSection from "@/components/home-sections/Brands-section";
import BuySellSection from "@/components/home-sections/BuySell-section";
import TypesSection from "@/components/home-sections/Types-section";
import Footer from "@/components/footer/Footer";
import PopularSection from "@/components/home-sections/Popular-section";

export default function Home() {
    return (
        <div className={'w-screen h-auto flex flex-col items-center justify-center bg-white'}>
            <NavbarLight bgColor="transparent" />
            <LandingSection />
            <BrandsSection />
            <BuySellSection />
            <PopularSection />
            <TypesSection />
            <Footer />
        </div>
    );
}
