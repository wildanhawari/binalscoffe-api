import { PrismaClient } from '@prisma/client';

// Mencegah instance baru dibuat saat hot-reloading di development
const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;