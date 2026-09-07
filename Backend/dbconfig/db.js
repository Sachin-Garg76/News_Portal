import mongoose from 'mongoose';

export const dbconnect = async () => {
    try {
        const com = await mongoose.connect(process.env.MONGO_URI);

        if (com) {
            console.log('DB connected');
        }
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
};