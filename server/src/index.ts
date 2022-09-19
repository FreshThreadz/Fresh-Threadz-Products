import express, { Express, Request, Response } from "express";
import { router } from './routes';
import fs from 'fs';

import path from "path";
import dotenv from "dotenv";

dotenv.config();

const morgan = require('morgan');
const app: Express = express();
const port = process.env.PORT;

app.use(morgan());
app.use(express.json());
app.use('/products', router);


app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`)
});


// app.get('/', (req: Request, res: Response) => {
//   res.setHeader('content-type', 'text/html').sendFile('/Users/aifunlook/Documents/RFP2207/rfp2207-SDC-superman/client/dist/index.html');
// });

// app.get('/bundle.js', (req: Request, res: Response) => {
//   res.setHeader('content-type', 'application/javascript').sendFile('/Users/aifunlook/Documents/RFP2207/rfp2207-SDC-superman/client/dist/bundle.js');
// });