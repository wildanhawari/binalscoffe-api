import express from "express";
import "dotenv/config";
import { PrismaClient } from '@prisma/client';
import appMiddleware from "./middleware/index.js";

// Inisialisasi Express dan Prisma
const app = express();
const prisma = new PrismaClient();

// Terapkan middleware utama aplikasi Anda.
// Middleware ini akan menangani semua rute yang didefinisikan di dalamnya.
app.use(appMiddleware);

/**
 * Health Check Endpoint
 * @route GET /status
 * @description Mengecek status server dan koneksi database secara real-time.
 * @access Public
 */
app.get('/status', async (req, res) => {
  try {
    // Cek koneksi database dengan query ringan
    await prisma.$queryRaw`SELECT 1`;
    
    // Kirim status OK jika berhasil
    res.status(200).json({
      status: 'OK',
      message: 'Server is running and database is connected.'
    });
  } catch (dbError) {
    // Kirim status error jika koneksi database gagal
    console.error("Health check failed: Unable to connect to the database.", dbError.message);
    res.status(503).json({ // 503 Service Unavailable
      status: 'ERROR',
      message: 'Server is running, but database connection has been lost.',
    });
  }
});

// Penting: Ekspor 'app' agar Vercel bisa menggunakannya sebagai Serverless Function.
// Jangan panggil app.listen() di sini.
export default app;
