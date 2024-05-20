"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
// middlewares
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello Devs!')
// })
app.post('/', (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Successfully recieved data'
    });
});
// * params --> parameter
app.get('/:userId/:subId', (req, res) => {
    console.log(req.params);
    res.send('Hello Devs!');
});
// * query --> parameter
app.get('/', logger, (req, res) => {
    console.log(req.query);
    res.send('Hello Devs!');
});
exports.default = app;
