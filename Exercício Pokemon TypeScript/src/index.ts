import express, {Request, Response} from 'express';

const app = express();
const port = 3000;
interface Pokemon {
    name: string;
    types: string[];
}