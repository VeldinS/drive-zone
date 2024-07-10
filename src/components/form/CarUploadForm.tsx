'use client';
import React, { useState } from 'react';
import { addCar, addCarImage } from '@/services/carsService';
import { uploadImage } from '@/services/storageService';

const CarUploadForm = () => {
    const [name, setName] = useState<string>('');
    const [details, setDetails] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [mainImage, setMainImage] = useState<File | null>(null);
    const [otherImages, setOtherImages] = useState<File[]>([]);
    const [brandName, setBrandName] = useState<string>('volkswagen');
    const [type, setType] = useState<string>('SUV');

    const brands = ['volkswagen', 'audi', 'mercedes', 'volvo', 'bmw', 'toyota'];
    const types = ['SUV', 'Sedan', 'Hybrid', 'Coupe', 'Hatchback'];

    const handleMainImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setMainImage(event.target.files[0]);
            console.log("Main image selected:", event.target.files[0]);
        } else {
            console.log("No main image selected");
        }
    };

    const handleOtherImagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            setOtherImages(files);
            console.log("Other images selected:", files);
        } else {
            console.log("No other images selected");
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!name || !details || !price || !mainImage) {
            alert('Please fill in all fields and select the main image.');
            return;
        }

        // Upload the main image
        const mainImageUrl = await uploadImage(mainImage,name, brandName);
        if (!mainImageUrl) {
            alert('Failed to upload main image.');
            return;
        }

        // Construct the full URL for the main image
        const fullMainImageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/car-images/${mainImageUrl}`;

        // Add car details to the database
        const carId = await addCar({
            name,
            details,
            price: parseFloat(price),
            main_image_url: fullMainImageUrl,
            brand_id: brandName,
            type_id: type,
        });

        if (carId) {
            // Upload other images
            for (const file of otherImages) {
                const imageUrl = await uploadImage(file,name, brandName);
                if (imageUrl) {
                    const fullImageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/car-images/${imageUrl}`;
                    console.log('Other image URL:', fullImageUrl);
                    await addCarImage(carId, fullImageUrl);
                } else {
                    console.error('Failed to upload other image:', file.name);
                }
            }

            alert('Car uploaded successfully');
            // Optionally, reset the form here
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Car Name:
                    <input
                        className={'text-black'}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Details:
                    <textarea
                        className={'text-black'}
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Price:
                    <input
                        className={'text-black'}
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Brand:
                    <select
                        className={'text-black'}
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        required
                    >
                        {brands.map((brand) => (
                            <option key={brand} value={brand}>
                                {brand.charAt(0).toUpperCase() + brand.slice(1)}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Type:
                    <select
                        className={'text-black'}
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        {types.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Main Image:
                    <input
                        type="file"
                        onChange={handleMainImageChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Other Images:
                    <input type="file" multiple onChange={handleOtherImagesChange} />
                </label>
            </div>
            <button type="submit">Upload Car</button>
        </form>
    );
};

export default CarUploadForm;
