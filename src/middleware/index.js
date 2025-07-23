// index.js

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import router from "./src/routes/index.js"; // Pastikan path ini benar
import "./src/utils/winston.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Konfigurasi CORS yang spesifik
const corsOptions = {
  origin: "https://binalscoffe.fikti.com", // Ganti jika domain Anda berbeda
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

// Terapkan middleware ke aplikasi utama
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Menangani preflight request untuk semua rute
app.use(cookieParser());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));

// Gunakan router Anda
app.use("/", router); // Menambahkan prefix /api ke semua rute

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;