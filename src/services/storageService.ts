import supabase from '@/lib/supabase';

export const uploadImage = async (file: File,carName:string, imageCat:string, folderName: string): Promise<string | null> => {
    try {
        const { data, error } = await supabase.storage
            .from('car-images')
            .upload(`${folderName}/${carName}/${imageCat}/${file.name}`, file);

        if (error) {
            console.error('Error uploading image:', error.message);
            return null;
        }

        // Return the full path of the uploaded image
        const filePath = data?.path ?? null;
        console.log('Image uploaded successfully:', filePath);
        return filePath;
    } catch (error) {
        console.error('Error uploading image:', error.message);
        return null;
    }
};
