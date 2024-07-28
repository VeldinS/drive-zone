import Navbar from "@/components/navbar/Navbar";
import CarUploadForm from "@/components/form/CarUploadForm";

function Page() {
    return (
        <section className={'w-screen h-auto bg-black py-16 px-[5%] flex flex-col items-center justify-center gap-8'}>
            <Navbar bgColor={'transparent'} />
            <CarUploadForm />
        </section>
    );
}

export default Page;