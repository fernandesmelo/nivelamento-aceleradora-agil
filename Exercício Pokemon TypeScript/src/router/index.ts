// router.js
import express from 'express';
import { getPokemon } from './controller';

const router = express.Router();

router.get('/pokemon/:name', getPokemon);

export default router;
