import express from 'express';
import cors from 'cors'; // Pastikan sudah diimpor
import 'dotenv/config';
import apiRoutes from './routes/index.js';

const app = express();

// --- Konfigurasi CORS ---
// Izinkan permintaan HANYA dari domain frontend Anda
// Daftar domain yang diizinkan untuk mengakses API Anda
const allowedOrigins = [
  'https://binalscoffe.fikti.com',
  'http://localhost:5173'
];

const corsOptions = {
  origin: function (origin, callback) {
    // Izinkan jika domain ada di dalam whitelist atau jika request tidak memiliki origin (misal: dari Postman)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


// Middleware dasar lainnya
app.use(express.json());

// --- Rute API ---
// Semua rute API Anda berada di sini
app.use('/api', apiRoutes);


// BLOK KODE UNTUK MENYAJIKAN FRONTEND SUDAH DIHAPUS


// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});

// Ekspor untuk Vercel
export default app;