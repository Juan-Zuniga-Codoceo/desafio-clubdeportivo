import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './routes/router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

app.listen(PORT, console.log(`🔥Server on 🔥 http://localhost:${PORT}`));

