import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/presentation/pages/index.html"),
        formulario: resolve(
          __dirname,
          "src/presentation/pages/formulario.html",
        ),
      },
    },
  },
});
