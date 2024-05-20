import express, {NextFunction, Request, Response} from 'express'
const app = express()

// parsers
app.use(express.json())
app.use(express.text())


// middlewares
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname);
    next()
}

// routers
const userRouter = express.Router()
const courseRouter = express.Router()

app.use("/api/v1/users", userRouter)
app.use("/api/v1/courses", userRouter)

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
userRouter.post("/create-user", (req: Request, res: Response) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: 'User created successfully',
        data: user
    })
})


courseRouter.post("/create-course", (req: Request, res: Response) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: 'course created successfully',
        data: course
    })
})


// ! Error handling in Express
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(something);
        // res.send(false)
    } catch (error) {
        console.log(error);
        next(error)
        // res.status(400).json({
        //     success: false,
        //     message: 'failed to get data'
        // })
    }
})


// ! Global Error Handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if(error) {
        res.status(400).json({
            success: false,
            message: 'Something went wrong'
        })
    }
})


// ! Incorrect route error handling
app.all("*", (req: Request, res: Response) => {
    res.status(400).json({
        success: false,
        message: 'Route is not found'
    })
})


export default app;