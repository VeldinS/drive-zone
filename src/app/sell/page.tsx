import NavbarLight from "@/components/navbar/NavbarLight";
import CarUploadForm from "@/components/form/CarUploadForm";
import NavbarDark from "@/components/navbar/NavbarDark";

function Page() {
    return (
        <section className={'w-screen h-auto bg-white py-16 px-[5%] flex flex-col items-center justify-center gap-8'}>
            <NavbarDark bgColor={'#050B20'} />
            <CarUploadForm />
        </section>
    );
}

export default Page;