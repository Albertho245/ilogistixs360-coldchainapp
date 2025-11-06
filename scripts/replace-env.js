const fs = require('fs');
const path = require('path');
require('dotenv').config();

const indexPath = path.join(__dirname, '../webapp/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Replace placeholder with environment variable
const sapUiCorePath = process.env.SAP_UI_CORE_PATH || 'resources/sap-ui-core.js';
html = html.replace(
  /src="resources\/sap-ui-core\.js"/,
  `src="${sapUiCorePath}"`
);

fs.writeFileSync(indexPath, html, 'utf8');
console.log(`✅ Replaced SAP UI Core path with: ${sapUiCorePath}`);

