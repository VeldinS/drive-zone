import supabase from '@/lib/supabase';

export const addCar = async (carData: any) => {
    const { data, error } = await supabase
        .from('cars')
        .insert(carData)
        .select('id')
        .single();

    if (error) {
        console.error('Error adding car:', error);
        return null;
    }

    return data.id;
};

export const addCarFeature = async (carId: number, feature: string) => {
    const { data, error } = await supabase
        .from('car_features')
        .insert({ car_id: carId, feature });

    if (error) {
        console.error('Error adding car feature:', error);
    }

    return data;
};

export const addCarImage = async (carId: number, imageUrl: string) => {
    const { data, error } = await supabase
        .from('car_images')
        .insert({ car_id: carId, image_url: imageUrl });

    if (error) {
        console.error('Error adding car image:', error);
    }

    return data;
};
