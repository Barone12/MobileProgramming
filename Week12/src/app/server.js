const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 4000;
const DATA_FILE = path.join(__dirname, 'data.json');
const allowedOrigins = [
    'http://localhost:8081', 'http://127.0.0.1:8081',
    'app://com.example.app'
];

app.use(cors({
    origin: function (origin, callback) {
        if (origin && allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("허용되지 않은 출처"));
        }
    }
}));
