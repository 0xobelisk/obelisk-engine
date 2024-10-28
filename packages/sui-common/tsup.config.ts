import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'],
	target: 'esnext',
	format: ['esm'],
	dts: true, // 改为 true 以生成类型声明文件
	sourcemap: true,
	clean: true,
	minify: true,
});
