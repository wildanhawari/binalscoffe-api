import { Router } from "express";
import userRouter from "./user.route.js";
import categoryRoute from "./category.route.js";
import supplierRouter from "./supplier.router.js";
import productRoute from "./product.route.js";
import cartRoute from "./cart.route.js";
import orderRouter from "./order.route.js";
import orderReturnRouter from "./orderReturn.route.js";
import purchaseRouter from "./purchase.route.js";

const router = Router();

// Awalan /api sudah ditangani di index.js utama
// Jadi di sini kita langsung mendaftarkan rutenya
router.use("/users", userRouter);
router.use("/categorys", categoryRoute);
router.use("/suppliers", supplierRouter);
router.use("/products", productRoute);
router.use("/carts", cartRoute);
router.use("/orders", orderRouter);
router.use("/order-returns", orderReturnRouter);
router.use("/purchases", purchaseRouter);

// Health check untuk /api
router.get("/", (req, res) => {
  res.status(200).json({ message: "API is alive!" });
});

// Tangani 404 untuk rute di bawah /api
router.use("*", (req, res) => {
  res.status(404).json({
    message: "API endpoint not found",
  });
});

export default router;