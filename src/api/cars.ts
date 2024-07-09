import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from "@/lib/supabase";
import { Car } from "@/types";

interface Data {
    cars?: Car[];
    error?: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        const { data: cars, error } = await supabase
            // @ts-ignore
            .from<Car>('cars') // Provide the type argument for Car
            .select('*, brand:brands(*), type:types(*), seller:users(*)');

        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json({ cars });
    }
    // Add more methods (POST, PUT, DELETE) for other CRUD operations
}
