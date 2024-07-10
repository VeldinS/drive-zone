'use client'
import supabase  from "@/lib/supabase";
import { useEffect, useState } from 'react';
import {Car} from "@/types";

const PopularSection = () => {

    const [cars, setCars] = useState<Car[]>([]); // Specify the type as Car[]

    useEffect(() => {
        async function fetchCars() {
            let { data: cars, error } = await supabase
                .from('cars')
                .select('*');

            if (error) {
                console.error('Error fetching cars:', error.message);
            } else {
                if (cars === null) {
                    setCars([]);
                } else {
                    setCars(cars);
                }
            }
        }
        fetchCars();
    }, []);


    return (
        <section className={'w-screen h-screen grid grid-cols-4'}>
            <div>
                {cars.map((car:any) => (
                    <div key={car.id}>
                        <h2 className={'text-black'}>{car.name}</h2>
                        <p> className={'text-black'}Price: {car.price}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PopularSection;