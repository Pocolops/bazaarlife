import mongoose from 'mongoose';

let isConnected = false; // track connection

export const connectToDB = async () => {

    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "Bazaarlife",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log('MongoDB connected');

    } catch (error) {
        console.log(error);
    }
}