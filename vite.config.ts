import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default ({ mode }) => {
	const environments = loadEnv(mode, process.cwd());

	return defineConfig({
		plugins: [react()],
		server: { port: Number(environments.VITE_PORT), open: true }
	});
};
