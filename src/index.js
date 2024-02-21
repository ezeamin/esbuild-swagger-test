import express from 'express';

import { swaggerDocs as V1SwaggerDocs } from './swagger.js';

console.clear(); // Clear any previous console logs
console.log('⌛ Initiating server...');

// Express app
const app = express();

// Server configurations
const PORT = process.env.PORT || 5000;

// Server loop
app.listen(PORT, () => {
  console.log(`✅ Server up and running -> Port ${PORT}\n`);

  V1SwaggerDocs(app, PORT);
});
