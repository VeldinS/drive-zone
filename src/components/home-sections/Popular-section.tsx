import {GetServerSideProps} from "next";
import supabase  from "@/lib/supabase";
import {Car} from "@/types";

interface CarsPageProps {
    cars: Car[];
    error?: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
    const { data: cars, error } = await supabase
        // @ts-ignore
        .from<Car>('cars')
        .select('*, brand:brands(*), type:types(*), seller:users(*)');

    if (error) {
        return { props: { error: error.message } };
    }

    return {
        props: { cars },
    };
};

const PopularSection = ({ cars, error }: CarsPageProps) => {
    if (error) {
        return <h1 className={'text-black'}>Error: {error}</h1>;
    }

    if (!cars || cars.length === 0) {
        return <h1 className={'text-black'}>No cars available</h1>;
    }
    return (
        <section className={'w-screen h-screen grid grid-cols-4'}>
            {cars.map((car) => (
                <div key={car.id}>
                    <h2>{car.name}</h2>
                    <p>Brand: {car.brand?.name}</p>
                    <p>Type: {car.type?.name}</p>
                    <p>Seller: {car.seller?.name}</p>
                    <p>Price: {car.price}</p>
                </div>
            ))}
        </section>
    );
}

export default PopularSection;