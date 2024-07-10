'use client'
import { useState } from 'react';
import { addCar, addCarImage } from '@/services/carsService';
import { uploadImage } from '@/services/storageService';

const CarUploadForm = () => {
    const [name, setName] = useState<string>('');
    const [details, setDetails] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [mainImage, setMainImage] = useState<File | null>(null);
    const [otherImages, setOtherImages] = useState<File[]>([]);
    const brandName = 'touran'; // Replace with dynamic value if available

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
        const mainImageUrl = await uploadImage(mainImage, brandName);
        if (!mainImageUrl) {
            alert('Failed to upload main image.');
            return;
        }

        // Add car details to the database
        const carId = await addCar({
            name,
            details,
            price: parseFloat(price),
            main_image_url: mainImageUrl,
        });

        if (carId) {
            // Upload other images
            for (const file of otherImages) {
                const imageUrl = await uploadImage(file, carId);
                if (imageUrl) {
                    await addCarImage(carId, imageUrl);
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
