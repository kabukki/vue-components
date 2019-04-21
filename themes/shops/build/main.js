const sass = require('sass');
const path = require('path');
const fs = require('fs');

const outputPath = path.resolve(__dirname, '../dist/shops.css');
const outputDir = path.dirname(outputPath);

try {
	const result = sass.renderSync({
		file: path.resolve(__dirname, '../src/main.scss'),
		outputStyle: 'compressed'
	});

	console.log(`Compiled in ${result.stats.duration}ms`);

	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true,  });
	}
	fs.writeFileSync(outputPath, result.css);
} catch (err) {
	console.error(err.message);
}
