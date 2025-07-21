const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    // Menjalankan query sederhana untuk mengetes koneksi
    await prisma.$queryRaw`SELECT 1`;
    console.log('✅ Berhasil terhubung ke database MySQL remote via Prisma!');
  } catch (error) {
    console.error('❌ Gagal terhubung ke database via Prisma:', error);
  } finally {
    // Selalu putuskan koneksi setelah selesai
    await prisma.$disconnect();
  }
}
main();