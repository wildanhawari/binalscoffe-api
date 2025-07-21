import express from "express";
import "dotenv/config";
import { PrismaClient } from '@prisma/client';
import appMiddleware from "./middleware/index.js";

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

// Fungsi utama untuk memulai server
async function startServer() {
  try {
    // 1. Coba hubungkan ke database saat startup
    await prisma.$connect();
    console.log('✅ Database connected successfully on startup!');

    // --- PERUBAHAN DIMULAI DI SINI ---

    /**
     * Health Check Endpoint
     * @route GET /status
     * @description Mengecek status server dan koneksi database.
     * @access Public
     */
    app.get('/status', async (req, res) => {
      try {
        // Cek koneksi database secara real-time dengan query ringan
        await prisma.$queryRaw`SELECT 1`;
        
        // Jika berhasil, kirim status OK
        res.status(200).json({
          status: 'OK',
          message: 'Server is running and database is connected.'
        });
      } catch (dbError) {
        // Jika koneksi database gagal, kirim status error
        console.error("Health check failed: Unable to connect to the database.", dbError.message);
        res.status(503).json({ // 503 Service Unavailable
          status: 'ERROR',
          message: 'Server is running, but database connection has been lost.',
        });
      }
    });

    // --- AKHIR DARI PERUBAHAN ---

    // Middleware aplikasi utama dijalankan setelah status check
    app.use(appMiddleware);

    // Jalankan server HANYA jika koneksi database awal berhasil
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📦 Environment: ${process.env.NODE_ENV}`);
    });

  } catch (error) {
    // Jika koneksi awal gagal, tampilkan error dan matikan proses
    console.error('❌ Unable to connect to the database on startup:');
    console.error(error);
    process.exit(1);
  }
}

// Panggil fungsi untuk memulai server
startServer();
