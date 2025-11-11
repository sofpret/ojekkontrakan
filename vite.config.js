import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Ganti ojek-kontrakan sesuai nama repo kamu
export default defineConfig({
  plugins: [react()],
  base: "/ojek-kontrakan/",
});

