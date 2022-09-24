"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors = require('cors');
const morgan = require('morgan');
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(cors());
app.use(morgan('dev'));
app.use(express_1.default.json());
app.use('/products', routes_1.router);
app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
app.get("/loaderio-4ac4e886c97acd258d65429abb03e317", (req, res) => res.send("loaderio-4ac4e886c97acd258d65429abb03e317"));
// app.get('/', (req: Request, res: Response) => {
//   res.setHeader('content-type', 'text/html').sendFile('/Users/aifunlook/Documents/RFP2207/rfp2207-SDC-superman/client/dist/index.html');
// });
// app.get('/bundle.js', (req: Request, res: Response) => {
//   res.setHeader('content-type', 'application/javascript').sendFile('/Users/aifunlook/Documents/RFP2207/rfp2207-SDC-superman/client/dist/bundle.js');
// });
