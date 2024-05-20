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
// routers
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", userRouter);
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello Devs!')
// })
// app.post('/', (req: Request, res: Response) => {
//     console.log(req.body);
//     res.json({
//         message: 'Successfully recieved data'
//     })
// })
// // * params --> parameter
// app.get('/:userId/:subId', (req: Request, res: Response) => {
//     console.log(req.params);
//     res.send('Hello Devs!')
//   })
// // * query --> parameter
// app.get('/', logger, (req: Request, res: Response) => {
//     console.log(req.query);
//     res.send('Hello Devs!')
//   })
// api using router
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: 'User created successfully',
        data: user
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: 'course created successfully',
        data: course
    });
});
// ! Error handling in Express
app.get("/", (req, res, next) => {
    try {
        console.log(something);
        // res.send(false)
    }
    catch (error) {
        console.log(error);
        next(error);
        // res.status(400).json({
        //     success: false,
        //     message: 'failed to get data'
        // })
    }
});
// ! Global Error Handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: 'Something went wrong'
        });
    }
});
// ! Incorrect route error handling
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: 'Route is not found'
    });
});
exports.default = app;
