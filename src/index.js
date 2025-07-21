import express from "express";
import "dotenv/config";
import { PrismaClient } from '@prisma/client';
import appMiddleware from "./middleware/index.js";

const app = express();
const prisma = new PrismaClient();

// Initialize database connection
let isDbConnected = false;

async function initializeDatabase() {
  if (!isDbConnected) {
    try {
      await prisma.$connect();
      console.log('✅ Database connected successfully!');
      isDbConnected = true;
    } catch (error) {
      console.error('❌ Database connection failed:', error.message);
      isDbConnected = false;
    }
  }
}

/**
 * Health Check Endpoint
 * @route GET /status
 * @description Mengecek status server dan koneksi database.
 * @access Public
 */
app.get('/status', async (req, res) => {
  try {
    // Ensure database is connected
    if (!isDbConnected) {
      await initializeDatabase();
    }
    
    // Cek koneksi database secara real-time dengan query ringan
    await prisma.$queryRaw`SELECT 1`;
    
    // Jika berhasil, kirim status OK
    res.status(200).json({
      status: 'OK',
      message: 'Server is running and database is connected.',
      timestamp: new Date().toISOString()
    });
  } catch (dbError) {
    // Jika koneksi database gagal, kirim status error
    console.error("Health check failed: Unable to connect to the database.", dbError.message);
    isDbConnected = false;
    
    res.status(503).json({ // 503 Service Unavailable
      status: 'ERROR',
      message: 'Server is running, but database connection has been lost.',
      timestamp: new Date().toISOString()
    });
  }
});

// Middleware aplikasi utama dijalankan setelah status check
app.use(appMiddleware);

// Graceful shutdown handler for Prisma
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  
  initializeDatabase().then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📦 Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  }).catch((error) => {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  });
}

// Export the Express app for Vercel
export default app;