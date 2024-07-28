'use client';
import React, { useState } from 'react';
import { addCar, addCarFeature, addCarImage } from '@/services/carsService';
import { uploadImage } from '@/services/storageService';

const CarUploadForm = () => {
    const [step, setStep] = useState(1);
    const [name, setName] = useState<string>('');
    const [brand, setBrand] = useState<string>('volkswagen');
    const [type, setType] = useState<string>('SUV');
    const [manufactureYear, setManufactureYear] = useState<string>('');
    const [mileage, setMileage] = useState<string>('');
    const [transmission, setTransmission] = useState<string>('automatic');
    const [fuel, setFuel] = useState<string>('petrol');
    const [price, setPrice] = useState<string>('');
    const [driveType, setDriveType] = useState<string>('FWD');
    const [condition, setCondition] = useState<string>('new');
    const [engineSize, setEngineSize] = useState<string>('');
    const [doors, setDoors] = useState<string>('5');
    const [cylinders, setCylinders] = useState<string>('');
    const [color, setColor] = useState<string>('');
    const [vin, setVin] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [length, setLength] = useState<string>('');
    const [width, setWidth] = useState<string>('');
    const [height, setHeight] = useState<string>('');
    const [weight, setWeight] = useState<string>('');
    const [seats, setSeats] = useState<string>('');
    const [fuelTankSize, setFuelTankSize] = useState<string>('');
    const [mainImage, setMainImage] = useState<File | null>(null);
    const [otherImages, setOtherImages] = useState<File[]>([]);
    const [features, setFeatures] = useState<string[]>([]);

    const brands = ['volkswagen', 'audi', 'mercedes', 'volvo', 'bmw', 'toyota'];
    const types = ['SUV', 'Sedan', 'Hybrid', 'Coupe', 'Hatchback'];
    const transmissions = ['automatic', 'manual', 'semiautomatic'];
    const fuels = ['petrol', 'diesel', 'electric', 'hybrid'];
    const driveTypes = ['FWD', '4WD', 'AWD', 'RWD'];
    const conditions = ['new', 'used'];
    const doorOptions = ['3', '5'];
    const featureOptions = [
        'air conditioning', 'digital odometer', 'heater', 'leather seats', 'panoramic moonroof',
        'tachometer', 'touchscreen display', 'anti lock braking', 'brake assist', 'child safety locks',
        'air bag', 'power door locks', 'stability control', 'traction control', 'fog lights front',
        'rain sensing wiper', 'rear spoiler', 'windows - electric', 'parking sensors', 'parking camera',
        'android connect', 'apple CarPlay', 'bluetooth', 'voice assistant'
    ];

    const handleMainImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setMainImage(event.target.files[0]);
        }
    };

    const handleOtherImagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            setOtherImages(files);
        }
    };

    const handleFeatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setFeatures((prevFeatures) =>
            checked ? [...prevFeatures, value] : prevFeatures.filter((feature) => feature !== value)
        );
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!name || !brand || !type || !manufactureYear || !mileage || !transmission || !fuel || !price || !driveType || !condition || !engineSize || !doors || !cylinders || !color || !vin || !description || !length || !width || !height || !weight || !seats || !fuelTankSize || !mainImage) {
            alert('Please fill in all fields and select the main image.');
            return;
        }

        // Upload the main image
        const mainImageUrl = await uploadImage(mainImage, name, 'main-image', brand);
        if (!mainImageUrl) {
            alert('Failed to upload main image.');
            return;
        }

        // Construct the full URL for the main image
        const fullMainImageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/car-images/${mainImageUrl}`;

        // Add car details to the database
        const carId = await addCar({
            name,
            brand,
            type,
            manufacture_year: parseInt(manufactureYear),
            mileage: parseInt(mileage),
            transmission,
            fuel,
            price: parseFloat(price),
            drive_type: driveType,
            condition,
            engine_size: parseFloat(engineSize),
            doors: parseInt(doors),
            cylinders,
            color,
            vin,
            description,
            length: parseInt(length),
            width: parseInt(width),
            height: parseInt(height),
            weight: parseInt(weight),
            seats: parseInt(seats),
            fuel_tank_size: parseFloat(fuelTankSize),
            main_image_url: fullMainImageUrl,
        });

        if (carId) {
            // Add car features to the database
            for (const feature of features) {
                await addCarFeature(carId, feature);
            }

            // Upload other images
            for (const file of otherImages) {
                const imageUrl = await uploadImage(file, name, 'other-images', brand);
                if (imageUrl) {
                    const fullImageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/car-images/${imageUrl}`;
                    await addCarImage(carId, fullImageUrl);
                }
            }

            alert('Car uploaded successfully');
            // Optionally, reset the form here
        }
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 && (
                <div className="space-y-4">
                    <div>
                        <label>
                            Car Name:
                            <input
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Brand:
                            <select
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
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
                                className="border border-gray-300 rounded p-2 w-full text-black"
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
                            Manufacture Year:
                            <input
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                type="text"
                                value={manufactureYear}
                                onChange={(e) => setManufactureYear(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Mileage:
                            <input
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                type="text"
                                value={mileage}
                                onChange={(e) => setMileage(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Transmission:
                            <select
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                value={transmission}
                                onChange={(e) => setTransmission(e.target.value)}
                                required
                            >
                                {transmissions.map((transmission) => (
                                    <option key={transmission} value={transmission}>
                                        {transmission}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Fuel Type:
                            <select
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                value={fuel}
                                onChange={(e) => setFuel(e.target.value)}
                                required
                            >
                                {fuels.map((fuel) => (
                                    <option key={fuel} value={fuel}>
                                        {fuel.charAt(0).toUpperCase() + fuel.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Price:
                            <input
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Drive Type:
                            <select
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                value={driveType}
                                onChange={(e) => setDriveType(e.target.value)}
                                required
                            >
                                {driveTypes.map((driveType) => (
                                    <option key={driveType} value={driveType}>
                                        {driveType}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Condition:
                            <select
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                value={condition}
                                onChange={(e) => setCondition(e.target.value)}
                                required
                            >
                                {conditions.map((condition) => (
                                    <option key={condition} value={condition}>
                                        {condition.charAt(0).toUpperCase() + condition.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="flex justify-between mt-4">
                        <button
                            type="button"
                            onClick={prevStep}
                            className="bg-gray-500 text-white py-2 px-4 rounded"
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            onClick={nextStep}
                            className="bg-blue-500 text-white py-2 px-4 rounded"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className="space-y-4">
                    <div>
                        <label>
                            Engine Size (L):
                            <input
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                type="text"
                                value={engineSize}
                                onChange={(e) => setEngineSize(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Doors:
                            <select
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                value={doors}
                                onChange={(e) => setDoors(e.target.value)}
                                required
                            >
                                {doorOptions.map((door) => (
                                    <option key={door} value={door}>
                                        {door}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Cylinders:
                            <input
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                type="text"
                                value={cylinders}
                                onChange={(e) => setCylinders(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Color:
                            <input
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                type="text"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            VIN:
                            <input
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                type="text"
                                value={vin}
                                onChange={(e) => setVin(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Length (mm):
                            <input
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                type="text"
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Width (mm):
                            <input
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                type="text"
                                value={width}
                                onChange={(e) => setWidth(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Height (mm):
                            <input
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                type="text"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Weight (kg):
                            <input
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                type="text"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Seats:
                            <input
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                type="text"
                                value={seats}
                                onChange={(e) => setSeats(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Fuel Tank Size (L):
                            <input
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                type="text"
                                value={fuelTankSize}
                                onChange={(e) => setFuelTankSize(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className="flex justify-between mt-4">
                        <button
                            type="button"
                            onClick={prevStep}
                            className="bg-gray-500 text-white py-2 px-4 rounded"
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            onClick={nextStep}
                            className="bg-blue-500 text-white py-2 px-4 rounded"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
            {step === 3 && (
                <div className="space-y-4">
                    <div>
                        <label>
                            Description:
                            <textarea
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Features:
                            <div className="grid grid-cols-2 gap-2">
                                {featureOptions.map((feature) => (
                                    <div key={feature}>
                                        <label className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                value={feature}
                                                checked={features.includes(feature)}
                                                onChange={handleFeatureChange}
                                            />
                                            <span>{feature}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </label>
                    </div>
                    <div className="flex justify-between mt-4">
                        <button
                            type="button"
                            onClick={prevStep}
                            className="bg-gray-500 text-white py-2 px-4 rounded"
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            onClick={nextStep}
                            className="bg-blue-500 text-white py-2 px-4 rounded"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
            {step === 4 && (
                <div className="space-y-4">
                    <div>
                        <label>
                            Main Image:
                            <input
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                type="file"
                                onChange={handleMainImageChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Other Images:
                            <input
                                className="border border-gray-300 rounded p-2 w-full text-black"
                                type="file"
                                multiple
                                onChange={handleOtherImagesChange}
                            />
                        </label>
                    </div>
                    <div className="flex justify-between mt-4">
                        <button
                            type="button"
                            onClick={prevStep}
                            className="bg-gray-500 text-white py-2 px-4 rounded"
                        >
                            Previous
                        </button>
                        <button
                            type="submit"
                            className="bg-green-500 text-white py-2 px-4 rounded"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </form>
    );
};

export default CarUploadForm;
