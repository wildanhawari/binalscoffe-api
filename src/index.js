import express from "express";
import "dotenv/config";
import { PrismaClient } from '@prisma/client'; // 1. Import PrismaClient
import appMiddleware from "./middleware/index.js";

const app = express();
const prisma = new PrismaClient(); // 2. Buat instance Prisma
const PORT = process.env.PORT || 3000;

// Fungsi utama untuk memulai server
async function startServer() {
  try {
    // 3. Coba hubungkan ke database
    await prisma.$connect();
    console.log('✅ Database connected successfully!');

    // Middleware baru dijalankan setelah koneksi DB berhasil
    app.use(appMiddleware);

    // Jalankan server HANYA jika koneksi database berhasil
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📦 Environment: ${process.env.NODE_ENV}`);
    });

  } catch (error) {
    // 4. Jika koneksi gagal, tampilkan error dan matikan proses
    console.error('❌ Unable to connect to the database:');
    console.error(error);
    process.exit(1); // Matikan aplikasi jika tidak bisa konek ke DB
  }
}

// Panggil fungsi untuk memulai server
startServer();