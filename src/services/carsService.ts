import supabase from '@/lib/supabase';
import { Car } from '@/types';

export async function addCar(car: Partial<Car>): Promise<number | null> {
    const { data, error } = await supabase
        .from('cars')
        .insert([car])
        .select('id');

    if (error) {
        console.error('Error adding car:', error.message);
        return null;
    }

    return data[0]?.id || null;
}

export async function addCarImage(carId: number, imageUrl: string): Promise<void> {
    const { data, error } = await supabase
        .from('car-images')
        .insert([{ car_id: carId, image_url: imageUrl }]);

    if (error) {
        console.error('Error inserting car image:', error.message);
    }
}
