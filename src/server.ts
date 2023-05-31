// getting-started.js
import mongoose from "mongoose";
import app from "./app";
import config from "./config";


async function bootstrap() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to database");
        app.listen(config.port, () => {
            console.log(`Application listening on port ${config.port}`)
        })
    } catch (error) {
        console.log("Error connecting to database: ", error);

    }

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

bootstrap();