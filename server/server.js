const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');


// create a database connection
mongoose.connect('mongodb+srv://gabrielmathias706:ttGTVAirBildxMrc@cluster0.nikc6.mongodb.net/' 
).then(()=>console.log('Connected to MongoDB')).catch(err=>console.error('Could not connect to MongoDB', err));


const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma',
        ],
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});  