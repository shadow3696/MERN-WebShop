import mongoose from 'mongoose';

const connectionToDatabase = async () => {
    try {
        mongoose.set('strictQuery', false);
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`MongoDb Connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

export default connectionToDatabase

// pishnahad amir hossein github: BlackIQ
// export default connectionToDatabase;

// import mongoose from "mongoose";

// const url = `mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`;

// const connection = mongoose.createConnection(url, (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Connected to mongodb.");
//   }
// });

// export default connection;