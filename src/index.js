import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import 'dotenv/config';
import apiRoutes from './routes/index.js';

const app = express();

// --- Konfigurasi CORS ---
const allowedOrigins = [
  'https://binalscoffe.fikti.com', // Domain Frontend Produksi Anda
  'http://localhost:5173'         // Untuk development lokal
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};

// --- Middleware Utama ---
app.use(cors(corsOptions)); // Terapkan CORS yang sudah dikonfigurasi
app.use(express.json());   // Untuk parsing body JSON
app.use(fileUpload());     // Untuk menangani upload file

// --- Rute API ---
// Semua rute dari file routes/index.js akan memiliki awalan /api
app.use('/api', apiRoutes);

// --- Jalankan Server (Hanya untuk Development Lokal) ---
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
  });
}

// --- Ekspor Aplikasi untuk Vercel ---
export default app;