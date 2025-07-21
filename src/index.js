import express from 'express';
import cors from 'cors'; // Pastikan sudah diimpor
import 'dotenv/config';
import apiRoutes from './route/index.js';

const app = express();

// --- Konfigurasi CORS ---
// Izinkan permintaan HANYA dari domain frontend Anda
const corsOptions = {
  origin: 'https://binalscoffe.fikti.com',
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