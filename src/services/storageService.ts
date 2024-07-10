// src/services/storageService.ts

import supabase from '@/lib/supabase';

export const uploadImage = async (file: File, folderName: string): Promise<string | null> => {
    try {
        const { data, error } = await supabase.storage
            .from('car-images')
            .upload(`${folderName}/${file.name}`, file);

        if (error) {
            console.error('Error uploading image:', error.message);
            return null;
        }

        console.log('Image uploaded successfully:', data?.Key);
        return data?.Key || null; // Return the uploaded image's path (Key)
    } catch (error) {
        console.error('Error uploading image:', error.message);
        return null;
    }
};
