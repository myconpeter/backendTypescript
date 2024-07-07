import express from 'express';
import dotenv from 'dotenv';
import getLocation from './routes/getLocation.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use('/api', getLocation);
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World',
    }).status(200);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
