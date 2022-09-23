import express, { Express, Request, Response } from "express";
import { router } from './routes';
import fs from 'fs';

import path from "path";
import dotenv from "dotenv";

dotenv.config();

const cors = require('cors');
const morgan = require('morgan');
const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/products', router);


app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`)
});

app.get("/loaderio-4ac4e886c97acd258d65429abb03e317", (req, res) => res.send("loaderio-4ac4e886c97acd258d65429abb03e317"));

// app.get('/', (req: Request, res: Response) => {
//   res.setHeader('content-type', 'text/html').sendFile('/Users/aifunlook/Documents/RFP2207/rfp2207-SDC-superman/client/dist/index.html');
// });

// app.get('/bundle.js', (req: Request, res: Response) => {
//   res.setHeader('content-type', 'application/javascript').sendFile('/Users/aifunlook/Documents/RFP2207/rfp2207-SDC-superman/client/dist/bundle.js');
// });