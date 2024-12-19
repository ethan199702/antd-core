import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts()],

  build: {
    lib: {
      entry: "./components/index.ts", // 组件库的入口文件
      name: "components-pro",
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true // 允许在 Less 文件中使用 JavaScript（如果需要）
      }
    }
  }
});

