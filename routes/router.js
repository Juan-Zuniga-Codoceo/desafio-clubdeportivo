import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const router = express.Router();
let deportes = [];


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataPath = path.join(__dirname, '..', 'data', 'deportes.json');


try {
    const data = await fs.readFile(dataPath);
    deportes = JSON.parse(data);
} catch (err) {
    console.error(err);
}

router.get('/agregar', async (req, res) => {
    const { nombre, precio } = req.query;
    deportes.push({ nombre, precio });
    try {
        await fs.writeFile(dataPath, JSON.stringify(deportes));
        res.send('Deporte agregado con éxito');
    } catch (err) {
        console.error(err);
    }
});


router.get('/deportes', (req, res) => {
    res.json({ deportes });
});


router.get('/editar', async (req, res) => {
    const { nombre, precio } = req.query;
    const deporte = deportes.find(d => d.nombre === nombre);
    if (deporte) {
        deporte.precio = precio;
        try {
            await fs.writeFile(dataPath, JSON.stringify(deportes));
            res.send('Precio del deporte actualizado con éxito');
        } catch (err) {
            console.error(err);
        }
    } else {
        res.send('Deporte no encontrado');
    }
});


router.get('/eliminar', async (req, res) => {
    const { nombre } = req.query;
    const index = deportes.findIndex(d => d.nombre === nombre);
    if (index !== -1) {
        deportes.splice(index, 1);
        try {
            await fs.writeFile(dataPath, JSON.stringify(deportes));
            res.send('Deporte eliminado con éxito');
        } catch (err) {
            console.error(err);
        }
    } else {
        res.send('Deporte no encontrado');
    }
});

export default router;

